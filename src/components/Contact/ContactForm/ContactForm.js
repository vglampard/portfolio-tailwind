import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const PUB_KEY = process.env.REACT_APP_PUBLIC_KEY
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
    
console.log("KEYS:", SERVICE_ID, TEMPLATE_ID, PUB_KEY)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUB_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" className="bg-red-400" />
      <label>Email</label>
      <input type="email" name="user_email" className="bg-red-400" />
      <label>Message</label>
      <textarea name="message" className="bg-red-400"/>
      <input type="submit" value="Send" className="bg-red-400"/>
    </form>
  );
};