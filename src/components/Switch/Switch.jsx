import React from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCog, faPlus, faCompass } from '@fortawesome/free-solid-svg-icons';
import "./Switch.css"
import "./responsive.css"

function Switch() {
    const navigate = useNavigate();
    return (
        <>
            <div className="switch-content">
                <div className="search-bar-2">
                    <FontAwesomeIcon icon={faSearch} className="search-icon-2" />
                    <input type="text" placeholder="Search" autoFocus />
                    <FontAwesomeIcon icon={faCog} className="cog-icon" onClick={() => navigate('/login')} />
                </div>
                <div className="community-option" onClick={() => navigate('/signup')}>
                    <FontAwesomeIcon icon={faPlus} className="option-icon" />
                    <span>Create a community</span>
                </div>
                <div className="community-option" onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faCompass} className="option-icon" />
                    <span>Discover communities</span>
                </div>
            </div>
        </>
    )
}

export default Switch
