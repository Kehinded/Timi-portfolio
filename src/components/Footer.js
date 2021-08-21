
import { FaFacebook,  FaGithub, FaLinkedin, FaTwitter, FaGooglePlusSquare, FaPhoneAlt } from 'react-icons/fa'
import '../styles/Footer.css'
import Aos from 'aos'
import {useEffect, useState} from 'react'
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() => {
        Aos.init({
            duration: 500,
            offset: 100,
        });
    }, []) 
    const [copySuccess, setCopySuccess] = useState('');

    // your function to copy here
    
      const copyToClipBoard = async copyMe => {
        try {
          await navigator.clipboard.writeText(copyMe);
          setCopySuccess('Number Copied!');
        } catch (err) {
          setCopySuccess('Failed to copy!');
        }

        setTimeout(() => {
            setCopySuccess('')
        }, 4000);
      };
    
    return (
        <footer className= 'footer'>
            <p className= 'text' data-aos = 'fade-left'>thanks for visiting my portfolio</p>
            <ul className="list">
                <li className="item"  data-aos = 'fade-up'><a href="https://www.facebook.com/ayeni.kehindeolutimileyin/" className="link"><FaFacebook className= 'icon' /><div className="info">connect on facebook</div></a></li>
                <li className="item" data-aos = 'fade-up'><a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayenikehinded@gmail.com" className="link"><FaGooglePlusSquare className= 'icon' /><div className="info">connect on google</div></a></li>
                <li className="item" data-aos = 'fade-up'><span>{copySuccess}</span><a href="http"  className="link" onClick={(e) => {
                    e.preventDefault();
                    copyToClipBoard('08162631944')}}><FaPhoneAlt className= 'icon' /><div className="info">click to copy number</div></a></li>
                <li className="item" data-aos = 'fade-up'><a href="https://github.com/Kehinded" className="link">< FaGithub className= 'icon' /><div className="info">connect on github</div></a></li>
                <li className="item" data-aos = 'fade-up'><a href="https://www.linkedin.com/in/kehinde-ayeni-4a2660196/" className="link"><FaLinkedin className= 'icon' /><div className="info">connect on linkedin</div></a></li>
                <li className="item" data-aos = 'fade-up'><a href="https://twitter.com/KEHINDED_?s=09" className="link"><FaTwitter className= 'icon' /><div className="info">connect on twitter</div></a></li>
            </ul>
            <div className="copy-right" >
                <p className="text-1">copyright&copy;2021</p>
                <p className="text-2">ayeni kehinde timilehin</p>
            </div>
        </footer>
    )
}



export default Footer
