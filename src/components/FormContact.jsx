import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/FormContact.scss';

export default function FormContact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8t7h4xr', 'template_6sadc4u', form.current, 'pWAZtesL7h2wPSXk0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="main-form">
            <h1 className="form-title">Get in touch</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}