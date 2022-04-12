import React from 'react';
import './index.css';
import { Routes, Route, Link } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import MainPage from './pages/MainPage';
import Project from './components/Project/Project';


function App() {

  return (
    <Routes>
      <Route path='*' element={<MainPage />} />
      <Route path='/project' element={<ProjectPage />} >
        <Route path=":id" element={<Project />} />
      </Route>

    </Routes>

  );
}

export default App;
