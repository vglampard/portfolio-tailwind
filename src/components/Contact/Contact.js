import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
export default function Contact() {
  return (
      <div className="w-[90%] pb-[10%] pt-20 md:w-[500px] flex flex-col items-center justify-center gap-3 font-thin">
        <h1>I'm always on the lookout for new projects, tips or feedback on my current ones, and opportunities to chat. Please, get in touch!</h1>
    <ContactForm />
      </div>
  );
}
