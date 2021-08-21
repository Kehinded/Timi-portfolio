import '../styles/Achievement.css'
import {FaCheckDouble, FaCloudDownloadAlt, FaBezierCurve} from 'react-icons/fa'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Achievement = () => {

    useEffect(() => {
        Aos.init({
            duration: 500,
            offset: 200,
        });
    }, []) 

    return (
        <div className= 'achievement_section'>
            <div className="achievement-box">
                <div data-aos = 'fade-down' className="box box-1">
                <FaCheckDouble className= 'icon'/>
                <h2>1+</h2>
                <p className="text">year's experience</p>
                </div>
                <div data-aos = 'fade-up' className="box box-2">  
                <FaBezierCurve className= 'icon icon-2'/>
                <h2>10</h2>
                <p className="text">completed projects</p>
                </div>
                <div data-aos = 'fade-left' className="box box-3">
                <FaCloudDownloadAlt className= 'icon icon-3'/>
                <h2>15</h2>
                <p className="text">downloads</p>
                </div>
            </div>
        </div>
    )
}

export default Achievement
