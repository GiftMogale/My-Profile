/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const footer = () => {
  return (
   <footer>

    <a href = "#" className='footer__logo'>GIFT MANGENA</a>

    <ul className='permalinks'>
      <li> <a href='#'>Home</a></li>
      <li> <a href='#about'>About Me</a></li>
      <li> <a href='#experience'>My Experience</a></li>
      <li> <a href='#portfolio'>Portfolio</a></li>
      <li> <a href='#contact'>Contact Me</a></li>
    </ul>

<div className='footer__socials'>
<a href='https://www.linkedin.com/in/gift-mangena-14538910a/?originalSubdomain=za' target= "_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/ICEP-DEV/Safety_App-Dev_UI' target= "_blank" rel="noreferrer"><BsGithub/></a>
        <a href='https://www.instagram.com/gift.mogale.m/' target= "_blank" rel="noreferrer"><BsInstagram/></a>
</div>


<div className='footer__copyright'>
  <small>
   &copy; GIFT MANGENA Profile.All rights reserved.
  </small>
</div>

   </footer>
   
  )
}

export default footer