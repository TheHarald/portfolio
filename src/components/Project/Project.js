import { GitHub } from '@material-ui/icons';
import React from 'react';
import GitHubLink from '../GitHubLink/GitHubLink';
import NeonIcon from '../NeonIcon/NeonIcon';
import Tag from '../Tag/Tag';
import './project.css'

function Project({ imageUrl, projectName, description, stack, ghLink, previewLink }) {
    return (
        <div className='project-card'>
            <img className='project-card__image' src={imageUrl} />
            <h3 className='project-card__name'>{projectName}</h3>
            <p className='project-card__description'>{description}</p>
            <div className='project-card__tags'>
                {stack.map((item, index) => {
                    return <Tag key={index} title={item} />
                })}
            </div>
            <div className='project-card__links'>
                <div className='project-card__link-to-gh'>
                    <GitHubLink url={ghLink} />
                    <span className='project-card__link-title'>Исходный код</span>
                </div>
                <div className='project-card__link-to-gh'>
                    <a href={previewLink}>
                        <NeonIcon icon={'view_in_ar'} className={'project-card__preview'} />
                    </a>
                    <span className='project-card__link-title'>Превью проекта</span>
                </div>

            </div>
        </div>
    );
}

export default Project;