import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCog, faPlus, faCompass } from '@fortawesome/free-solid-svg-icons';
import "./Switch.css"
import "./responsive.css"

function Switch() {

    return (
        <>
            <div className="switch-content">
                <div className="search-bar-2">
                    <FontAwesomeIcon icon={faSearch} className="search-icon-2" />
                    <input type="text" placeholder="Search" autoFocus />
                    <FontAwesomeIcon icon={faCog} className="cog-icon" />
                </div>
                <div className="community-option">
                    <FontAwesomeIcon icon={faPlus} className="option-icon" />
                    <span>Create a community</span>
                </div>
                <div className="community-option">
                    <FontAwesomeIcon icon={faCompass} className="option-icon" />
                    <span>Discover communities</span>
                </div>
            </div>
        </>
    )
}

export default Switch
