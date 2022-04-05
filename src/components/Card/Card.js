import React from 'react';
import SkillItem from './SkillItem';
import './style.css'


function Card({ title, skills }) {
    return (
        <div className='glass'>
            <h3 className='card-header'>{title}</h3>
            <div className='skills'>
                {
                    skills.map((element, index) => {
                        return <SkillItem key={index} icon={element.icon} skill={element.skill} level={element.level} />
                    })
                }

            </div>
        </div >
    );
}

export default Card;