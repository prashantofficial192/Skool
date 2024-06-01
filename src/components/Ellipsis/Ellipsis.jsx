import React, { useState } from 'react'
import "./responsive.css"
import "./Ellipsis.css"

function Ellipsis() {

    return (
        <>
            <div className="ellipsis">
                <div className="ellipsis-btn">
                    <button>Pricing</button>
                </div>
                <div className="ellipsis-btn">
                    <button>Merch</button>
                </div>
                <div className="ellipsis-btn">
                    <button>Help Center</button>
                </div>
            </div>
        </>
    )
}

export default Ellipsis
