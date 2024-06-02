import React from 'react'
import { useNavigate } from "react-router-dom";
import "./responsive.css"
import "./Ellipsis.css"

function Ellipsis() {
    const navigate = useNavigate();

    return (
        <>
            <div className="ellipsis">
                <div className="ellipsis-btn">
                    <button onClick={() => navigate('/pricing')}>Pricing</button>
                </div>
                <div className="ellipsis-btn">
                    <button>Merch</button>
                </div>
                <div className="ellipsis-btn">
                    <button onClick={() => navigate('/help')}>Help Center</button>
                </div>
            </div>
        </>
    )
}

export default Ellipsis
