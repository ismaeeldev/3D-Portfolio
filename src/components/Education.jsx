import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";
import "./Education.scss";

const FeedbackCard = ({
  index,
  branch,
  marks,
  name,
  degree,
  year,
  image,
}) => {
  const cardRef = useRef();
  const isInView = useInView(cardRef, { once: true, threshold: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: index * 0.2,
        duration: 0.8
      }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    y: -8,
    boxShadow: "0 20px 40px rgba(145, 94, 255, 0.15)",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={hoverEffect}
      className='Box2 p-8 rounded-3xl xs:w-[350px] w-full h-[420px] flex flex-col justify-between relative overflow-hidden group'
    >
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/5 to-[#4CAF50]/5 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
      
      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-[#915EFF]/30 transition-all duration-300" />

      {/* Header Section */}
      <div className='flex flex-col items-center text-center relative z-10'>
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="relative"
        >
          <img
            src={image}
            alt={`education-${name}`}
            width="80"
            height="80"
            className='rounded-full object-cover border-2 border-[#915EFF]/30 group-hover:border-[#915EFF] transition-all duration-300'
          />
          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#915EFF]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.div 
          className='mt-4 flex-1 flex flex-col'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * 0.2 + 0.4 }}
        >
          <p className='text-white font-semibold text-[18px] leading-tight'>
            <span className='blue-text-gradient'>{name}</span>
          </p>
          <p className='mt-2 text-secondary text-[14px] font-medium'>
            {year}
          </p>
        </motion.div>
      </div>

      {/* Quote Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ delay: index * 0.2 + 0.5 }}
        className="text-center relative z-10"
      >
        <p className='text-white font-black text-[48px] opacity-60'>"</p>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className='flex-1 flex flex-col justify-center text-center relative z-10'
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.2 + 0.6 }}
      >
        <p className='text-white font-medium tracking-wide text-[16px] leading-relaxed'>
          {degree}
        </p>
        <p className='mt-3 text-[15px] font-semibold pink-text-gradient'>
          {branch}
        </p>
        <p className='mt-3 text-[14px] font-bold green-text-gradient'>
          {marks}
        </p>
      </motion.div>

      {/* Floating Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#915EFF] rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(i) * 15, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${20 + i * 30}%`,
            top: '30%',
          }}
        />
      ))}
    </motion.div>
  );
};

const Education = () => {
  const sectionRef = useRef();
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

  return (
    <motion.div 
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`mt-20 bg-black-100 rounded-[20px] overflow-hidden relative`}
    >
      {/* Background Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-72 h-72 bg-[#915EFF] rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [100, 50, 100],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#4CAF50] rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [-100, -50, -100],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Header Section */}
      <motion.div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[280px] flex items-center relative z-10`}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div variants={textVariant()} className="w-full">
          <motion.p 
            className={styles.sectionSubText}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Academic Journey
          </motion.p>
          <motion.h2 
            className={styles.sectionHeadText}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Education.
          </motion.h2>
          <motion.p 
            className="mt-4 text-secondary text-[16px] max-w-2xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            My educational background and academic achievements
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div 
        variants={containerVariants}
        className={`-mt-4 justify-center pb-20 ${styles.paddingX} flex flex-wrap gap-8 relative z-10`}
      >
        {educations.map((education, index) => (
          <FeedbackCard key={education.name} index={index} {...education} />
        ))}
      </motion.div>

      {/* Connection Line */}
      <motion.div 
        className="absolute left-1/2 top-1/3 bottom-1/3 w-0.5 bg-gradient-to-b from-[#915EFF] to-[#4CAF50] opacity-30"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        style={{ originY: 0 }}
      />
    </motion.div>
  );
};

export default SectionWrapper(Education, "education");