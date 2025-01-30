import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>My</h5>
      <h2>Experiences</h2>

      <div className="container service__container">


        {/* end of ui/ ux  */}
        <article className='service'>
          <div className="service__head">
            <h3>Counsellor Mentor Intern at FORMSKART</h3>
          </div>

          <ul className="service__list">
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Served as an Assistant Counseling Mentor at Formskart, providing expert guidance and support to students during
            the JoSAA counseling process.</p>
            </li>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Counseled 120+ students, achieving a 95% satisfaction rate and helping 90% secure Admissions to top prestigious
            institutions such as IITs, NITs, IIITs, and other top engineering colleges.</p>
            </li>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Developed comprehensive counseling materials. Launched a website for Formskart using WordPress.s</p>
            </li>


            
          </ul>
        </article>
        {/* end of web d  */}

        <article className='service'>
          <div className="service__head">
            <h3>Software developer Inten at iSchool Connect Pvt. Ltd.</h3>
          </div>

          <ul className="service__list">
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Engineered and maintained the ’studentprep’ dashboard. improving website uptime by 15% and user engagement
by 20%. </p>
            </li>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Launch new Packages and Conduct code review. Added 15+ Merge requests, identifying and resolving 75% of
            code-related issues before production.</p>
            </li>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Worked on CI-CD pipelines, Use Jenkins, Learned new industry standard software - Jira, Jenkins, Gitlab.</p>
            </li>
           
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Others</h3>
          </div>

          <ul className="service__list">
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Technical co-head of (Indian Blockchain Fedration)IBF for one year.</p>
            </li>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Freelance Website Development Service</p>
            </li>
            
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services