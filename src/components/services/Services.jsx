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
            <h3>Intern at FORMSKART</h3>
          </div>

          <ul className="service__list">
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Completed 2 month in-Office internship.</p>
            </li>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Served more than 7000 Students</p>
            </li>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Guided 55+ Students</p>
            </li>


            
          </ul>
        </article>
        {/* end of web d  */}

        <article className='service'>
          <div className="service__head">
            <h3>Inten at BEFORV</h3>
          </div>

          <ul className="service__list">
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Social Media Graphic design Intern at BeForv(500k+ followers)</p>
            </li>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Manage Instagram Story Design</p>
            </li>
            <li>
            <BsCheckLg className='service__list-icon'/>
            <p>Guided 2 junior Designers</p>
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