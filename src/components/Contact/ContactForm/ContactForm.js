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
    <>
    <form ref={form} onSubmit={sendEmail} className="bg-slate-200 rounded p-5">
      <label className="text-sm font-thin">Name</label>
      <input type="text" name="user_name" className="boder-b  bg-slate-50 border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline" />
      <label className="text-sm font-thin">Email</label>
      <input type="email" name="user_email" className="boder-b  bg-slate-50 border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline" />
      <label className="text-sm font-thin">Message</label>
      <textarea name="message" className="boder-b  bg-slate-50 border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline"/>
      <input type="submit" value="Send" className=" bg-slate-50 border-none w-1/5 rounded text-gray-700 mr-3 py-1 px-2 leading-tight hover:bg-white text-sm "/>
    </form>

    </>
  );
};