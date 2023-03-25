import React from "react";
import "../styles/Contact.scss";
import FormContact from "../components/FormContact";

export default function Contact() {
  return (
    <>
      <div className="contact-main-div" name="contact">
      <p className="p-github">
        Click{" "}
        <a
          className="a-github"
          href="https://github.com/tomasleggire"
          target="_blank"
        >
          HERE
        </a>
        {' '}to see my all repositories
      </p>
      <FormContact />
      </div>
      <div className="footer-img-desktop"></div>
      <div className="footer-img-mobile"></div>
    </>
  );
}
