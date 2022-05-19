import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";

function Modal({ closeModal }) {
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
            <div className="form-group mx-12 ">
              <label htmlFor="Name"> Name</label>
              <input
                className="input"
                type="text"
                id="Name"
                name="Name"
                required
              />
            </div>
            <div className="form-group mx-12">
              <label htmlFor="Phone">Phone Number</label>
              <input
                className="input"
                type="tel"
                id="Phone"
                name="Phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                required
              />
            </div>
            <div className="form-group mx-12">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="input"
                id="email"
                name="email"
                required
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div className="form-group mx-12">
              <label htmlFor="message">Message</label>
              <textarea
                className="input"
                name="message"
                id="message"
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div className="flex flex-row mx-12 gap-2">
              <button className="buttonModal bg-pink-200" type="submit">
                Submit
              </button>
              <button
                className="buttonModal outline-dotted"
                onClick={() => closeModal(false)}
              >
                Cancel
              </button>
            </div>
            <ReCAPTCHA
              className="recaptcha ml-9 mt-5 md:ml-20"
              sitekey="6Lfgt_AfAAAAAHlr3yY9mNvcX57YMTsC9TxGzFGS"
            />
          </form>
        </div>
      </section>
      <div id="overlay"></div>
    </>
  );
}

export default Modal;
