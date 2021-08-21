import {Link} from 'react-router-dom'
import '../styles/Navigation.css'
import { FaBoxes, FaIdCard, FaClipboardList, FaColumns } from 'react-icons/fa'
import {useLocation} from 'react-router-dom'

const Navigation = () => {
   const location = useLocation();
    return (
        <ul className= 'nav-list'>
            <li className={`nav-item ${location.pathname === '/' && 'active'}`}><Link to="/" className="nav-link">
               <FaColumns className= 'nav-icon' /> <span>overview</span></Link></li>
            <li className={`nav-item ${location.pathname === '/about' && 'active'}`}><Link to="/about" className="nav-link">
               <FaClipboardList className= 'nav-icon' /> <span>about</span></Link></li>
            <li className={`nav-item ${location.pathname === '/project' && 'active'}`}><Link to="/project" className="nav-link">
               <FaBoxes className= 'nav-icon' /> <span>projects</span></Link></li>
            {/* <li className={`nav-item ${location.pathname === '/blog' && 'active'}`}><Link to="/blog" className="nav-link">
               <FaFileSignature className= 'nav-icon' /> <span>blog</span></Link></li> */}
            <li className={`nav-item ${location.pathname === '/contact' && 'active'}`}><Link to="/contact" className="nav-link">
               <FaIdCard className= 'nav-icon' /> <span>contact</span></Link></li>
        </ul>
    )
}

export default Navigation
