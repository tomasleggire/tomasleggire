import React from "react";
import "../styles/Contact.scss";

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
      </div>
      <div className="footer-img"></div>
    </>
  );
}
