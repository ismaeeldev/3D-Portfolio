import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHeart, FaCode, FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import "./Footer.scss";

const Footer = () => {
  const footerRef = useRef();
  const isInView = useInView(footerRef, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const heartBeat = {
    animate: {
      scale: [1, 1.3, 1],
      color: ["#fff", "#ff6b6b", "#fff"],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  };

  const codeIconHover = {
    rotate: 180,
    scale: 1.2,
    color: "#915EFF",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  };

  const linkHover = {
    scale: 1.1,
    color: "#915EFF",
    textShadow: "0 0 10px rgba(145, 94, 255, 0.5)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  return (
    <motion.footer
      ref={footerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="footer text-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#915EFF] rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + i * 16}%`,
            bottom: '10%',
          }}
        />
      ))}

      <motion.p className="flex items-center justify-center gap-2 text-lg font-medium flex-wrap">

        {/* Code icon */}
        <motion.span
          custom={1}
          variants={textVariants}
          whileHover={codeIconHover}
          className="text-[#00e9ff]"
        >
          <FaCode />
        </motion.span>

        {/* With text */}
        <motion.span
          custom={2}
          variants={textVariants}
          className="text-white mx-2"
        >
          with
        </motion.span>

        {/* Heart icon */}
        <motion.span
          custom={3}
          variants={textVariants}
          animate={heartBeat.animate}
          className="text-[#ff6b6b]"
        >
          <FaHeart />
        </motion.span>

        {/* By text */}
        <motion.span
          custom={4}
          variants={textVariants}
          className="text-white mx-2"
        >
          by
        </motion.span>

        {/* Name and Fiverr links */}
        <span className="inline-flex items-center gap-1.5 flex-wrap justify-center">
          <motion.a
            href="https://www.github.com/ismaeeldev"
            target="_blank"
            rel="noopener noreferrer"
            custom={5}
            variants={textVariants}
            whileHover={linkHover}
            className="text-[#667eea] font-semibold hover:text-[#915EFF] transition-colors duration-300 flex items-center gap-2 rounded-2xl p-4"
          >
            Muhammad Ismaeel
            <motion.span
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaGithub />
            </motion.span>
          </motion.a>

        
        </span>

  
      </motion.p>

      {/* Copyright year */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1 }}
        className="mt-4 text-sm text-gray-400"
      >
        © {new Date().getFullYear()} All rights reserved. Built with React
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-2 text-xs text-gray-500"
      >
        Crafted with modern technologies and best practices
      </motion.div>

      {/* Animated border */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#915EFF] to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
      />
    </motion.footer>
  );
};

export default Footer;