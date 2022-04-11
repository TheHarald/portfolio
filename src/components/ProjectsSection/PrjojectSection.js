import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

function PrjojectSection() {

    const url = 'https://raw.githubusercontent.com/TheHarald/portfolio/master/info/projects.json'

    const [projects, setSProjects] = useState();
    const [isLoading, setIsLoading] = useState(true);


    function getsetSProjectsFromGitHub(url) {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setSProjects(data)
                setIsLoading(false)
            });
    }

    useEffect(() => {
        getsetSProjectsFromGitHub(url)
    }, [])


    return (
        <div className='section'>

            <h2 className='section__header'>Проекты</h2>
            {isLoading ? <p>Loading</p> :
                <div className='section__cards'>
                    {projects.map((item, index) => {
                        console.log(projects)
                        return <Project
                            key={index}
                            imageUrl={item.imageUrl}
                            projectName={item.projectName}
                            description={item.description}
                            stack={item.stack}
                            ghLink={item.ghLink}
                            previewLink={item.previewLink}
                        />
                    })}
                </div>}
        </div>
    );
}

export default PrjojectSection;