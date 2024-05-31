import React from 'react';

const Card = ({ id, mainImage, secondaryImage, title, description, type, members, price }) => {
    return (
        <>
            <div className="card">
                <div className="upper-sec">
                    <div className="card-tag">#{id}</div>
                    <img src={mainImage} alt="Card Main" className="card-main-image" />
                </div>
                <div className="card-content">
                    <div className="card-cont">
                        <img src={secondaryImage} alt="Card Secondary" className="card-secondary-image" />
                        <h3 className="card-title">{title}</h3>
                    </div>
                    <p className="card-description">{description}</p>
                    <div className="card-details">
                        <p className="card-type">{type}</p> •
                        <p className="card-members">{members}</p> •
                        <p className="card-price">{price}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;

/* @media (max-width: 480px) {
    CSS rules for small devices
}

@media (min-width: 481px) and (max-width: 768px) {
    CSS rules for tablets
}

@media (min-width: 769px) and (max-width: 1024px) {
    CSS rules for small laptops and tablets
}


@media (min-width: 1025px) {
    CSS rules for large desktops
} */