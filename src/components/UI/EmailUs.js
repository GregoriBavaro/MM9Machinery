//Hooks
import React, { useRef } from "react";
import useInput from "../Hooks/use-input";
import Notifications from "../Hooks/use-notifications";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify"

//Components
import SubmitButton from "./SubmitButton";

//CSS
import "./EmailUs.css";
import "react-toastify/dist/ReactToastify.css";

const EmailUs = () => {
  const { t } = useTranslation();
  const form = useRef();

  const {
    notify200,
    notify400
  } = Notifications();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }


  const sendEmail = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    emailjs
      .sendForm(
        "service_78xzy02",
        "template_il8l46p",
        form.current,
        "_qKrXEZhNIK_Gl97P"
      )
      .then(
        (response) => {
          console.log(response.text);
          if (response.text === "OK") notify200();
        },
        (error) => {
          console.log(error.text);
          if (error) notify400();
        }
      );
    resetNameInput();
    resetEmailInput();
    resetMessageInput();
  };

  const nameInputClasses = nameInputHasError
    ? "email-form-container invalid"
    : "email-form-container";

  const emailInputClasses = emailInputHasError
    ? "email-form-container invalid"
    : "email-form-container";

  const messageInputClasses = messageInputHasError
    ? "email-form-container invalid"
    : "email-form-container";

  return (
    <div className="email-container">
      <h4>{t("send_us_a_message")}</h4>
      <form ref={form} onSubmit={sendEmail}>
        <div className={nameInputClasses}>
          <label>{t("your_name")}</label>
          <input
            type="text"
            name="user_name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">{t("name_must_not_be_empty")}</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label>{t("your_email")}</label>
          <input
            type="email"
            name="user_email"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className="error-text">{t("please_enter_a_valid_email")}</p>
          )}
        </div>
        <div className={messageInputClasses}>
          <label className="message-label">{t("text_label")}</label>
          <textarea
            name="message"
            onChange={messageChangedHandler}
            onBlur={messageBlurHandler}
            value={enteredMessage}
          />
          {messageInputHasError && (
            <p className="error-text">{t("please_enter_a_message")}</p>
          )}
        </div>
        <div className="form-button-container">
            <SubmitButton dis={!formIsValid}> {t("send")}</SubmitButton>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default EmailUs;
