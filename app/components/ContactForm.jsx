'use client';
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify';  // Import toastify
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for toastify

function ContactForm() {
  const [result, showresult] = useState(false);
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;

  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const data = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      from_phone: formData.get("from_phone"),
      from_subject: formData.get("from_subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(`${serverurls}add-contactss/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Thank you for contacting with us ")
        formRef.current.reset();
      } else {
        toast.error("not sumitte sucessfully")
        const errorData = await response.json();
      }
    } catch (error) {
    }
  };

  return (
    <>
     <form ref={formRef} onSubmit={sendEmail}>
  <div className="rn-form-group">
    <input type="text" name="from_name" placeholder="Votre Nom" required />
  </div>

  <div className="rn-form-group">
    <input type="email" name="from_email" placeholder="Votre Email" required />
  </div>

  <div className="rn-form-group">
    <input type="text" name="from_phone" placeholder="Numéro de Téléphone" required />
  </div>

  <div className="rn-form-group">
    <input type="text" name="from_subject" placeholder="Sujet" required />
  </div>

  <div className="rn-form-group">
    <textarea name="message" placeholder="Votre Message" required></textarea>
  </div>

  <div className="rn-form-group">
    <button
      className="rn-button-style--2 btn-solid"
      type="submit"
      value="submit"
      name="submit"
      id="mc-embedded-subscribe"
    >
      Envoyer Maintenant
    </button>
 </div></form>

      {/* ToastContainer is needed to show the toasts */}
      <ToastContainer 
        position="top-right"
        autoClose={3000} // Auto-close after 5 seconds
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
       
      />
    </>
  );
}

export default ContactForm;
