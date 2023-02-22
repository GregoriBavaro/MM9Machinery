//Hooks
import { useRouteError } from "react-router-dom";
import { Fragment } from "react";

//CSS
import PageContent from "../UI/PageContent";

//Component
import Navbar from "../Layout/Header/Navbar";
import { Suspense } from "react";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = error.message;

  if (error.status === 500) {
    message = error.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page";
  }

  return (
    <Fragment>
      <Suspense>
        <Navbar />
      </Suspense>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
};

export default ErrorPage;
