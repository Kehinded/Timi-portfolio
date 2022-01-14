import '../styles/Experience.css'
import {useState} from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {

    useEffect(() => {
        Aos.init({
            duration: 500,
            offset: 120,
        });
    }, []) 

    const [workActive, setWorkActive] = useState({
        zuri: true,
        hngi8: false,
        elatech: false
    })
    const [details, setDetails] = useState({
        jobTitle: "front-end intern",
        companyName: "zuri team",
        date: "march 2021 - june 2021",
        tasks: ['Colaborated with designers, back-end and front-end developers to build and released a responsive website',
                'Maintaining and organizing workflow using project management tool like Github.',
                'Monitoring webpages for troubleshooting issues.'
     ]
    })

    const checkActive = (text) => {
       if(text === 'zuri'){
           setWorkActive((prev) => {
               return{...prev, zuri: true, hngi8: false, elatech: false}
           });
           setDetails({
            jobTitle: "front-end intern",
            companyName: "zuri team",
            date: "march 2021 - june 2021",
            tasks: ['Colaborated with designers, back-end and front-end developers to build and released a responsive website',
                    'Maintaining and organizing workflow using project management tool like Github.',
                    'Monitoring webpages for troubleshooting issues.'
         ]
           })
       }
       if(text === 'HNGi8'){
        setWorkActive((prev) => {
            return{...prev, zuri: false, hngi8: true, elatech: false}
        });
        setDetails({
            jobTitle: "front-end Intern",
        companyName: "HNGi8",
        date: "july 2021 - august 2021",
        tasks: ['Colaborated with designers, back-end and front-end developers to build and released a responsive website',
                'Maintaining and organizing workflow using project management tool like Github.'
     ]
        })
    }
    if(text === 'elatech'){
        setWorkActive((prev) => {
            return{...prev, zuri: false, hngi8: false, elatech: true}
        });
        setDetails({
            jobTitle: "front-end developer",
        companyName: "elatech",
        date: "january 2022 - present",
        tasks: ['Colaborated with designers, back-end and front-end developers to build and released a responsive website',
                'Maintaining and organizing workflow using project management tool like Github.'
     ]
        })
    }
    }

    return (
        <div className= 'experience_section'>
            <h2 className="title" data-aos = 'fade-left'>work experience</h2>
            <div className="info-box">
            <div className="title-info-box">
                <ul className="title-list" >
                    <li className={`title-item ${workActive.zuri && 'active'}`} onClick={ () => {checkActive('zuri')}} >zuri team </li>
                    <li className={`title-item ${workActive.hngi8 && 'active'}`} onClick={ () => {checkActive('HNGi8')}}>HNGi8</li>
                    <li className={`title-item ${workActive.elatech && 'active'}`} onClick={ () => {checkActive('elatech')}}>elatech</li>
                </ul>
            </div>
            {/* end of title box */}
            <div className="actual-info-box">
                <h2  data-aos = 'fade-up' className="detail-title">{details.jobTitle}</h2>
                <p  data-aos = 'fade-up' className="detail-title-2">{details.companyName}</p>
                <p  data-aos = 'fade-up' className="detail-date">{details.date}</p>
                <ul className="detail-list">
                    {details.tasks.map((task, index) =>  <p key={index} data-aos = 'fade-up' className= 'detail-item'> <FaAngleDoubleRight className = 'detail-icon'/>   {task}</p>)}
                </ul>
            </div>
           {/* end of actual info box */}
            </div>
        </div>
    )
}

export default Experience
