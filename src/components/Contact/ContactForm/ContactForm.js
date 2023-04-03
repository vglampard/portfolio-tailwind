import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const PUB_KEY = process.env.REACT_APP_PUBLIC_KEY;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

  const form = useRef();
  
  const notify = () => toast('EMAIL SENT', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUB_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    form.current.reset();
    notify();

  };

  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
type="success"
/>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-slate-200 rounded p-5"
      >
        <input
          type="text"
          required
          name="user_name"
          placeholder="Name..."
          className="boder-b  bg-slate-50 border-none w-full text-gray-700 mr-3 py-1 my-1 px-2 leading-tight focus:outline"
        />
        <input
        required
          type="email"
          placeholder="Email..."
          name="user_email"
          className="boder-b  bg-slate-50 border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline"
        />
       
        <textarea
        required
          name="message"
          className="rounded my-1  bg-slate-50 border-none w-full text-gray-700 mr-3 py-1 h-[200px] px-2 leading-tight focus:outline"
          placeholder="Message..."
        />
        <div className="w-full flex justify-end">
        <input
          type="submit"
          value="Send"
          className=" bg-slate-50 border-none w-1/6 rounded text-gray-700 py-1 leading-tight hover:bg-white text-sm "
        />
        </div>
      </form>
    </>
  );
};



 