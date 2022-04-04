import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import NavigationPanel from './components/NavigationPanel/NavigationPanel';
import Rain from './components/Rain/Rain';
import './index.css';


function App() {

  return (
    <section  >
      <a name="about"></a>
      <Header />
      <NavigationPanel />
      <Card />
      <Card />
      <Card />
      <Rain />

    </section >

  );
}

export default App;
