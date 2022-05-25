import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.jpg'
import {BiAward} from 'react-icons/bi'
import {MdWeb} from 'react-icons/md'
import {MdLibraryBooks} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
    <h5> Get To Know </h5>
    <h2> About Me </h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <BiAward className='about__icon'/>
            <h5>Experience</h5>
            <small>6month academy</small>
          </article>

          <article className='about__card'>
            <MdWeb className='about__icon'/>
            <h5>Skills</h5>
            <small>JS, HTML, CSS, React, Java, MySQL</small>
          </article>

          <article className='about__card'>
            <MdLibraryBooks className='about__icon'/>
            <h5>Project</h5>
            <small>4+ completed</small>
          </article>
        </div>
          <p>안녕하세요. Web developer가 되기 위해 노력하는 김정철입니다! WEB에 대한 전반적인 지식을 쌓고 있으며, notion에 TIL 작성하고 있습니다. 1일 1커밋, 1일 1운동으로 개발자가 되기 위한 노력과 건강을 지키기 위한 노력을 하고 있습니다.</p>
      </div>
    </div>
    </section>
  )
}

export default About