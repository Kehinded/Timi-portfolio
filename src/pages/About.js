import { useEffect } from 'react'
import '../styles/About.css'
import UserImage from '../images/kehinded.png'
import Skills from '../components/Skills'
import MultiSkillImg from '../images/multi-skill.png'
import  VersatileImg from '../images/versatile.png'
import DedicateImg from '../images/dedicate.png'
import EfficientImg from '../images/efficient.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        Aos.init({
            duration: 500,
            offset: 120,
        });
    }, []) 
    return (
        <div className = 'about-page'>
            <div className="about-section">
            <div className="left-box">
              <figure className="img-box"><img src={UserImage} alt="" className="img" /></figure>
             </div>
             <div className="right-box">
                 <div className="title">about me</div>
                 <p className="text">
                 My name is Ayeni Kehinde Timilehin. I'm a Front End Engineer based in Nigeria ☀️. 
                 I describe myself as a passionate developer who loves coding, open source, 
                 and the web platform ❤️.
                 Aside from my job, I like to create and contribute to open source projects. 
                 That helps me to learn a ton of new stuff, grow as a developer and support 
                 other open source projects. Also I enjoy writing technical things ✍️ at my blog.
                 </p>
                 <br />
                 <p className="text">
                 I like to write semantic, cross browser compatible code by hand that is re-useable, 
                 maintainable and easy to understand.I am motivated, enthusiastic and well organised,
                  with a keen eye for beautiful design, primarily based around user interfaces.
                The main areas of my expertise are HTML(5), CSS(3), SASS JavaScript(native) and React .
                 </p>
                 <br />
                 <p className="text">
                 I regularly use version control systems (GIT, Mercurial) to maintain my code, and I 
                 specialise in responsive web design (RWD).
                 </p>
                 <br />
                 <p className="text">
                 Timi is a professional, hard-working individual, who's always willing to rise 
                 up to any challenge.
                 </p>
             </div>
            </div>
            <Skills />
            <div className="actual-box">
                <div className="box box-1">
                <figure className="img-box" data-aos ='fade-up'><img src={MultiSkillImg} alt="" className="img" /></figure>
                <p className="title" data-aos ='fade-up'>Multi-skill</p>
                <p className="text" data-aos ='fade-up'>
                I am primarily a front-end developer (expert in HTML5, CSS3 & JavaScript) however, 
                I am also experienced in SASS, Bootstrap, to implement my designs and also React.
                </p>
                </div>
                {/* end od box  */}
                <div className="box box-1">
                <figure className="img-box" data-aos ='fade-up'><img src={VersatileImg} alt="" className="img" /></figure>
                <p className="title" data-aos ='fade-up'>Versatile</p>
                <p className="text" data-aos ='fade-up'>
                I pride myself on being able to adapt to any situation that may arise during the lifespan of a project.
                 I thrive under pressure and also look for solutions to difficult problems.
                </p>
                </div>
                {/* end od box  */}
                <div className="box box-1">
                <figure className="img-box" data-aos ='fade-up'><img src={DedicateImg} alt="" className="img" /></figure>
                <p className="title" data-aos ='fade-up'>Dedicated</p>
                <p className="text" data-aos ='fade-up'>
                I am diligent, conciencious and extremely dedicated to every task that I am given. 
                It is of the utmost importance to me that my clients are satisfied by what I deliver.
                </p>
                </div>
                {/* end od box  */}
                <div className="box box-1">
                <figure className="img-box" data-aos ='fade-up'><img src={EfficientImg} alt="" className="img" /></figure>
                <p className="title" data-aos ='fade-up'>Efficient</p>
                <p className="text" data-aos ='fade-up'>
                I always explore ways of improving my efficiency, whether it’s using task automation
                 tools such as GruntJS or simply being concise in communication.
                </p>
                </div>
                {/* end od box  */}
            </div>
        </div>
    )
}

export default About



// My name is Carlos Cuesta I'm a Front End Engineer based in Barcelona ☀️. I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.

// Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. Also I enjoy writing technical things ✍️ at my blog.

// In my free time you can find me longboarding 🛹 , at the gym 🏋️‍♂️, at the beach 🏖 or on tech meetups and conferences around Barcelona and Europe 🗺