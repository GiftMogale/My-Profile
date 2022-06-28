/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import {IoHomeOutline} from 'react-icons/io5'
import {FaRegUser} from 'react-icons/fa'
import {BsFileEarmarkCode} from 'react-icons/bs'
import {RiContactsBookLine} from 'react-icons/ri'
import {GiOfficeChair} from 'react-icons/gi'
import {useState} from 'react'


const nav = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activenav, setActivenav]  = useState('#')
  return (
   <nav>
    <a href='#' onClick={()=>setActivenav('#')} className={activenav === '#'? 'active': '' }><IoHomeOutline/></a>
    <a href='#about' onClick={()=>setActivenav('#about')} className={activenav === '#about'? 'active': '' }><FaRegUser/></a>
    <a href='#experience'onClick={()=>setActivenav('#experience')} className={activenav === '#experience'? 'active': '' }><BsFileEarmarkCode/></a>
    <a href='#contact' onClick={()=>setActivenav('#contact')} className={activenav === '#contact'? 'active': '' }><RiContactsBookLine/></a>
    <a href='#portfolio' onClick={()=>setActivenav('#portfolio')} className={activenav === '#portfolio'? 'active': '' }><GiOfficeChair/></a>
    
   </nav>
  )
}

export default nav