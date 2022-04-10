import React from 'react';
import Project from '../Project/Project';

function PrjojectSections(props) {

    const url = 'https://raw.githubusercontent.com/TheHarald/portfolio/master/info/skills.json'

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
        <div className='skills-section'>
            <h2 className='skills-section__header'>Навыки</h2>
            {isLoading ? <p>Loading</p> :
                <div className='skills-section__cards'>
                    {projects.map((item, index) => {
                        return <Project
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

export default PrjojectSections;