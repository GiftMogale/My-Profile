import React from 'react'
import './experience.css'
import {FaCheckDouble} from 'react-icons/fa'

const experience = () => {
  return (
   <section id='experience'>
    <h5>The Skills I Have</h5>
    <h2>My Experience</h2>
    <div className='container experience__container'>
    <div className='experience__frontend'>
    <h3>Frontend Development</h3>
    <div className='experience_content'></div>
    
    <article className='experience_details'>
    <FaCheckDouble className='experience_details-icon'/>
    <div>
    <h4>HTML</h4>
    <small className='text_light'>Experienced</small>
    </div>
    </article>
   
    <article className='experience_details'>
    <FaCheckDouble className='experience_details-icon'/>
    <div>
    <h4>CSS</h4>
    <small className='text_light'>Intermediate</small>
    </div>
    </article><article className='experience_details'>
    <FaCheckDouble className='experience_details-icon'/>
    <div><h4>JavaScript</h4>
    <small className='text_light'>Experienced</small></div>
    </article><article className='experience_details'>
    <FaCheckDouble className='experience_details-icon'/>
    <div><h4>Flutter & Dart</h4>
    <small className='text_light'>Experienced</small></div>
    </article><article className='experience_details'>
    <FaCheckDouble className='experience_details-icon'/>
    <div>
    <h4>React</h4>
    <small className='text_light'>Intermediate</small>
    </div>
    </article>
    </div>
    <div className='experience__backend'>

{/* END OF FRONTEND */}

    <h3>Backend Development</h3>
    <div className='experience_content'></div>
    <article className='experience_details'>
    <FaCheckDouble className='experience_details-icon'/>
    <div><h4>Node JS</h4>
    <small className='text_light'>Intermediate</small></div>
    </article>
    <article className='experience_details'>
    <FaCheckDouble className='experience_details-icon'/>
    <div>
      <h4>MySQL</h4>
    <small className='text_light'>Experienced</small>
    </div>
    </article>
    <article className='experience_details'>
    </article>
    </div>
      </div>
   </section>
  )
}

export default experience