import Project from '../components/Project'
import '../styles/Project.css'
import ProjectViewLeft from '../components/ProjectViewLeft'
import ProjectViewRight from '../components/ProjectViewRight'
import NatourImg from '../images/natour-site.png'
import BudgetyImg from '../images/budgety-app.png'
import NexterImg from '../images/nexter-home-site.png'
import HotelImg from '../images/hotel-site.png'
import MeetUp from '../images/details-react-app.png'

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
            />
                    <ProjectViewRight 
            image = {NexterImg}
            title = 'Billionairerlts'
            text = 'an online real estate website for viewing and selling of house properties, where you can get to meet up with realtors and chose house of your choice. Built with html and advance grids'
            link = 'https://kehinded.github.io/FIRST-CSS-GRID-SITE/'
            />
            
            <ProjectViewLeft 
            image = {HotelImg}
            title = 'Hotel'
            text = 'Advance online hotel view site for easy online booking . Built with html and css flexbox.'
            link = 'https://kehinded.github.io/HOTEL/'
            />
            <ProjectViewRight 
            image = {BudgetyImg}
            title = 'budget app'
            text = 'a website where you can calculate income and expenses with their data structures. Built this with html, bootstrap and javascript.'
            link = 'https://kehinded.github.io/Budget-Calculation-app/'
            />
             <ProjectViewLeft 
            image = {MeetUp}
            title = 'Contact save'
            text = 'online app where you can input, save, remove details or contacts. Built with react .'
            link = ' https://kehinded.github.io/react-meet-up/'
            />
            </div>
           
        </div>
    )
}

export default Projects
