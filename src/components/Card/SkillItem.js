import React from 'react';
import NeonIcon from '../NeonIcon/NeonIcon';
import './style.css'

function SkillItem({ icon, skill, level }) {
    return (
        <div className='skill-item'>
            <div className='skill-header'>
                <NeonIcon icon={icon} />
                <h4 className='skill'>{skill}</h4>
            </div>
            <p className='level'>{level}</p>
        </div>
    );
}

export default SkillItem;