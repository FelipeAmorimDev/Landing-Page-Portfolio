import React from 'react'
import SocialMediaItem from './SocialMediaItem'
import './SocialMediaList.css'

const SocialMediaList = () => {
  return (
    <ul className='header__social-list'>
      <SocialMediaItem link="#" src="./images/icon-github.svg" alt="Git Hub" />
      <SocialMediaItem link="#" src="./images/icon-frontend-mentor.svg" alt="Front end mentor" />
      <SocialMediaItem link="#" src="./images/icon-linkedin.svg" alt="Linkedin" />
      <SocialMediaItem link="#" src="./images/icon-twitter.svg" alt="Twitter" />
    </ul>
  )
}

export default SocialMediaList