import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0vvhyop', 'template_9dn602n', form.current, 'b7J1n7oXhkUFp1k-Q')
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
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option__icons'/>
            <h4>Email</h4>
            <h5>allyace34@gmail.com</h5>
            <a href="mailto:allyace34@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerFill className='contact__option__icons'/>
            <h4>Messenger</h4>
            <h5>JungChul kim</h5>
            <a href="https://m.me/chuljungkim" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option__icons'/>
            <h4>Whats APP</h4>
            <h5>+821047463066</h5>
            <a href="https://api.whatsapp.com/send?phone=821047463066" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea> 
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact