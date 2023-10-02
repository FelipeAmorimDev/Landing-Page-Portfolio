import React from 'react'
import './Logo.css'
const Logo = ({name,link}) => {
  return (
    <a className='header__logo' href={link}>{name}</a>
  )
}

export default Logo