import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials  from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className = "container header_container">
        <h5>Hello I'm</h5>
        <h1>Gift Mangena</h1>
        <h5 className = "text-light">FullStack Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className = "me">
        <img src = {ME} alt="me"/>
      </div>
      <div className='scroll_down' >Welcome To My Profile</div>
      
      </div>
    </header>
  )
}

export default header