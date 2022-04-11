import React from 'react';
import { Link } from 'react-router-dom';

function ProjectPage(props) {
    return (
        <div className='project-page'>
            <Link to={"/"}>Назад</Link>
            <h1>Страниц проекта</h1>
        </div>
    );
}

export default ProjectPage;