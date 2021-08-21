
import { FaCity } from 'react-icons/fa'
import Navigation from './Navigation'
import '../styles/Header.css'
import UiColorChanger from './UiColorChanger'

const Header = () => {
    return (
        <header className= 'header'>
            <FaCity className="logo" />
            <input type="checkbox" className="nav-input" id= 'nav-input' />
            <label htmlFor="nav-input" className="menu-box">
                <div className="line"></div>  
            </label>
            <Navigation />
            <UiColorChanger />
        </header>
    )
}

export default Header
