import '../styles/Project.css'
import ProjectViewLeft from './ProjectViewLeft'
import ProjectViewRight from './ProjectViewRight'
import v_schoolImg from '../images/visual-school.png'
import HomeTeach from '../images/homeTeach-site.png'
import hospital_home from '../images/hospital-home-2-site.png'
import AkotCompany from '../images/akot-farm.png'
import EbikeImg from "../images/EBikeone.jpg"
import DiceGame from '../images/dice-game-site.png'
import { Link, useLocation } from 'react-router-dom' 
import { FaBoxes } from 'react-icons/fa'    
// import { useHistory } from 'react-router-dom'

const projects = [
  {
    image: `${v_schoolImg}`,
    text: "Worked with a backend developer to build this personal project, a school management website where ongoing session, terms, users activities can be managed online. Built with react, to login as an admin an check out the functionalities use (email:admin@gmail.com, password:password).",
    title: "V-school",
    link: "https://akot-v-school.netlify.app",
    github: "https://github.com/Kehinded/V-SCHOOL.git",
  },
  {
    image: `${HomeTeach}`,
    text: "Worked in a team with backend developer and designers to build a  site that help teachers to render their services effectively and also allows student to sign up and choose select courses from the list of curated top performing best reviewed best instructors, built this with hthml, css and javascript.",
    title: "homeTeach",
    link: "https://staging-hometeach80.netlify.app/index.html",
    github: "https://github.com/zuri-training/HomeTeach-fe-pjt-80.git",
  },
  {
    image: `${hospital_home}`,
    title: "Akot Hospital",
    text: "An online hospital where patient can book an appointent with a clinical worker and also where medical staffs can access their patients and get daily schedules, built this with hthml, css and javascript.",
    link: "https://akot-hospital.netlify.app",
    github: "https://github.com/Kehinded/AKOT-HOSPITAL.git",
  },
  {
    image: `${EbikeImg}`,
    text: "An ecommerce landing page to display eBikes products, built with with and sass",
    title: "eBike",
    link: "https://ebike-kehinded.netlify.app/",
    github: "https://github.com/Kehinded/eBike.git",
  },
  {
    image: `${AkotCompany}`,
    text: "Four in one company comprises of a farm, airport, hotel and fuel station where customers can book for online services of their choice collectively . Built with html, advance css, sass and javascript.",
    title: "Akot Companies",
    link: "https://kehinded.github.io/My-first-main-demo-site/",
    github: "https://github.com/Kehinded/My-first-main-demo-site.git",
  },
  {
    image: `${DiceGame}`,
    title: "dice game",
    text: "An online dice game with two players racing to set a winning value score to catch fun. Built this with html, bootstrap and javascript.",
    link: "https://kehinded.github.io/DICE-GAME/",
    github: "https://github.com/Kehinded/DICE-GAME.git",
  },
];

const Project = ({projectTitle}) => {
    const location = useLocation()
    // const history = useHistory()
    // const goToALLProject = () => {
    //     history.replace('/project')
    // }
    return (
        <div className= {`project-section ${location.pathname === '/project' ? 'real-project' : ''}`}>
            <h2 className="title">{projectTitle}</h2>
         {
             projects.map((child, index) => (
                 index % 2 === 0 ? (<ProjectViewLeft 
                 key = {index}
                 image = {child.image}
                 title = {child.title}
                 text = {child.text}
                 link = {child.link}
                 github = {child.github}
                 />) : (<ProjectViewRight 
                    key = {index}
                    image = {child.image}
                    title = {child.title}
                    text = {child.text}
                    link = {child.link}
                    github = {child.github}
                 />)
             ))
         }
         {location.pathname === '/' &&  <Link to = '/project'  className= 'project-all-btn'> <p>view all projects</p> <FaBoxes /> </Link>}
        </div>
    )
}

export default Project
