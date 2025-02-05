import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { init } from 'ityped';
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import personalPhoto from '../assets/personalPhoto.webp';
import "./Hero.scss";

// WebGL Support Check Function
const isWebGLSupported = () => {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  return !!gl;
};

const Hero = () => {
  const textRef = useRef();
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    // Check WebGL support
    if (!isWebGLSupported()) {
      setWebGLSupported(false);
      alert("WebGL is not supported on your device. 3D features have been disabled.");
    }

    // Initialize iTyped Animation
    init(textRef.current, {
      showCursor: true,
      strings: [
        'DSA Learner',
        'React Developer',
        'MongoDB Enthusiast',
        'Tech Enthusiast',
        'Software Developer',
        'Full Stack Developer',
        'Express.js Developer',
        'CSS framework Expert',
        'JavaScript Developer',
        'API Development Enthusiast'
      ]
    });
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="flex">
        <div
          className={`head1 absolute max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-90 h-40 violet-gradient' />
          </div>

          <div className="head2">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hii there, I'm <p className='name text-[#915EFF]'>Muhammad Ismaeel</p>
            </h1>
            <h3>
              <span ref={textRef} className={`${styles.heroSubText} mt-6 green-text-gradient`}></span>
            </h3>

            <div className="absolute link1">
              <a href="https://github.com/ismaeeldev" target="_blank">
                <AiOutlineGithub />
              </a>
              <a href="https://www.linkedin.com/in/ismaeeldev786" target="_blank">
                <ImLinkedin />
              </a>
              <a href="https://www.instagram.com/_just_ismaeel" target="_blank">
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="imgcontainer1 absolute violet-gradient">
          <img src={personalPhoto} alt="" className="object-contain" />
        </div>
      </div>

      {/* Render Canvas only if WebGL is supported */}
      {webGLSupported && (
        <div className='computer-canvas'>
          <ComputersCanvas />
        </div>
      )}

      <div className='absolute xs:bottom-2 bottom-6 w-10 flex justify-end items-center'>
        <a href='#education'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
