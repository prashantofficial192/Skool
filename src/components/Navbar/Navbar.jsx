import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Logo from "../assets/images/10001.svg"
import "./Navbar.css"
import "./responsive.css"


function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <div className="logo-container">
                        <div className="toggle">
                            <FontAwesomeIcon icon={faBars} className='toggle-icon' />
                        </div>
                        <div className="logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="switch">
                            <div className="up"><FontAwesomeIcon icon={faChevronUp} className='switch-icon' /></div>
                            <div className="down"><FontAwesomeIcon icon={faChevronDown} className='switch-icon' /></div>
                        </div>
                    </div>
                    <div className="btns-container">
                        <div className="sign-up">
                            <button>SIGN UP</button>
                        </div>
                        <div className="login">
                            <button>LOGIN</button>
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}
export default Navbar

// 💰 Business
// 🍎  Health & fitness
// 📚  Personal development
// 🎨  Arts & crafts
// 🎸  Music