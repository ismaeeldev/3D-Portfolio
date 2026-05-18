import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Profile, Achievement, Experience, Education, Hero, Navbar, Tech, Project, Content, Footer, ProjectDetails, SEO, Testimonials } from "./components";
import ProjectsPage from "./components/AllProjects"; // Import the new ProjectsPage

// Lazy load heavy Three.js star particles to accelerate FCP/LCP Lighthouse scores
const StarsCanvas = React.lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={
              <>
                <SEO 
                  title="Muhammad Ismaeel | Full-Stack & GenAI Engineer" 
                  description="Explore the premium 3D portfolio of Muhammad Ismaeel, an elite Full-Stack & Generative AI Systems Engineer specializing in Next.js, React, Node.js, LangChain, and advanced autonomous AI agent workflows."
                />
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                  <Navbar />
                  <Hero />
                </div>
                <Content />
                <Education />
                <Project />
                <Testimonials />
                <Experience />
                <Achievement />
                <Tech />
                <div className='relative z-0'>
                  <Contact />
                  <Suspense fallback={null}>
                    <StarsCanvas />
                  </Suspense>
                </div>
                <Footer />
              </>
            } />

            {/* All Projects Page Route */}
            <Route path="/projects" element={
              <>
                <SEO 
                  title="SaaS & AI Projects Archive" 
                  description="Browse the comprehensive portfolio archive of premium web applications, offline point of sale products, Web3 crypto casinos, escrow software, and LangChain AI agents designed by Muhammad Ismaeel."
                />
                <Navbar />
                <ProjectsPage />
                <Footer />
              </>
            } />

            {/* Premium Project Details Dedicated Page Route */}
            <Route path="/project/:projectSlug" element={
              <>
                <ProjectDetails />
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