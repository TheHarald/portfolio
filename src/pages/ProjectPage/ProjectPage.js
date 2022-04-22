import React from 'react';
import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import NeonIcon from '../../components/NeonIcon/NeonIcon';
import Project from '../../components/Project/Project';
import Tag from '../../components/Tag/Tag';
import UsabilityCard from '../../components/UsabilityCard/UsabilityCard';
import './projectPage.css'


function ProjectPage(props) {
    return (
        <div className='project-page'>
            <div className='project-page__header'>
                <Link className='project-page__link' to={"/"}> <NeonIcon icon={'arrow_back'} className={'project-page__back'} /> <span className='project-page__title'>Назад</span></Link>
                <h1 className='project-page__name'>Название проекта проекта</h1>
            </div>

            <div className='project-page__main-info'>

                <div className='project-page__text-block'>
                    <p className='project-page__description'>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает
                        сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона,
                        а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст..
                        Здесь ваш текст.. Здесь ваш текст.."</p>
                    <div className='project-page__block'>
                        <Tag title={'Some'} />
                        <Tag title={'Some'} />
                        <Tag title={'Some'} />
                        <Tag title={'Some'} />
                        <Tag title={'Some'} />
                        <Tag title={'Some'} />
                        <Tag title={'Some'} />
                    </div>
                    <div className='project-page__block'>
                        <UsabilityCard title={'Title'} description={'description'} />
                        <UsabilityCard title={'Title'} description={'description'} />
                        <UsabilityCard title={'Title'} description={'description'} />
                        <UsabilityCard title={'Title'} description={'description'} />
                    </div>

                    <div className='project-page__block'>
                        <div className='project-card__link-to-gh'>
                            <GitHubLink url={'ghLink'} />
                            <span className='project-card__link-title'>Исходный код</span>
                        </div>
                        <div className='project-card__link-to-gh'>
                            <a href={'previewLink'}>
                                <NeonIcon icon={'view_in_ar'} className={'project-card__preview'} />
                            </a>
                            <span className='project-card__link-title'>Превью проекта</span>
                        </div>
                    </div>




                </div>
                <img className='project-page__image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' />

            </div>





        </div>
    );
}

export default ProjectPage;