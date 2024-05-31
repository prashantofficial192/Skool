import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import Filter from '../Filter/Filter';
import "./Category.css";

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
                        <button>🍎  Health & fitness</button>
                        <button>📚  Personal development</button>
                        <button>🎨  Arts & crafts</button>
                        <button>🎸  Music</button>
                    </div>
                    <div className="filter-btn">
                        <button>More...</button>
                        <button onClick={toggleFilterVisibility}>
                            Filter
                            <FontAwesomeIcon icon={faSliders} className='slider-icon' />
                        </button>
                    </div>
                </div>
                <div className={isFilterVisible ? 'visible' : 'hidden'}>
                    <Filter />
                </div>
            </section>
        </main>
    );
}

export default Category;
