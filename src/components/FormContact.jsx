import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/FormContact.scss';
import toast, { Toaster } from 'react-hot-toast';

export default function FormContact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (name.trim() === '') {
            toast.error("Enter a valid name", { duration: 2500 });
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Enter a valid email address", { duration: 2500 });
            return;
        }

        if (message.trim() === '' || message.length > 500) {
            toast.error("Please enter a message (maximum 500 characters)", { duration: 2500 });
            return;
        }

        emailjs.sendForm('service_8t7h4xr', 'template_6sadc4u', form.current, 'pWAZtesL7h2wPSXk0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                toast.error("Somethig it's wrong, try again later", { duration: 2500 });

            });

        setName('');
        setEmail('');
        setMessage('');

        toast.success("Your email has been sent successfully!", { duration: 2500 });
    };

    return (
        <div className="main-form">
            <form ref={form} onSubmit={sendEmail} className='form-contact'>
                <div className='form-names-name'>
                    <label className='label'>NAME</label>
                    <input type='text' name="user_name" className='input-name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name...' />
                </div>
                <div className='form-names-email'>
                    <label className='label'>EMAIL</label>
                    <input type='email' name="user_email" className='input-email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email...' />
                </div>
                <div className='form-message'>
                    <label className='label'>MESSAGE</label>
                    <textarea name="message" className='form-msg-input' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter you message...' />
                </div>
                <button type="submit" className='btn-send'>SEND EMAIL</button>
                <Toaster position='top-center' />
            </form>
        </div>
    )
}

