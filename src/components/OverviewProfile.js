import userImg from '../images/kehinded_1'
import '../styles/OverviewProfile.css'
import VoteBox from './VoteBox'
import { useState, useEffect } from 'react'
import Socials from './Socials'
import Skills from './Skills'
import TextAnimation from './TextAnimation'


const OverviewProfile = () => {
    const [checkLikeOption, setCheckLikeOption] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setCheckLikeOption(true)
        }, 12000);
    }, [])
    return (
        <div className= 'overview_profile'>
             <div className="left-box">
                <div className="title">
                    <h1><TextAnimation /> </h1>
                </div>
               <Skills />
                {/* start of contact */}
                <div className="contact-box">
                    <h3 className="title"><span>get in contact</span><span>from socials</span></h3>
                    <div className="social-box">
                       <Socials />
                    </div>
                </div>
            </div>
            {/* end of left box */}
            <div className="right-box">
            <div className="img-box"><img src={userImg} alt="" className="img" />
            {checkLikeOption && <VoteBox />}
            </div>
            {/* end of img box */}
            </div>
        </div>
    )
}

export default OverviewProfile


// document.documentElement.style.setProperty("--home-primary-color", color);