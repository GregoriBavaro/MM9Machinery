//Hooks
import { Fragment, useRef, useState } from "react";
import useInput from "../../Hooks/use-input";
import useHttp from "../../Hooks/use-http";
import { useTranslation } from "react-i18next";
import { BallTriangle } from "react-loader-spinner";
import { AnimatePresence } from "framer-motion";
import Notifications from "../../Hooks/use-customNotifications";

//CSS
import "./LogInForm.css";
import "../../UI/EmailUs.css";

//Components
import SubmitButton from "../../UI/SubmitButton";
import { Form, json, redirect } from "react-router-dom";

const LogInForm = () => {
  const { t } = useTranslation();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  const {
    isLoading,
    error,
    setError,
    success,
    setSuccess,
    sendRequest: postUser,
  } = useHttp();

  let formIsValid = false;

  if (enteredNameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const nameInputClasses = nameInputHasError
    ? "email-form-container invalid"
    : "email-form-container";

  const passwordInputClasses = passwordInputHasError
    ? "email-form-container invalid"
    : "email-form-container";

  return (
    <Fragment>
      {isLoading && (
        <div className="loading">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      )}
      <AnimatePresence mode="wait">
        {!isLoading &&
          error &&
          Notifications(
            {
              key: "fetch-error-message",
              className: "fetch-error-message",
              h4: "Error",
              p: "Something went wrong!",
            },
            setError
          )}
        {!isLoading &&
          success &&
          Notifications(
            {
              key: "fetch-success-message",
              className: "fetch-success-message",
              h4: "Success",
              p: "Successfully logged in!",
            },
            setSuccess
          )}
      </AnimatePresence>

      <div className="admin-responsive-container">
        <div className="login-form-wrapper">
          <Form method="post">
            <h1>{t("log_in")}</h1>
            <div className={nameInputClasses}>
              <label htmlFor="name">{t("admin_name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={nameChangedHandler}
                onBlur={nameBlurHandler}
                value={enteredName}
              />
              {nameInputHasError && (
                <p className="error-text">
                  {t("administrator_must_not_be_empty")}
                </p>
              )}
            </div>
            <div className={passwordInputClasses}>
              <label htmlFor="password">{t("admin_password")}</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={passwordChangedHandler}
                onBlur={passwordBlurHandler}
                value={enteredPassword}
              />
              {passwordInputHasError && (
                <p className="error-text">
                  {t("please_enter_a_valid_password")}
                </p>
              )}
            </div>
            <div className="form-button-container">
              <SubmitButton dis={!formIsValid}> {t("login")}</SubmitButton>
            </div>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default LogInForm;
export async function action({ request }) {
  const data = await request.formData();
  const authData = {
    username: data.get("name"),
    password: data.get("password"),
  };

  const response = await fetch(
    "https://localhost:7058/api/authentication/login",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    }
  );
  // return some data in order to show a message where the form is submitted, the validation errors from the back end for example
  // 422 validation errors

  // if (response.status === 422 || response.status === 401) {
  //   return response;
  // }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.jwtToken;

  localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());
  return redirect("/master-admin/clients");
}
