import '../styles/Project.css'
import ProjectViewLeft from './ProjectViewLeft'
import ProjectViewRight from './ProjectViewRight'
import HomeTeach from '../images/homeTeach-site.png'
import hospital_home from '../images/hospital-home-2-site.png'
import AkotCompany from '../images/akot-farm.png'
import DiceGame from '../images/dice-game-site.png'
import { Link, useLocation } from 'react-router-dom' 
import { FaBoxes } from 'react-icons/fa'
// import { useHistory } from 'react-router-dom'

const Project = ({projectTitle}) => {
    const location = useLocation()
    // const history = useHistory()
    // const goToALLProject = () => {
    //     history.replace('/project')
    // }
    return (
        <div className= {`project-section ${location.pathname === '/project' ? 'real-project' : ''}`}>
            <h2 className="title">{projectTitle}</h2>
            <ProjectViewLeft 
            image={HomeTeach}    
            text= 'Worked in a team with backend developer and designers to build a  site that help teachers to render their services effectively and also allows student to sign up and choose select courses from the list of curated top performing best reviewed best instructors, built this with hthml, css and javascript.' 
            title = 'homeTeach'
            link = 'https://staging-hometeach80.netlify.app/index.html'
            github = 'https://github.com/zuri-training/HomeTeach-fe-pjt-80.git'
            />
            <ProjectViewRight image={hospital_home}
            title= 'Akot Hospital'
            text = 'An online hospital where patient can book an appointent with a clinical worker and also where medical staffs can access their patients and get daily schedules, built this with hthml, css and javascript.'
            link = 'https://friendly-einstein-2d6ee0.netlify.app'
            github = 'https://github.com/Kehinded/AKOT-HOSPITAL.git'
            />
            <ProjectViewLeft 
            image= {AkotCompany}
            text= 'Four in one company comprises of a farm, airport, hotel and fuel station where customers can book for online services of their choice collectively . Built with html, advance css, sass and javascript.'
            title= 'Akot Companies'
            link= 'https://kehinded.github.io/My-first-main-demo-site/'
            github = 'https://github.com/Kehinded/My-first-main-demo-site.git'
            />
            <ProjectViewRight
            image = {DiceGame}
            title = 'dice game'
            text= 'An online dice game with two players racing to set a winning value score to catch fun. Built this with html, bootstrap and javascript.'
            link = 'https://kehinded.github.io/DICE-GAME/'
            github = 'https://github.com/Kehinded/DICE-GAME.git'
            />

         {location.pathname === '/' &&  <Link to = '/project'  className= 'project-all-btn'> <p>view all projects</p> <FaBoxes /> </Link>}
        </div>
    )
}

export default Project
