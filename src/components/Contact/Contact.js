import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component to render contact form and page title
export default function Contact() {
  // Function that triggers toast notification
  const notify = () =>
    toast("Email sent - I'll be in touch.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      className: "text-base font-thin ",
    });

  return (
    <div className="text-3xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] pt-[30px]  w-full flex flex-col items-center justify-center font-bold">
      <ToastContainer
        position="top-right"
        autoClose={50000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        type="success"
      />
      <div className="md:w-[500px] ">
      <h1 className="italic text-2xl uppercase text-left font-thin pl-4 w-full"> Get in touch... </h1>
      <ContactForm notify={notify} />
      </div>
    </div>
  );
}
