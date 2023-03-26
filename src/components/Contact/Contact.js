import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import headshot from "./pp.png";
export default function Contact() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-3/4 flex flex-col justify-center items-center">
        <h1> contact me</h1>
    <ContactForm/>
        <p className="text-sm">
          TEST
        </p>
        <img src={headshot} alt="headshot of victoria lampard" />
      </div>
    </div>
  );
}
