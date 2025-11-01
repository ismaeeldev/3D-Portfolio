import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Profile, Achievement, Experience, Education, Hero, Navbar, Tech, Project, StarsCanvas, Content, Footer } from "./components";
import ProjectsPage from "./components/AllProjects"; // Import the new ProjectsPage

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={
              <>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                  <Navbar />
                  <Hero />
                </div>
                <Content />
                <Education />
                <Project />
                <Experience />
                <Achievement />
                <Tech />
                <div className='relative z-0'>
                  <Contact />
                  <StarsCanvas />
                </div>
                <Footer />
              </>
            } />

            {/* All Projects Page Route */}
            <Route path="/projects" element={
              <>
                <Navbar />
                <ProjectsPage />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App