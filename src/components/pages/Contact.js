import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // set initial values as empty strings for their respective fields within the form
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const handleChangeInput = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "username") {
      setUsername(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleEmptyInput = (e) => {
    if (!e.target.value.length) {
      setErrMessage(`A ${e.target.name} is required.`);
    } else {
      setErrMessage("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !username) {
      setErrMessage("Email or name is invalid");
      return;
    }

    setUsername("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="myInformation" className="contact">
      {/*--------------contact form--------------- */}
      <div className="contact-form">
        <h3>Get in Touch!</h3>
        <form className="form" onSubmit={handleFormSubmit}>
          {/*name form */}
          <div>
            <label htmlFor="contact-name">name</label>
            <input
              value={username}
              name="username"
              onChange={handleChangeInput}
              type="text"
              id="contact-name"
              placeholder="Your name here"
              onBlur={handleEmptyInput}
            />
          </div>
          <div>
            <label htmlFor="contact-email">email</label>
            <input
              value={email}
              name="email"
              onChange={handleChangeInput}
              type="text"
              id="contact-email"
              placeholder="Your email here"
              onBlur={handleEmptyInput}
            />
          </div>
          <div>
            <label htmlFor="contact-message">message</label>
            <input
              value={message}
              name="message"
              onChange={handleChangeInput}
              type="text"
              id="contact-message"
              placeholder="Enter message here"
              rows="5"
              onBlur={handleEmptyInput}
            />
          </div>
          {errMessage && (
            <div>
              <p className="error-message">{errMessage}</p>
            </div>
          )}
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
