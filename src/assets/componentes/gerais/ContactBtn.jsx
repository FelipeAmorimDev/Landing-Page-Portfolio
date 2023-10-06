import React from 'react'
import './ContactBtn.css'

function handleClick(event) {
}

const ContactBtn = ({ text }) => {
  return (
    <button className='contact-btn' onClick={handleClick}>{text}</button>
  )
}

export default ContactBtn