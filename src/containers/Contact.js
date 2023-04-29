import React, { useState } from "react";
import "../styles/Contact.scss";
import FormContact from "../components/FormContact";
import Title from "../components/Title";
import { MdLocalPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

export default function Contact() {
  return (
    <div className="contact-main-div" name="contact">
      <Title title="CONTACT ME" subTitle="CONTACT" />
      <div className="contact-info">
        <div className="contact-info-details">
          <h2 className="h2-details">Contact Information</h2>
          <p className="p-details">
            Get in Touch and Let's Create Something Amazing: Contact Me for
            Project Inquiries, Partnerships, or Just to Say Hello
          </p>
          <DetailsDivExample title="on phone" span="+11 32834063">
            <MdLocalPhone className="details-icon" />
          </DetailsDivExample>
          <DetailsDivExample title="on mail" span="tomasleggire@hotmail.com">
            <MdMail className="details-icon" />
          </DetailsDivExample>
          <DetailsDivExample
            title="address"
            span="San Antonio de Padua, Buenos Aires, Argentina"
          >
            <MdLocationOn className="details-icon" />
          </DetailsDivExample>
        </div>
        <FormContact />
      </div>
    </div>
  );
}

function DetailsDivExample({ children, title, span }) {
  return (
    <div className="details-div-info">
      <div className="details-icon-container">{children}</div>
      <div className="details-text">
        <h3 className="h3-details">Contact {title}</h3>
        <SpanWithCopy text={span} />
      </div>
    </div>
  );
}

function SpanWithCopy({ text }) {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  function handleClick() {
    navigator.clipboard.writeText(text);
    setShowCopiedMessage(true);
    setTimeout(() => setShowCopiedMessage(false), 2000);
  }

  return (
    <>
      <span onClick={handleClick} className="span-details">{text}</span>
      <p className={`copied-p ${showCopiedMessage && 'visible-copied'}`}>Copied to clipboard!</p>
    </>
  );
}
