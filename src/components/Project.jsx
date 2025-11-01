import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion'; // or from 'react-intersection-observer'
import { Grid3X3, ArrowRight } from 'lucide-react'; // Missing icons
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { list } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { webProject, otherProject, featuredProjects } from "../constants"; // Missing featuredProjects
import ProjectList from "./ProjectList";
import ProjectDetail from "./projectDetail";
import ProjectCard from "./ProjectCard"; // Make sure this is imported
import "./Project.scss";
import { useNavigate } from 'react-router-dom';

const Project = () => {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef();
  const navigate = useNavigate();
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  useEffect(() => {
    // Use featured projects for the main section
    switch (selected) {
      case "web":
        setData(featuredProjects?.web || webProject.slice(0, 3)); // Added safe navigation
        break;
      case "other":
        setData(featuredProjects?.other || otherProject.slice(0, 3));
        break;
      default:
        setData(featuredProjects?.web || webProject.slice(0, 3));
    }
  }, [selected]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const navigateToAllProjects = () => {
    navigate('/projects');
  };

  return (
    <>
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative"
      >
        {/* Background Elements */}
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#915EFF] rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#00e9ff] rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-[#4CAF50] rounded-full filter blur-3xl opacity-5"></div>

        <motion.div variants={containerVariants}>
          <motion.div
            whileInView={{ opacity: 1 }}
            variants={textVariant()}
            className="text-left relative z-10"
          >
            <p className={`${styles.sectionSubText}`}>Featured Work</p>
            <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              A curated selection of my best projects. Each one represents unique challenges and innovative solutions.
            </p>
          </motion.div>

          <div className='project w-full relative z-10'>
            <motion.div
              whileInView={{ opacity: 1 }}
              variants={fadeIn("", "", 0.1, 1)}
              className="w-full"
            >


              {/* 3-Column Grid */}
              <div className='mt-16 box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center relative z-10'>
                {data.map((project, index) => (
                  <ProjectCard
                    key={`project-${index}`}
                    index={index}
                    {...project}
                    featured={true}
                    onProjectClick={handleProjectClick}
                  />
                ))}
              </div>

              {/* View All Projects Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center mt-16 relative z-10"
              >
                <button
                  onClick={navigateToAllProjects}
                  className="group relative overflow-hidden bg-gradient-to-r from-[#00e9ff] to-[#915EFF] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:from-[#915EFF] hover:to-[#00e9ff]"
                >
                  <span className="flex items-center gap-3">
                    <Grid3X3 className="w-5 h-5" />
                    View All Projects
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
              </motion.div>

              {/* Projects Counter */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center mt-8 text-gray-400 text-sm relative z-10"
              >
                <p>
                  Showing {data.length} featured projects •{' '}
                  <span className="text-[#00e9ff]">
                    {webProject.length + (otherProject?.length || 0)} total projects available
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectDetail
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default SectionWrapper(Project, "project");