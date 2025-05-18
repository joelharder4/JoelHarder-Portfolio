import React from 'react';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Stories from './pages/Stories.jsx'
import StoryPage from './pages/StoryPage.jsx';
import { Route, Routes } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage.jsx';


const App = () => {
  return (
    <div className="App">
      <div className='flex flex-col min-h-[100vh]'>
        <Navbar/>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectName" element={<ProjectPage />} />
            <Route path="stories" element={<Stories />} />
            <Route path="stories/:storyId" element={<StoryPage />} />
            {/* <Route path="reports" element={<Reports />} />
            <Route path="reports/:reportNum" element={<ReportPage />} /> */}
          </Route>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;