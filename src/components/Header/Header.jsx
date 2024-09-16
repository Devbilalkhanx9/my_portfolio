import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <section id='#' className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bilal Rauf</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA /> 

        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>


        <a href="#contact" className='scrol__down'>Scroll Down</a>
      </section>
    </header>
  )
}

export default Header
