//Hooks
import React, { Fragment } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { tokenLoader } from "./components/Helpers/Auth";

//Pages
import ContactUs from "./components/Pages/ContactUs";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Services from "./components/Pages/Services";
import AboutUs from "./components/Pages/AboutUs";
import GalleryChocolate from "./components/Pages/GalleryChocolate";
import GalleryBeer from "./components/Pages/GalleryBeer";
import Laminated from "./components/Pages/Laminated";
import Transport from "./components/Pages/Transport";
import Cardboard from "./components/Pages/Cardboard";
import AdminPanel from "./components/Pages/AdminPanel";
import Partners from "./components/Pages/Partners";
import Clients, { loader as clientsLoader} from "./components/Pages/Clients";
import Error from "./components/Pages/Error";
import LogInForm from "./components/Layout/Administrator/LogInForm";

//Layouts
import RootLayout from "./components/Pages/RootLayout";
import AboutUsLayout from "./components/Pages/AboutUsLayout";
import ProductsLayout from "./components/Pages/ProductsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    errorElement: <Error />,
    loader: tokenLoader,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about-us",
        element: <AboutUsLayout />,
        children: [
          {
            index: true,
            element: <AboutUs />,
          },
          {
            path: "galleryChocolate",
            element: <GalleryChocolate />,
          },
          {
            path: "galleryBeer",
            element: <GalleryBeer />,
          },
        ],
      },

      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "products",
        element: <ProductsLayout />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: "laminated",
            element: <Laminated />,
          },
          {
            path: "transport",
            element: <Transport />,
          },
          {
            path: "cardboard",
            element: <Cardboard />,
          },
        ],
      },
    ],
  },
  {
    path: "/master-admin",
    element: <AdminPanel />,
    id: "admin",
    errorElement: <Error />,
    children: [
      {
        path: "login",
        element: <LogInForm />,
      },
      {
        path: "partners",
        element: <Partners />,
      },
      {
        path: "clients",
        element: <Clients />,
        loader: clientsLoader,
      },
    ],
  },
]);


function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
