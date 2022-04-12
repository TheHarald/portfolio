import React from 'react';
import Card from '../components/Card/Card';
import GitHubLink from '../components/GitHubLink/GitHubLink';
import Header from '../components/Header/Header';
import NavigationPanel from '../components/NavigationPanel/NavigationPanel';
import Project from '../components/Project/Project';
import PrjojectSection from '../components/ProjectsSection/PrjojectSection';
import Rain from '../components/Rain/Rain';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import '../index.css';
import { Routes, Route, Link } from "react-router-dom";
import ProjectPage from "./ProjectPage/ProjectPage";

function MainPage(props) {
    return (
        <section >
            <a name="about"></a>
            <Header />
            <SkillsSection />
            <PrjojectSection />
            <Routes>
                <Route to="/project" element={ProjectPage} />
            </Routes>
            <Rain />
            <NavigationPanel />

        </section >
    );
}

export default MainPage;