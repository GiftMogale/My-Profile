import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container porfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>C++ Restaurant Management System</h3>
        <div className='portofolio__item-cta'>
        <a href='https://github.com/GiftMogale/Restaurant-Management-System' className='btn' target={'blank'}> Github</a>
          <a href='https://github.com/GiftMogale/Restaurant-Management-System' className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>Flutter & Dart Chat App with SocketIO and RESTAPI </h3>
        <div className='portofolio__item-cta'>
        <a href='https://github.com/ICEP-DEV/Safety_App-Dev_UI.git' className='btn' target={'blank'}> Github</a>
          <a href='https://github.com/ICEP-DEV/Safety_App-Dev_UI.git' className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3> Flutter & Dart  Responsive Web Interface with REST API</h3>
        <div className='portofolio__item-cta'>
        <a href='https://github.com/ICEP-DEV/Safety_App-Dev_UI.git' className='btn' target={'blank'}> Github</a>
          <a href='https://github.com/ICEP-DEV/Safety_App-Dev_UI.git' className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>ANGULARJs ECCOMERCE WEB</h3>
        <div className='portofolio__item-cta'>
        <a href='https://github.com/GiftMogale/firstEcommerceApp.git' className='btn' target={'blank'}> Github</a>
          <a href='https://github.com/GiftMogale/firstEcommerceApp.git' className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>Flutter http.get()</h3>
        <div className='portofolio__item-cta'>
        <a href='https://github.com/ICEP-DEV/Safety_App-Dev_UI.git' className='btn' target={'blank'}> Github</a>
          <a href='https://github.com/ICEP-DEV/Safety_App-Dev_UI.git' className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio