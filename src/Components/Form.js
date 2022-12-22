import "./FormStyle.css";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import React from "react";
import { FaFacebookMessenger, FaWhatsapp  } from "react-icons/fa";

const Form = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ea7ynin', 'template_36c1ag8', form.current, 'ATcb3gw93uhEWkpRp')
   e.target.reset()
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
        };
  return (
      
     <div className="form"> 
        <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="">Your Name</label>
      <input type="text" name="name" />
      <label htmlFor="">Email</label>
      <input type="email" name="email" />
      <label htmlFor="">Subject</label>
      <input type="text" name="subject" />
      <label htmlFor="">Message</label>
      <textarea name="message" rows="6" placeholder="Type Your mesaage here"></textarea>
        <button className="btn">Submit</button>
    </form>
    <div className="contact_options">
        <article className="contact_option">
        <FaFacebookMessenger size={20} style={{color:"#fff", marginBottom:"0.5rem"}}/>
        <h4>Messenger</h4>
        <h5>aasishdangol</h5>
        <a href="https://m.me/aasish.dangol.56">Send Message </a>
        </article>
        <article className="contact_option">
        <FaWhatsapp size={20} style={{color:"#fff", marginBottom:"0.5rem"}}/>
        <h4>WhatsApp</h4>
        <h5>aasishdangol</h5>
        <a href="https://m.me/aasish.dangol.56">Send Message</a>
        </article>
      </div>
    {/* </div> */}
    </div>
  )
}

export default Form;
