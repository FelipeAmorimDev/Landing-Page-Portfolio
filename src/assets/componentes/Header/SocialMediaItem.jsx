import React from 'react'

const SocialMediaItem = ({link,src,alt}) => {
  return (
    <li><a href={link}><img src={src} alt={alt} /></a></li>
  )
}

export default SocialMediaItem