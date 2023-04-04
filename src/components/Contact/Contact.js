import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";

// Component to render contact form and page title
export default function Contact() {
  return (
    <div className="w-[90%] text-3xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] pt-[30px]  md:w-[500px] flex flex-col items-center justify-center font-bold">
      <h1 className="italic uppercase text-left w-full"> Get in touch... </h1>
      <ContactForm />
    </div>
  );
}
