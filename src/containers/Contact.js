import React from "react";
import "../styles/Contact.scss";
import FormContact from "../components/FormContact";
import Title from "../components/Title";

export default function Contact() {
  return (
      <div className="contact-main-div" name="contact">
        <Title title='CONTACT ME' subTitle='CONTACT' />
      <FormContact />
      </div>
  );
}
