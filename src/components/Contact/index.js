import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errMessage, setErrMessage] = useState("");

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            
            if (!isValid) {
                setErrMessage("Your email is invalid!");
            } else {
                setErrMessage("");
            }

        } else {
            if (!e.target.value.length) {
                setErrMessage(`${e.target.name} is required`);
            } else {
                setErrMessage("");
            }
        }
        
        if (!errMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section id="contact-me" className="contact-me">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-display">
                <h4 className="contact-title">Got any questions? Feel free to contact me directly!</h4>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='font-weight-bold' htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className='form-control'
                            name="name"
                            defaultValue={name}
                            onBlur={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='font-weight-bold' htmlFor="email">Email address:</label>
                        <input
                            type="email"
                            className='form-control'
                            name="email"
                            defaultValue={email}
                            onBlur={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='font-weight-bold' htmlFor="message">Message:</label>
                        <textarea
                            name="message"
                            className='form-control'
                            rows="5"
                            defaultValue={message}
                            onBlur={handleChange}
                        />
                        {errMessage && (
                            <div>
                                <p className="error-text">{errMessage}</p>
                            </div>
                        )}
                    </div>
                    <button className='btn btn-primary mb-2 contact-me-btn' type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
};

export default Contact;