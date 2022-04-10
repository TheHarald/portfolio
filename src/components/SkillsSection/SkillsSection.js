import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './skills.css'

function SkillsSection(props) {
    const url = 'https://raw.githubusercontent.com/TheHarald/portfolio/master/info/skills.json'

    const [skills, setSkills] = useState();
    const [isLoading, setIsLoading] = useState(true);


    function getSkillsFromGitHub(url) {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setSkills(data)
                setIsLoading(false)
            });
    }

    useEffect(() => {
        getSkillsFromGitHub(url)
    }, [])

    return (
        <div className='section'>
            <h2 className='section__header'>Навыки</h2>
            {isLoading ? <p>Loading</p> :
                <div className='section__cards'>
                    <Card title={skills.frontendSkills.title} skills={skills.frontendSkills.skills} />
                    <Card title={skills.designSkills.title} skills={skills.designSkills.skills} />
                    <Card title={skills.hardSkills.title} skills={skills.hardSkills.skills} />
                </div>}
        </div>
    );
}

export default SkillsSection;