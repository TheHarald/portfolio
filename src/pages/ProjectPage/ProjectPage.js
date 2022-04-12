import React from 'react';
import { Link } from 'react-router-dom';
import NeonIcon from '../../components/NeonIcon/NeonIcon';
import Project from '../../components/Project/Project';
import UsabilityCard from '../../components/UsabilityCard/UsabilityCard';
import './projectPage.css'

function ProjectPage(props) {
    return (
        <div className='project-page'>
            <div className='project-page__header'>
                <Link className='project-page__link' to={"/"}> <NeonIcon icon={'arrow_back'} className={'project-page__back'} /> <span className='project-page__title'>Назад</span></Link>
                <h1 className='project-page__name'>Название проекта проекта</h1>
            </div>

            <UsabilityCard />

        </div>
    );
}

export default ProjectPage;