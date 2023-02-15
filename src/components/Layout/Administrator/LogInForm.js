//Hooks
import { Fragment, useRef, useState } from "react";
import useInput from "../../Hooks/use-input";
import { useTranslation } from "react-i18next";

//CSS
import "./LogInForm.css";

//Components
import SubmitButton from "../../UI/SubmitButton";

const LogInForm = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [loginScreenVisible, setLoginScreenVisible] = useState(true);

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

  let formIsValid = false;

  if (enteredNameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(enteredName);

    resetNameInput();
    resetPasswordInput();
    setLoginScreenVisible(false);
  };

  const nameInputClasses = nameInputHasError
    ? "email-form-container invalid"
    : "email-form-container";

  const passwordInputClasses = passwordInputHasError
    ? "email-form-container invalid"
    : "email-form-container";

  return (
    <Fragment>
      <div className="login-form-container">
        <form ref={form} onSubmit={formSubmissionHandler}>
          <div className={nameInputClasses}>
            <label htmlFor="name">{t("admin_name")}</label>
            <input
              type="text"
              id="name"
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
              onChange={passwordChangedHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
            />
            {passwordInputHasError && (
              <p className="error-text">{t("please_enter_a_valid_password")}</p>
            )}
          </div>
          <div className="form-button-container">
            <SubmitButton dis={!formIsValid}> {t("login")}</SubmitButton>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default LogInForm;
