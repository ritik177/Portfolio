import React, { useRef } from 'react';
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md';
import{BsLinkedin} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';



const Contact = () => {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // const recipientEmail = e.target.email.value;
    // const senderEmail = e.target.fromEmail.value; 

    emailjs.sendForm('service_rtab17h', 'template_sxcjmm9',form.current, '5wBkrgaVLX__wbmiT',)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  };

  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

<div className="container contact_container">
<div className="contact_options">
  <article className='contact_option'>
    <MdOutlineEmail className='contact_option-icon'/>
    <h4>Email</h4>
    <h5>ritikpatel82993@gmail.com</h5>
    <a href="mailto:ritikpatel82993@gmail.com" target='_blank'>Send a message</a>
  </article>

  <article className='contact_option'>
    <BsLinkedin className='contact_option-icon'/>
    <h4>Linkedin</h4>
    <h5>Ritik Patel</h5>
    <a href="https://www.linkedin.com/in/ritik-patel-3931b5258/" target='_blank'>Send a message</a>
  </article>

  <article className='contact_option'>
    <BsWhatsapp className='contact_option-icon'/>
    <h4>Whatsaap</h4>
    <h5>+918299334222</h5>
    <a href="https://web.whatsapp.com/send?phone=+918299334222" target='_blank'>Send a message</a>
  </article>

</div>
<form ref={form} onSubmit={sendEmail}>
  <input type="text" name='name' placeholder='Your Full Name' required />
  <input type="email" name='email' placeholder='Your Email' required />
  <textarea name="message" rows={7} placeholder='Youe Message' required></textarea>
  <button type='submit' className='btn btn-primary'>Send Message</button>
</form>
</div>
    </section>
  )
}

export default Contact








