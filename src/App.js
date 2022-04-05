import React from 'react';
import Card from './components/Card/Card';
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
      <NavigationPanel />
      <SkillsSection />
      <Rain />

    </section >

  );
}

export default App;
