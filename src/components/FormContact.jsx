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
            <form ref={form} onSubmit={sendEmail} className='form-contact'>
                <div className='form-names'>
                    <div className='form-names-name'>
                        <label className='label'>NAME</label>
                        <input type='text' name="user_name" className='input-name' />
                    </div>
                    <div className='form-names-email'>
                        <label className='label'>EMAIL</label>
                        <input type='text' name="user_email" className='input-email' />
                    </div>
                </div>
                <div className='form-message'>
                    <label className='label'>MESSAGE</label>
                    <textarea name="message" className='form-msg-input' />
                </div>
                <input type="submit" value="Send" className='btn-send' />
            </form>
        </div>
    )
}

