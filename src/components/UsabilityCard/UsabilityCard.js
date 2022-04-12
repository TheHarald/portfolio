import React from 'react';
import './usabilityCard.css'

function UsabilityCard({ title, description }) {
    return (
        <div className='usability-card'>
            <h4 className='usability-card__header'>{title}</h4>
            <p className='usability-card__description'>{description}</p>
        </div>
    );
}

export default UsabilityCard;