import React from 'react';
import './tag.css'

function Tag({ title }) {
    return (
        <div className='tag'>
            <span className='tag__title'>{title}</span>
        </div>
    );
}

export default Tag;