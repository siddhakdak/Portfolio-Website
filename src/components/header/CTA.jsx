import React from 'react'
import tickets from '../../assets/Siddhak_Dak_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        {/* uploaded my CH here */}
        <a href={tickets} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'> Let's Talk</a>

    </div>
  )
}

export default CTA