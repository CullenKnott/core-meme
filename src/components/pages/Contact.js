import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { validateEmail } from "../../utils/helpers";
require("dotenv").config();

function Contact() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errMessage, setErrMessage] = useState("");
  const { name, email, message } = formState;

  if (state.succeeded) {
    return (
      <div>
        <p>Thanks for reaching out!</p>
        <button className="button" onClick={() => window.open("/#contact")}>
          Back to About
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrMessage("You have entered an invalid email.");
      } else {
        setErrMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrMessage(`A ${e.target.name} is required.`);
      } else {
        setErrMessage("");
      }
    }
    if (!errMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section id="contactMe" className="contact">
      <div className="flex-row">
        <h2 className="section-title border">Get in touch</h2>
      </div>

      {/* contact form */}
      <div className="form">
        <h3>Get In Touch</h3>
        <hr />
        <form id="contact-form" onSubmit={handleSubmit}>
          {/* name section */}
          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              className="input"
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          {/* email section */}
          <div className="field">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          {/* message section */}
          <div className="field">
            <label className="label">Message</label>
            <input
              className="input"
              type="text"
              name="message"
              row="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errMessage && (
            <div>
              <p className="danger">{errMessage}</p>
            </div>
          )}
          <button className="button" data-testid="button" type="submit">
            submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;