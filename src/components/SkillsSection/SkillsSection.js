import React from 'react';
import Card from '../Card/Card';
import './skills.css'

function SkillsSection(props) {
    const frontSkills = {
        title: 'Fronend - разработка',
        skills: [
            {
                icon: 'save',
                skill: 'JavaScript',
                level: 'Средний'
            },
            {
                icon: 'save',
                skill: 'CSS',
                level: 'Продвинутый'
            },
            {
                icon: 'save',
                skill: 'HTML',
                level: 'Продвинутый'
            },
            {
                icon: 'save',
                skill: 'BEM',
                level: 'Базовый'
            },
            {
                icon: 'save',
                skill: 'React',
                level: 'Спедний'
            },
        ]
    }

    const designSkills = {
        title: 'UX/UI Дизайн',
        skills: [
            {
                icon: 'save',
                skill: 'Figma',
                level: 'Продвинутый'
            },
            {
                icon: 'save',
                skill: 'Adobe Illustrator',
                level: 'Средний'
            },
            {
                icon: 'save',
                skill: 'Adobe Photoshop',
                level: 'Средний'
            }
        ]
    }

    const hardSkills = {
        title: 'Hard - скилы',
        skills: [
            {
                icon: 'save',
                skill: 'Git',
                level: 'Средний'
            },
            {
                icon: 'save',
                skill: 'JSON',
                level: 'Продвинутый'
            },
            {
                icon: 'save',
                skill: 'Docker',
                level: 'Средний'
            }
        ]
    }


    return (
        <div className='skills-section'>
            <h2 className='skills-section__header'>Навыки</h2>
            <div className='skills-section__cards'>
                <Card title={frontSkills.title} skills={frontSkills.skills} />
                <Card title={designSkills.title} skills={designSkills.skills} />
                <Card title={hardSkills.title} skills={hardSkills.skills} />
                <Card title={hardSkills.title} skills={hardSkills.skills} />
                <Card title={hardSkills.title} skills={hardSkills.skills} />
            </div>
        </div>
    );
}

export default SkillsSection;