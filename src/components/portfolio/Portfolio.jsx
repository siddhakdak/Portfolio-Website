import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/codepan.jpg'
import IMG2 from '../../assets/textutils.jpg'
import IMG3 from '../../assets/NETFLIXX.jpg'
import IMG4 from '../../assets/IMG4.png'



const data = [
  {
    id: 4,
    image: IMG4,
    title:'AdminBuzz',
    github:'https://github.com/siddhakdak/HotelBuzz',
    demo:'https://scaler-admin.netlify.app/',
    tech: 'React, Tailwind, Node, Express, MongoDB'
  },
  {
    id: 1,
    image: IMG1,
    title:'CodePan',
    github:'https://github.com/siddhakdak/codestudio/tree/master',
    demo:'https://code-wiz-5ab57.web.app/home',
    tech: 'React, Tailwind, Firebase, Redux'
  },
  {
    id: 2,
    image: IMG2,
    title:'Text-Utils',
    github:'https://github.com/siddhakdak/Text-Utils',
    demo:'https://textutils-siddhak.netlify.app/',
    tech: 'Html, Css, React, JavaScript, Bootstrap'
  },
  {
    id: 3,
    image: IMG3,
    title:'Netflix',
    github:'https://github.com/siddhakdak/Netflix-using-Tailwind',
    demo:'https://netflix-siddhak.netlify.app/',
    tech: 'Html, Css, Tailwind'
  },
  

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container" >
{
  data.map(({id,image,title,github,demo, tech})=>{
    return(

      <article key={id} className="portfolio__item">
          <div className="portfolio__item-image"><img src={image} alt="" /></div>
          <h3>{title}</h3>
          <h5>{tech}</h5>
          <div className="portfolio__item-cta">
          <a href={github} className="btn" target='_blank'>Github</a>
          <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a></div>
        </article>
      
    )
  })
}



        {/* <article className="portfolio__item">
          <div className="portfolio__item-image"><img src={IMG1} alt="" /></div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://dribbble.com" className="btn btn-primary" target='_blank'>Live Demo</a></div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio