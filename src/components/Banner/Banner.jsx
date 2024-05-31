import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Banner.css"
import "./responsive.css"

function Banner() {
    return (
        <>
            <main>
                <section className='banner'>
                    <div className="banner-heading">
                        <h1>
                            Discover communities
                        </h1>
                    </div>
                    <div className="banner-link">
                        <p>
                            or <a href="#">create your own</a>
                        </p>
                    </div>
                    <div className="search-bar">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search for anything"
                        />
                    </div>
                </section>
            </main>

        </>
    )
}

export default Banner

{/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */ }