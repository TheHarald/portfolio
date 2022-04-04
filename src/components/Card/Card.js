import React from 'react';
import SkillItem from './SkillItem';
import './style.css'


function Card(props) {
    return (
        <div className='glass'>
            <h3 className='card-header'>Frontend-разработка</h3>
            <div className='skills'>
                <SkillItem icon={'save'} skill={'Java'} level={'Нулевой'} />
                <SkillItem icon={'edit'} skill={'Java'} level={'Нулевой'} />
                <SkillItem icon={'delete'} skill={'Java'} level={'Нулевой'} />
                <SkillItem icon={'block'} skill={'Java'} level={'Нулевой'} />
                <SkillItem icon={'info'} skill={'Java'} level={'Нулевой'} />
            </div>
        </div >
    );
}

export default Card;