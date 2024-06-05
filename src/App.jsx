import React from 'react';
import Footer from './components/Footer.jsx';
import NavbarV2 from './NavbarV2.jsx';
import HomeV2 from './HomeV2.jsx';
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
      <div className='flex flex-col min-h-[100vh]'>
        <NavbarV2/>
        <Routes>
          <Route path="/"> 
            <Route index element={<HomeV2 />} />
            <Route path="home" index element={<HomeV2 />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectName" element={<ProjectPage />} />
            <Route path="stories" element={<Stories />} />
            <Route path="stories/:storyId" element={<StoryPage />} />
            <Route path="reports" element={<Reports />} />
            <Route path="reports/:reportNum" element={<ReportPage />} />
          </Route>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;