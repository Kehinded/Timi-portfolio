// import Project from '../components/Project'
import '../styles/Project.css'
import ProjectViewLeft from '../components/ProjectViewLeft'
import ProjectViewRight from '../components/ProjectViewRight'
import HomeTeach from '../images/homeTeach-site.png'
import hospital_home from '../images/hospital-home-2-site.png'
import AkotCompany from '../images/akot-farm.png'
import DiceGame from '../images/dice-game-site.png'
import NatourImg from '../images/natour-site.png'
import BudgetyImg from '../images/budgety-app.png'
import NexterImg from '../images/nexter-home-site.png'
import HotelImg from '../images/hotel-site.png'
import MeetUp from '../images/details-react-app.png'
import PortfolioImg from '../images/portfolio.png'
import ResumeImg from '../images/resume.png'
import EbikeImg from "../images/EBikeone.jpg"  
import v_schoolImg from "../images/visual-school.png" 

const projects = [
    {
    image: `${v_schoolImg}`,
    text: "Worked with a backend developer to build this personal project, a school management website where ongoing session, terms, users activities can be managed online. Built with reac, to login as an admin an check out the functionalities use (email:admin@gmail.com, password:password).",
    title: "V-school",
    link: "https://akot-v-school.netlify.app",
    github: "https://github.com/Kehinded/V-SCHOOL.git",
  },
    {
        image: `${HomeTeach}`,    
            text: 'Worked in a team with backend developer and designers to build a  site that help teachers to render their services effectively and also allows student to sign up and choose select courses from the list of curated top performing best reviewed best instructors, built this with hthml, css and javascript.', 
            title: 'homeTeach',
            link: 'https://staging-hometeach80.netlify.app/index.html',
            github: 'https://github.com/zuri-training/HomeTeach-fe-pjt-80.git'
    },
    {
        image: `${EbikeImg}`,
        text: "An ecommerce landing page to display eBikes products, built with with and sass",
        title: "eBike",
        link: "https://ebike-kehinded.netlify.app/",
        github: "https://github.com/Kehinded/eBike.git"
    },
    {
        image: `${hospital_home}`,
        title: 'Akot Hospital',
        text : 'An online hospital where patient can book an appointent with a clinical worker and also where medical staffs can access their patients and get daily schedules, built this with hthml, css and javascript.',
        link : 'https://akot-hospital.netlify.app',
        github : 'https://github.com/Kehinded/AKOT-HOSPITAL.git'
    },
    {
        image: `${AkotCompany}`,
        text: 'Four in one company comprises of a farm, airport, hotel and fuel station where customers can book for online services of their choice collectively . Built with html, advance css, sass and javascript.',
        title: 'Akot Companies',
        link: 'https://kehinded.github.io/My-first-main-demo-site/',
        github : 'https://github.com/Kehinded/My-first-main-demo-site.git'
    },
    {
        image : `${DiceGame}`,
            title : 'dice game',
            text: 'An online dice game with two players racing to set a winning value score to catch fun. Built this with html, bootstrap and javascript.',
            link : 'https://kehinded.github.io/DICE-GAME/',
            github : 'https://github.com/Kehinded/DICE-GAME.git'
    },
    {
        image : `${NatourImg}`,
        title : 'natour ',
        text : "Enjoy your vacation booking an online trip through natour site. Built this with html and css only.",
        link : 'https://kehinded.github.io/CSS-Nature-only/',
        github : 'https://github.com/Kehinded/CSS-Nature-only.git'
    },
    {
        image : `${NexterImg}`,
            title : 'Billionairerlts',
            text : 'an online real estate website for viewing and selling of house properties, where you can get to meet up with realtors and chose house of your choice. Built with html and advance grids',
            link : 'https://kehinded.github.io/FIRST-CSS-GRID-SITE/',
            github : 'https://github.com/Kehinded/FIRST-CSS-GRID-SITE.git'
    },
    {
        image : `${HotelImg}`,
            title : 'Hotel',
            text : 'Advance online hotel view site for easy online booking . Built with html and css flexbox.',
            link : 'https://kehinded.github.io/HOTEL/',
            github : 'https://github.com/Kehinded/HOTEL.git'
    },
    {
        image : `${BudgetyImg}`,
            title : 'budget app',
            text : 'a website where you can calculate income and expenses with their data structures. Built this with html, bootstrap and javascript.',
            link : 'https://kehinded.github.io/Budget-Calculation-app/',
            github : 'https://github.com/Kehinded/Budget-Calculation-app.git'
    },
    {
        image : `${MeetUp}`,
            title : 'Contact save',
            text : 'online app where you can input, save, remove details or contacts. Built with react .',
            link : ' https://kehinded.github.io/react-meet-up/',
            github : 'https://github.com/Kehinded/react-meet-up.git'
    },
    {
        image : `${PortfolioImg}`,
        title : 'My portfolio',
        text : 'This current website you are navigating. Built with react and sass with Api actions at the contact and like box, you can get my contacts from the footer.',
        link : 'https://developer-timi-portfolio.netlify.app',
        github : 'https://github.com/Kehinded/Timi-portfolio.git'
    },
    {
        image : `${ResumeImg}`,
            title : 'My resume',
            text : 'My online resume. Built with react and sass.',
            link : 'https://kehinded.github.io/hngi8-task-cv/',
            github : 'https://github.com/Kehinded/hngi8-task-cv.git'
    }
]

const Projects = () => {
    return (
        <div className= 'project-page'>
            <h2 className="title">all projects</h2>
            <div className="project-section">
                
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
            </div>   
        </div>
    )
}

export default Projects
