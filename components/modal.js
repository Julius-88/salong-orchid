import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function modal({ closeModal }) {
  const [state, handleSubmit] = useForm("mzboyabl");

  if (state.succeeded) {
    return (
      <>
        <div className="modalBackground flex flex-row justify-evenly p-5">
          Your question has been submitted!{" "}
          <button
            className="buttonModal w-1/4 p-2 "
            onClick={() => closeModal(false)}
          >
            X
          </button>
        </div>
        <div id="overlay"></div>
      </>
    );
  }

  return (
    <>
      <section className="modalBackground">
        <div className="modalContainer">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName"> First Name</label>
              <input type="text" id="firstName" name="firstName" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button className="buttonModal" onClick={() => closeModal(false)}>
              Cancel
            </button>
            <button className="buttonModal" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
      <div id="overlay"></div>
    </>
  );
}

export default modal;
