import React from "react";
import "../styles/Contact.scss";
import FormContact from "../components/FormContact";
import Title from "../components/Title";
import { MdLocalPhone } from "react-icons/md";

export default function Contact() {
  return (
    <div className="contact-main-div" name="contact">
      <Title title="CONTACT ME" subTitle="CONTACT" />
      <div className="contact-info">
        <div className="contact-info-details">
          <h2 className="h2-details">Contact Information</h2>
          <p className="p-details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis,
            iusto harum possimus non praesentium qui facere.
          </p>
          <DetailsDivExample />
          <DetailsDivExample />
          <DetailsDivExample />
        </div>
        <FormContact />
      </div>
    </div>
  );
}

function DetailsDivExample() {
  return (
    <div className="details-div-info">
      <div className="details-icon-container">
        <MdLocalPhone className="details-icon" />
      </div>
      <div className="details-text">
        <h3 className="h3-details">Contact on phone</h3>
        <span className="span-details">+012-3456-7891</span>
      </div>
    </div>
  );
}
