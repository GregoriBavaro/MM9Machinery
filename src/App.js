//Hooks
import React, { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
// import AnimatedRoute from "./components/Hooks/use-AnimatedRoute";
import {router} from "./components/Hooks/use-AnimatedRoute"

function App() {
  return (
    <Fragment>
      <RouterProvider router={router}/>
    </Fragment>
  );
}

export default App;
