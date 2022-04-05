import React from 'react';
import Card from './components/Card/Card';
import GitHubLink from './components/GitHubLink/GitHubLink';
import Header from './components/Header/Header';
import NavigationPanel from './components/NavigationPanel/NavigationPanel';
import Rain from './components/Rain/Rain';
import SkillsSection from './components/SkillsSection/SkillsSection';
import './index.css';


function App() {

  return (
    <section  >
      <a name="about"></a>
      <Header />
      <GitHubLink url={'https://github.com/TheHarald'} />

      <NavigationPanel />
      <SkillsSection />
      <Rain />

    </section >

  );
}

export default App;
