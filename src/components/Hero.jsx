import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { init } from 'ityped';
import React, { useEffect, useRef } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { SiFiverr } from "react-icons/si";
import personalPhoto from '../assets/personalPhoto.webp';
import "./Hero.scss";
import { isMobile } from "react-device-detect"; // Detects mobile devices


const Hero = () => {

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: [
        'Full Stack SaaS Architect',
        'AI & Agentic Systems Engineer',
        'RAG System Specialist',
        'Next.js & TypeScript Expert',
        'Fiverr Level 1 Seller',
        'Gov-Tech Solutions Developer'
      ]
    });

  }, []);

  return (
    <section className="relative w-full min-h-[75vh] lg:min-h-[80vh] mx-auto flex items-center justify-center overflow-hidden">
      <div className={`w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-16 pt-28 pb-20 lg:pt-36 lg:pb-24`}>
        
        {/* Text column on Left/Bottom */}
        <div className="flex flex-row items-start gap-5 flex-1 w-full relative z-10">
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div className="head2 flex-1">
            <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
              Hi there, I'm <span className='name text-[#915EFF] inline-block'>Muhammad Ismaeel</span>
            </h1>
            <h3 className="mt-3">
              <span ref={textRef} className={`${styles.heroSubText} green-text-gradient`}></span>
            </h3>

            {/* Social Links */}
            <div className="link1 flex gap-4 mt-8 items-center">
              <a
                href="https://github.com/ismaeeldev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-[#915EFF] hover:shadow-[0_0_15px_rgba(145,94,255,0.4)] transition-all duration-300"
                title="GitHub"
              >
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ismaeeldev786" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-[#00e9ff] hover:shadow-[0_0_15px_rgba(0,233,255,0.4)] transition-all duration-300"
                title="LinkedIn"
              >
                <ImLinkedin />
              </a>
              <a
                href="https://www.instagram.com/_just_ismaeel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-[#ff6b6b] hover:shadow-[0_0_15px_rgba(255,107,107,0.4)] transition-all duration-300"
                title="Instagram"
              >
                <AiOutlineInstagram />
              </a>
              <a
                href="https://www.fiverr.com/ismaeeldev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-[#1dbf73] hover:shadow-[0_0_15px_rgba(29,191,115,0.4)] transition-all duration-300 text-[1.2em]"
                title="Fiverr Level 1 Seller"
              >
                <SiFiverr />
              </a>
            </div>
          </div>
        </div>

        {/* Image column on Right/Top */}
        <div className="flex-1 flex justify-center items-center w-full max-w-sm lg:max-w-md relative z-10">
          <div className="imgcontainer1 relative rounded-full p-1.5 bg-gradient-to-br from-[#915EFF] to-[#00e9ff] shadow-[0_0_50px_rgba(145,94,255,0.25)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(0,233,255,0.35)]">
            {/* Pulsing Gradient Behind */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#915EFF] to-[#00e9ff] opacity-40 blur-xl animate-pulse pointer-events-none"></div>
            
            <img 
              src={personalPhoto} 
              alt="Muhammad Ismaeel" 
              className="w-[240px] h-[240px] xs:w-[280px] xs:h-[280px] md:w-[340px] md:h-[340px] object-cover rounded-full border-4 border-[#050816] bg-[#151030] relative z-10" 
            />
          </div>
        </div>

      </div>

      {/* {!isMobile && (
        <ComputersCanvas />
      )} */}

      {/* Centered Scroll Indicator */}
      <div className='absolute xs:bottom-4 bottom-8 w-full flex justify-center items-center z-10 pointer-events-none'>
        <a href='#education' className="pointer-events-auto">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:border-[#915EFF] transition-colors duration-300'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;