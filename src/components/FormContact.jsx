import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/FormContact.scss';

export default function FormContact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (name.trim() === '') {
            alert('Please enter your name');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (message.trim() === '' || message.length > 500) {
            alert('Please enter a message (maximum 500 characters)');
            return;
        }

        emailjs.sendForm('service_8t7h4xr', 'template_6sadc4u', form.current, 'pWAZtesL7h2wPSXk0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                alert(`Somethig it's wrong, try again later`);
            });

        setName('');
        setEmail('');
        setMessage('');

        alert('Email enviado');
    };

    return (
        <div className="main-form">
            <h1 className="form-title">Get in touch</h1>
            <form ref={form} onSubmit={sendEmail} className='form-contact'>
                <div className='form-names'>
                    <div className='form-names-name'>
                        <label className='label'>NAME</label>
                        <input type='text' name="user_name" className='input-name' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='form-names-email'>
                        <label className='label'>EMAIL</label>
                        <input type='email' name="user_email" className='input-email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className='form-message'>
                    <label className='label'>MESSAGE</label>
                    <textarea name="message" className='form-msg-input' value={message} onChange={(e) => setMessage(e.target.value)}/>
                </div>
                <input type="submit" value="Send" className='btn-send' />
            </form>
        </div>
    )
}

