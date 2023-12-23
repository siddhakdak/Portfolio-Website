import React, { useRef } from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_3hapvgs', 'template_si5qikk', form.current, '-X00OkMI4B_fByHhe')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>siddhakdak19@gmail.com</h5>
            <a href="mailto:<siddhakdak19@gmail.com>" >Send a Message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Siddhak Dak</h5>
            <a href="https://api.whatsapp.com/send?phone=8387967670" >Send a Message</a>
          </article>
        </div>
        {/* end of contact form  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Enter your full Name' required />
          <input type="email" name="email" placeholder='Enter your email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact