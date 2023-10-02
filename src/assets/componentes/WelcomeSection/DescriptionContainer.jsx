import React from 'react'
import DescriptionBtn from './DescriptionBtn'

const DescriptionContainer = () => {
  return (
    <div className='welcome__description'>
          <h1>Nice to <br className='wordbreak'/> meet you!
          I’m Adam Keyes.
          </h1>
          <p>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
         <DescriptionBtn text="CONTACT ME"/>
        </div>
  )
}

export default DescriptionContainer