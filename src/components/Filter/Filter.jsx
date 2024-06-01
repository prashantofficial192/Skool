import React from 'react'
import "./Filter.css"
import "./responsive.css"

function Filter() {
    return (
        <>
            <div className="filter-container">
                <div className="type">
                    <div className="label">
                        <label htmlFor="Type">Type</label>
                    </div>
                    <div className="radio-btns">
                        <div className="radio-1">
                            <input type="radio" name="All" id="" value="All" defaultChecked />
                            <span>All</span>
                        </div>
                        <div className="radio-1">
                            <input type="radio" name="Public" id="" value="Public" />
                            <span>Public</span>
                        </div>
                        <div className="radio-1">
                            <input type="radio" name="Private" id="" value="Private" />
                            <span>Private</span>
                        </div>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="type">
                    <div className="label">
                        <label htmlFor="Type">Price</label>
                    </div>
                    <div className="radio-btns">
                        <div className="radio-1">
                            <input type="radio" name="Price" id="" value="Price" defaultChecked />
                            <span>All</span>
                        </div>
                        <div className="radio-1">
                            <input type="radio" name="Free" id="" value="Free" />
                            <span>Free</span>
                        </div>
                        <div className="radio-1">
                            <input type="radio" name="Paid" id="" value="Paid" />
                            <span>Paid</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Filter
