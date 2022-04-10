import React from 'react';
import Card from './components/Card/Card';
import GitHubLink from './components/GitHubLink/GitHubLink';
import Header from './components/Header/Header';
import NavigationPanel from './components/NavigationPanel/NavigationPanel';
import Project from './components/Project/Project';
import PrjojectSection from './components/ProjectsSection/PrjojectSection';
import Rain from './components/Rain/Rain';
import SkillsSection from './components/SkillsSection/SkillsSection';
import './index.css';


function App() {

  return (
    <section  >
      <a name="about"></a>
      <Header />
      {/* <Project
        imageUrl={'https://aerospaceexport.com/wp-content/uploads/2019/12/project-management-I.jpg'}
        projectName={'Graph'}
        description={'Очень краткое описание'}
        stack={['One', 'Two', 'Three']}
        ghLink={'link'}
        previewLink={'link2'}
      /> */}
      <PrjojectSection />
      <NavigationPanel />
      <SkillsSection />
      <Rain />

    </section >

  );
}

export default App;
