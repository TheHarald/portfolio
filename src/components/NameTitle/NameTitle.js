import React from 'react';
import './nametitle.css'

function NameTitle({ title }) {
    return (
        <div id='title'>
            {
                title.split('')
                    .map((element, index) => {
                        return <span key={index} className='letter'>{element}</span>
                    })
            }
        </div>
    );
}

export default NameTitle;