import React from 'react'
import './about.css'
import ME from '../../assets/about-gift.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {RiFilePaper2Fill} from 'react-icons/ri'


const About = () => {
  return (
 <section id='about'>
  <h5>Get To Know</h5>
  <h2>About Me</h2>

  <div className='container about__container'>
  <div className='about__me'>
   <div className='about__me-image'>
    <img src={ME} alt='About' />
   </div>
  </div>

  <div className='about__content'>
    <div className='about__cards'>


      <article className='about__card'> 
      <FaAward className='about__icon'/>
      <h5>Experience</h5>
      <small>6+ months Working</small>
      </article>
      
      <article className='about__card'> 
      <VscFolderLibrary className='about__icon'/>
      <h5>Projects</h5>
      <small>5+ Completed</small>
      </article>

      
      <article className='about__card'> 
      <RiFilePaper2Fill className='about__icon'/>
      <h5>Certificates</h5>
      <small>2+ Earned</small>
      </article>
    </div>
    <p>
I am a self motivated software development student at Tshwane University of Technology in South Africa with 6 months of internship experience in Frontend development using Flutter and Dart building cross platform applications. I also have some experience in JavaScript library -  React.js to build interactive elements on websites and Node.js for backend. I have proven experience in developing fully functional features and connecting respective APIs. Please see link to github repo.

</p>

<a href='#contact' className='btn btn-primary'>Let's Talk </a>
  </div>
  </div>
 </section>
  )
}

export default About