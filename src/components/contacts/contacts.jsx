import React from 'react'
import './contacts.css'
import {MdContactMail} from 'react-icons/md'
import {ImTwitter} from 'react-icons/im'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from  'emailjs-com'



const Contact = () =>  {
const form  = useRef();


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_519gck7', 'template_qces625', form.current, 'Hax1w3TspSv2zcMQo')
  
  e.target.reset()
};


  return (
  <section id='contact'>
    <h5>
      Get In Touch
    </h5>
    <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className='contact__options'>
      <article className='contact__option'>
        <MdContactMail className='contact__option-icon' />
       <h4>Email</h4>
       <h5>giftmangena222@gmail.com</h5>
       <a href='mailto:giftmangena222@gmail.com' >Send Email</a> 
      </article>
      <article className='contact__option'>
        <ImTwitter  className='contact__option-icon'/>
       <h4>My Twitter Account</h4>
       <a href='https://twitter.com/Mangena_G' target='_blank' rel="noreferrer">Let's Connect</a> 
      </article> <article className='contact__option'>
        <IoLogoWhatsapp className='contact__option-icon'/>
       <h4>WhatsApp ME</h4>
       <h5>+27 67 988 5635</h5>
       <a href='https://api.whatsapp.com/send?phone=0764635991' target='_blank' rel="noreferrer">Send Message</a> 
      </article>
      </div>
      {/* END OF CONTACT OPTIONS*/}
      <form ref={form} onSubmit= {sendEmail}>
       <input type= 'text' name = 'name' placeholder='Your Full Name' required/> 
       <input type='email' name = 'email' placeholder='Your Email' required/> 
       <textarea name='message' rows= '7' placeholder='Your Message' required />
      <button type='submit' className='btn btn-primary'>Send Message</button>

      </form>
    </div>
  </section>
  )
}

export default Contact