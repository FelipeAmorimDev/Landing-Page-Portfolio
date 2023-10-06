import React from 'react'
import Logo from './Logo';
import SocialMediaList from './SocialMediaList';
import './Header.css'

function Header() {
  return (
    <header className='header__bg' aria-label='Header'>
      <div className='header__container'>
        <Logo name="adamkeyes" link="#" />
        <SocialMediaList />
      </div>
    </header>
  )
}

export default Header;