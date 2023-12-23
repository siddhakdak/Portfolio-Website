import React from 'react'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/siddhak-dak/" target='blank'><BsLinkedin/></a>
        <a href="https://github.com/siddhakdak" target='blank'><FaGithub/></a>
        <a href="https://twitter.com/DakSiddhak" target='blank'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocial