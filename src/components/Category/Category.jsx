import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import Filter from '../Filter/Filter';
import "./Category.css";
import "./responsive.css"

function Category() {
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const toggleFilterVisibility = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    return (
        <main>
            <section className='category-section'>
                <div className="category">
                    <div className="category-btn">
                        <button className='all-btn'>All</button>
                        <button>💰 Business</button>
                        <button id='btn2'>🍎  Health & fitness</button>
                        <button id='btn2'>📚  Personal development</button>
                        <button id='btn2'>🎨  Arts & crafts</button>
                        <button id='btn2'>🎸  Music</button>
                    </div>
                    <div className="filter-btn">
                        <button className='more-btn'>More...</button>
                        <button onClick={toggleFilterVisibility}>
                            <p className='filter-p'> Filter </p>
                            <FontAwesomeIcon icon={faSliders} className='slider-icon' />
                        </button>
                    </div>
                </div>
            </section>
            {isFilterVisible && <Filter />}
        </main>

    );
}

export default Category;
