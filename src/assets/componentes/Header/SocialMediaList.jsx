import React from 'react'
import SocialMediaItem from './SocialMediaItem'
import './SocialMediaList.css'

const SocialMediaList = () => {
  return (
    <ul className='header__social-list'>
      <SocialMediaItem link="#" src="./src/assets/img/icon-github.svg" alt="Git Hub" />
      <SocialMediaItem link="#" src="./src/assets/img/icon-frontend-mentor.svg" alt="Front end mentor" />
      <SocialMediaItem link="#" src="./src/assets/img/icon-linkedin.svg" alt="Linkedin" />
      <SocialMediaItem link="#" src="./src/assets/img/icon-twitter.svg" alt="Twitter" />
    </ul>
  )
}

export default SocialMediaList