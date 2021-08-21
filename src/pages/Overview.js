
import '../styles/Overview.css'
import OverviewProfile from '../components/OverviewProfile'
import OverviewService from '../components/OverviewService'
import Achievement from '../components/Achievement'
import Experience from '../components/Experience'
import Project from '../components/Project'

const Overview = () => {
    return (
        <div className= 'overview'>
           <OverviewProfile />
           <OverviewService />
           <Achievement />
           <Experience />
           <Project projectTitle= 'Some projects' />
        </div>
    )
}

export default Overview
