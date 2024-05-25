import React from 'react';
import Home from './Home';
import Navbar from './Navbar.jsx';
import About from './About';
import Projects from './Projects';
import Stories from './Stories'
import StoryPage from './StoryPage.jsx';
import Reports from './Reports';
import ReportPage from './ReportPage.jsx';
import { Route, Routes } from 'react-router-dom';
import ProjectPage from './ProjectPage.jsx';


const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/"> 
                    <Route index element={<Home />} />
                    <Route path="home" index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="projects/:projectName" element={<ProjectPage />} />
                    <Route path="stories" element={<Stories />} />
                    <Route path="stories/:storyNum" element={<StoryPage />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="reports/:reportNum" element={<ReportPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;