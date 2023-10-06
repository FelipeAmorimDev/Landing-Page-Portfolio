import React, { useState } from 'react'
import './ContactSection.css'
import ContactBtn from '../Gerais/ContactBtn'
const ContactSection = () => {

  function changeInputs(event) {
    const input = event.target
    const isEmail = input.id === "email"

    if (!isEmail) {
      setNome(input.value)
    } else {
      setEmail(input.value)
    }

  }

  function submitForm(event) {
    const emailInput = event.target.email
    setEmailError('')
    setNameError('')

    event.preventDefault()

    const isEmailInputValid = emailInput.validity.valid

    if (nome === '') {
      setNameError('Sorry, invalid name here')
    }
    else if (email === '' || !isEmailInputValid) {
      setEmailError('Sorry, invalid format here')
    }else{
      setEmailError('')
      setNameError('')
      setNome('')
      setEmail('')
    } 
  }

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")

  return (
    <section className="contact__bg" aria-labelledby='contact__title'>
      <div className="contact__container">
        <div className="contact__description">
          <h2 className="contact__title" id='contact__title'>Contact</h2>
          <p className="contact__text">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
        <form className="contact__form" onSubmit={submitForm} noValidate>
          <input type="text" name="name" id="name" placeholder='NAME' onChange={changeInputs} className={nameError && "email-error"}value={nome} required />
          {nameError && <span className='warninginputname'>{nameError}</span>}
          <input type="email" name="email" id="email" placeholder='EMAIL' className={emailError && "email-error"} onChange={changeInputs} value={email} required />
          {emailError && <span className='warninginput'>{emailError}</span>}
          <textarea name="message" id="message" cols="30" rows="10" placeholder='MESSAGE'></textarea>
          <ContactBtn text="SEND MESSAGE" className="contato" />
        </form>
      </div>
    </section>
  )
}

export default ContactSection