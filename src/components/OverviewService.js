import '../styles/Overview_service.css'
import serviceImage from '../images/services-img.png'
import {FaRedo} from 'react-icons/fa'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';



const OverviewService = () => {
    
    useEffect(() => {
        Aos.init({
            duration: 3000,
            offset: 150,
        });
    }, [])   
    

    return (
        <div className= 'service_section'>
            <h3>my service</h3>
            <div className="service-box">
                <figure className="img-box"><img  src={serviceImage} alt="" className="img" /></figure>
                <div className="service-list-box">
                    <ul className="service-list">
                        <li className="service-item" data-aos ='fade-up'>
                            < FaRedo className= 'service-icon'/>
                            <p> Implement responsive web designs through programming languages like HTML, CSS, and JavaScript</p>
                            {/* <figure className="img-box"><img src={htmlImg} alt="" className="img" /></figure> */}
                        </li>
                        <li className="service-item" data-aos ='fade-up'>
                            < FaRedo className= 'service-icon'/>
                            <p> Use of CSS and JavaScript frameworks such as SASS, React ad Vue Js to perform different tasks by providing common functionality.</p>
                            {/* <figure className="img-box"><img src={jsImg} alt="" className="img" /></figure> */}
                        </li>
                        <li className="service-item" data-aos ='fade-up'>
                            < FaRedo className= 'service-icon'/>
                            <p> Use of version control tools such as Git to track previous changes and prevent loss of work</p>
                            {/* <figure className="img-box"><img src={performImg} alt="" className="img" /></figure> */}
                        </li>
                        <li className="service-item" data-aos ='fade-up'>
                            < FaRedo className= 'service-icon'/>
                            <p> Use of modern web browser devloper tools such as inspector and JavaScript console
                            for testing and debugging. 
                            </p>
                            {/* <figure className="img-box"><img src={debugImg} alt="" className="img" /></figure> */}
                        </li>
                        <li className="service-item" data-aos ='fade-up'>
                            < FaRedo className= 'service-icon'/>
                            <p> Mastery use of command line or GUI for proper web performance
                            </p>
                            {/* <figure className="img-box"><img src={commandImg} alt="" className="img" /></figure> */}
                        </li>
                    </ul>
                </div>
            </div>
             
        </div>
    )
}

export default OverviewService


