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
                setErrorMessage("Your email is invalid!");
            } else {
                setErrorMessage("");
            }

        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage("");
            }
        }
        
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section id="contact-me" className="contact-me">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-display">
                <h4 className="contact-title">Got any questions? Feel free to contact me directly!</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={name}
                            onBlur={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={email}
                            onBlur={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            name="message"
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
};

export default Contact;