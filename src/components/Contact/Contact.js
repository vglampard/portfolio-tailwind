import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
export default function Contact() {
  return (
      <div className="w-[90%] py-[10%]  md:w-[500px] flex flex-col items-center justify-center gap-3 font-thin">
        <h1 className="italic"> {"Contact me here > > > "}</h1>
    <ContactForm />
      </div>
  );
}
