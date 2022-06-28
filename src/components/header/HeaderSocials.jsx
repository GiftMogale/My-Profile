import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/gift-mangena-14538910a/?originalSubdomain=za' target= "_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/GiftMogale' target= "_blank" rel="noreferrer"><BsGithub/></a>
        <a href='https://www.instagram.com/gift.mogale.m/' target= "_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials