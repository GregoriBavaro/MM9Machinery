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

const LogInForm = () => {
  const [data, setData] = useState(null);
  const { t } = useTranslation();
  const form = useRef();

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

  const transformData = (data) => {
    setData(data);
  };

  const formSubmissionHandler = async (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    postUser(
      {
        url: "https://localhost:7058/api/Authentication/login",
        method: "POST",
        body: { username: enteredName, password: enteredPassword },
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=utf-8",
        },
      },
      transformData
    );

    resetNameInput();
    resetPasswordInput();
  };

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
          <form ref={form} onSubmit={formSubmissionHandler}>
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
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LogInForm;
