import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
export default function Contact() {
  return (
      <div className="w-[90%] pb-[10%]  md:w-[500px] flex flex-col items-center justify-center">
    <ContactForm />
      </div>
  );
}
