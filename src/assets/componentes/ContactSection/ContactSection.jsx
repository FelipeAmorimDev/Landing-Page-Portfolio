import React from 'react'
import './ContactSection.css'
import ContactBtn from '../gerais/ContactBtn'
const ContactSection = () => {
  return (
    <section className="contact__bg">
      <div className="contact__container">
        <div className="contact__description">
          <h2 className="contact__title">Contact</h2>
          <p className="contact__text">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
        <form className="contact__form">
          <input type="text" name="name" id="name" placeholder='NAME' />
          <input type="email" name="email" id="email" placeholder='EMAIL' />
          <textarea name="message" id="message" cols="30" rows="10" placeholder='MESSAGE'></textarea>
          <ContactBtn text="SEND MESSAGE" className="contato"/>
        </form>
      </div>
    </section>
  )
}

export default ContactSection