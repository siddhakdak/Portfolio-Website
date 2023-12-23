import React from 'react'
import './footer.css'
import{AiOutlineWhatsApp} from 'react-icons/ai'
import{FaTelegram} from 'react-icons/fa'
import{AiFillGithub} from 'react-icons/ai'
// import{BiLogoFacebookCircle} from 'react-icons/bi'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'> CopyRight @ Siddhak Dak</a>

      <ul className='permalinks'>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        {/* <li> <a href="#services">Services</a> </li> */}
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#testimonials">Certifications</a> </li>
        <li> <a href="#contact">Contact</a> </li>
      </ul>
<div className="footer__socials">
  <a href="https://www.linkedin.com/in/siddhak-dak/"><BsLinkedin/></a>
  <a href="https://twitter.com/DakSiddhak"><BsTwitter/></a>
  <a href="https://github.com/siddhakdak"><AiFillGithub/></a>
</div>

<div className="footer__copyright">
  <small>&copy; Siddhak Dak. All Right Resrved</small>
</div>

    </footer>
  )
}

export default Footer