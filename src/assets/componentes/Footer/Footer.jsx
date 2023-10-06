import React from 'react'
import Logo from '../Header/Logo'
import SocialMediaList from '../Header/SocialMediaList'
import LineSeparate from '../gerais/LineSeparate'
import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer__bg" aria-label='Footer'>
      <LineSeparate />
      <div className="footer__container">
        <Logo name="adamkeyes" link="#" />
        <SocialMediaList />
      </div>
    </footer>
  )
}

export default Footer