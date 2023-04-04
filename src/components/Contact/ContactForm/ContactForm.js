import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

//Component that takes form input and connects with emailjs to send email to my personal inbox, and includes a toast notification that the email has been sent. 

export const ContactForm = ({notify}) => {
  // imports needed to link up form to emailjs service
  const PUB_KEY = process.env.REACT_APP_PUBLIC_KEY;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const form = useRef();

  // function that sends contact email to emailjs for it to be sent to my inbox, clears the form, and triggers the toast notification;
  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUB_KEY).then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
    // form.current.reset();
    notify();
  };

  return (
    <>
      
      <form
        ref={form}
        onSubmit={sendEmail}
        className="rounded p-5 drop-shadow-md text-base font-normal leading-tight"
      >
        <input
          type="text"
          required
          name="user_name"
          placeholder="Name..."
          className="boder-b  drop-shadow  w-full  mr-3 py-1 rounded my-1 px-2  focus:outline"
        />
        <input
          required
          type="email"
          placeholder="Email..."
          name="user_email"
          className="boder-b drop-shadow rounded   w-full mr-3 py-1 px-2  focus:outline"
        />

        <textarea
          required
          name="message"
          className="rounded my-1 drop-shadow   w-full mr-3 py-1 h-[200px] px-2 focus:outline"
          placeholder="Message..."
        />
        <div className="w-full flex justify-end">
          <input
            type="submit"
            value="Send"
            className=" bg-yellow-100 transition ease-in-out duration-300 hover:scale-105 drop-shadow hover:bg-slate-600  hover:text-slate-50 hover:-translate-y-0.5 border-none w-1/6 rounded text-gray-700 py-1 leading-tight text-sm "
          />
        </div>
      </form>
    </>
  );
};
