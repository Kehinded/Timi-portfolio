import Project from '../components/Project'
import '../styles/Project.css'
import ProjectViewLeft from '../components/ProjectViewLeft'
import ProjectViewRight from '../components/ProjectViewRight'
import NatourImg from '../images/natour-site.png'
import BudgetyImg from '../images/budgety-app.png'
import NexterImg from '../images/nexter-home-site.png'
import HotelImg from '../images/hotel-site.png'
import MeetUp from '../images/details-react-app.png'
import PortfolioImg from '../images/portfolio.png'
import ResumeImg from '../images/resume.png'

const Projects = () => {
    return (
        <div className= 'project-page'>
            <Project projectTitle = 'all project'/>
            <div className="project-section">
                <ProjectViewLeft
                image = {NatourImg}
                title = 'natour '
                text = "Enjoy your vacation booking an online trip through natour site. Built this with html and css only."
                link = 'https://kehinded.github.io/CSS-Nature-only/'
                github = 'https://github.com/Kehinded/CSS-Nature-only.git'
            />
                    <ProjectViewRight 
            image = {NexterImg}
            title = 'Billionairerlts'
            text = 'an online real estate website for viewing and selling of house properties, where you can get to meet up with realtors and chose house of your choice. Built with html and advance grids'
            link = 'https://kehinded.github.io/FIRST-CSS-GRID-SITE/'
            github = 'https://github.com/Kehinded/FIRST-CSS-GRID-SITE.git'
            />
            
            <ProjectViewLeft 
            image = {HotelImg}
            title = 'Hotel'
            text = 'Advance online hotel view site for easy online booking . Built with html and css flexbox.'
            link = 'https://kehinded.github.io/HOTEL/'
            github = 'https://github.com/Kehinded/HOTEL.git'
            />
            <ProjectViewRight 
            image = {BudgetyImg}
            title = 'budget app'
            text = 'a website where you can calculate income and expenses with their data structures. Built this with html, bootstrap and javascript.'
            link = 'https://kehinded.github.io/Budget-Calculation-app/'
            github = 'https://github.com/Kehinded/Budget-Calculation-app.git'
            />
             <ProjectViewLeft 
            image = {MeetUp}
            title = 'Contact save'
            text = 'online app where you can input, save, remove details or contacts. Built with react .'
            link = ' https://kehinded.github.io/react-meet-up/'
            github = 'https://github.com/Kehinded/react-meet-up.git'
            />
             <ProjectViewRight 
            image = {PortfolioImg}
            title = 'My portfolio'
            text = 'This current website you are navigating. Built with react and sass with Api actions at the contact and like box, you can get my contacts from the footer.'
            link = 'https://timi-portfolio.netlify.app/'
            github = 'https://github.com/Kehinded/Timi-portfolio.git'
            />
            <ProjectViewLeft 
            image = {ResumeImg}
            title = 'My resume'
            text = 'My online resume. Built with react and sass.'
            link = 'https://kehinded.github.io/hngi8-task-cv/'
            github = 'https://github.com/Kehinded/hngi8-task-cv.git'
            />
            </div>   
        </div>
    )
}

export default Projects
