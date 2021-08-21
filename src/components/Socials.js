import React from 'react'
import '../styles/Socials.css'
import {FaFacebook, FaDribbble,  FaGithub, FaLinkedin, FaGooglePlusSquare} from 'react-icons/fa'
import Polywork from '../images/polywork.png'

const Socials = () => {
    return (
        <div className= 'socials'>
            <a href= 'https://www.linkedin.com/in/kehinde-ayeni-4a2660196/'><FaLinkedin  className= 'icon'  /> <div className="info">connect on Linkedin</div> </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayenikehinded@gmail.com" className="link"><FaGooglePlusSquare className= 'icon' /><div className="info">connect on google</div></a>
            <a href= 'https://dribbble.com/kehinded'><FaDribbble className= 'icon' /><div className="info">connect on dribbble</div></a>
            <a href= 'https://www.facebook.com/ayeni.kehindeolutimileyin/'><FaFacebook className= 'icon'  /><div className="info">connect on facebook</div></a>
            <a  href= 'https://www.polywork.com/kehinded#'><img src={Polywork} alt="" className="img polywork" /><div className="info">connect on polywork</div></a>
            <a href= 'https://github.com/Kehinded'><FaGithub className= 'icon' /><div className="info">connect on github</div></a>
        </div>
    )
}


export default Socials
