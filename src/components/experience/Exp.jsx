import React from 'react'
import './exp.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Exp = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container exp__container">
        <div className="exp__front">
          <h3>Frontend Development</h3>
          <div className="exp__content">
            <article className='exp__detail'>
              <BsPatchCheckFill className=".exp__detail-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='exp__detail'>
              <BsPatchCheckFill className=".exp__detail-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='exp__detail'>
              <BsPatchCheckFill className=".exp__detail-icon"/>
              <div className="">              <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='exp__detail'>
              <BsPatchCheckFill className=".exp__detail-icon"/>
              <div className="">
                <h4>TailWind CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='exp__detail'>
              <BsPatchCheckFill className=".exp__detail-icon"/>
              <div className="">
                <h4>React Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exp__back">
          <h3>Backend Development</h3>
          <div className="exp__content">
            <article className='exp__detail'>
              <BsPatchCheckFill className=".exp__detail-icon"/>
              <div className="">
              <h4>PHP</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='exp__detail'>
              <BsPatchCheckFill className=".exp__detail-icon"/>
              <div className="">
              <h4>MySQL</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='exp__detail'>
              <BsPatchCheckFill className=".exp__detail-icon"/>
              <div className="">
              <h4>Node Js</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='exp__detail'>
              <BsPatchCheckFill className=".exp__detail-icon"/>
              <div className="">
              <h4>MangoDB</h4>
              <small className="text-light">Learning Phase</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exp
