import React from 'react'
import './portfolio.css'
import IMG11 from '../../assets/portfolio11.jpg'
import IMG12 from '../../assets/portfolio12.jpg'
import IMG13 from '../../assets/portfolio13.jpg'
import IMG14 from '../../assets/portfolio14.jpg'
import IMG15 from '../../assets/portfolio15.jpg'


const data = [
  {
    id: 1,
    image: IMG11,
    title: '향수 쇼핑몰',
    skills: 'Java / Spring / MySQL / Tomcat / MVC pattern / Deploy cafe24',
    github: 'https://github.com/wind340/funfume',
    demo: 'http://easydong02.cafe24.com/',
  },
  {
    id: 2,
    image: IMG12,
    title: '카페 JSP',
    skills: 'Java / JSP / MySQL / Tomcat / BootStrap',
    github: 'https://github.com/wind340/AwesomePlace',
  },
  {
    id: 3,
    image: IMG13,
    title: 'SNS CLONE',
    skills: 'React / firebase',
    github: 'https://github.com/wind340/ReactTwitterClone',
    demo: 'https://wind340.github.io/ReactTwitterClone/',
  },
  {
    id: 4,
    image: IMG14,
    title: '12간지 MBTI CLONE',
    skills: 'JavaScript / BootStrap / Netlify',
    github: 'https://github.com/wind340/MyMBTI-main',
    demo: 'https://twelvelovetypeclonesite.netlify.app/',
  },
  {
    id: 5,
    image: IMG15,
    title: '감정다이어리 클론',
    skills: 'Java / Spring / MySQL / Tomcat / MVC pattern / Deploy cafe24',
    github: 'https://github.com/wind340/emotion_diary',
    demo: 'http://easydong02.cafe24.com/',
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, skills, github, demo})=>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h5>{skills}</h5>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio