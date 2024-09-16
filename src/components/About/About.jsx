import React from 'react'
import './about.css'
import ME from '../../assets/aboutt.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Become Familiar With</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__contant">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
            <FiUsers className='about__icon'/>
              <h5>Buyers</h5>
              <small>250+ Worldwide</small>
            </article>
            <article className="about__card">
            <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>35+ Completed</small>
            </article>
          </div>

          <p>"Highly motivated Front-end Web Developer with 3+ years of experience. Skilled in HTML5, CSS3, JavaScript, React, and UI/UX design. Passionate about delivering responsive, accessible, and visually stunning web applications. Let's connect and bring your digital vision to life!"</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
