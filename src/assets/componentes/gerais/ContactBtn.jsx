import React from 'react'
import './ContactBtn.css'

const ContactBtn = ({text}) => {
  return (
    <button className='contact-btn'>{text}</button>
  )
}

export default ContactBtn