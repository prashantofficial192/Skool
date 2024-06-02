import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from "../assets/images/10001.svg"
import SwitchSVG from "../assets/images/10004.svg"
import "./Navbar.css"
import "./responsive.css"
import Switch from '../Switch/Switch';


function Navbar() {
    const navigate = useNavigate();

    const [isSwitchOpen, setIsSwitchOpen] = useState(false);

    const handleSwitchClick = () => {
        setIsSwitchOpen(!isSwitchOpen);
    };
    return (
        <>
            <header className='navbar-header'>
                <nav className='nav'>
                    <div className="logo-container">
                        <div className="toggle" onClick={handleSwitchClick}>
                            <FontAwesomeIcon icon={faBars} className='toggle-icon' />
                        </div>
                        <div className="logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="switch" onClick={handleSwitchClick}>
                            <img src={SwitchSVG} alt="Switch" className='switch-image' />
                            {isSwitchOpen && <Switch />}
                        </div>
                    </div>
                    <div className="btns-container">
                        <div className="sign-up">
                            <button onClick={() => navigate('/signup')}>
                                SIGN UP
                            </button>
                        </div>
                        <div className="login">
                            <button onClick={() => navigate('/login')}>
                                LOGIN
                            </button>
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}
export default Navbar;