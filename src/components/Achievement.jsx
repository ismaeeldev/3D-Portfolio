import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const Achievement = () => {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`mt-12 bg-black-100 rounded-[20px] overflow-hidden relative`}
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#915EFF] rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00e9ff] rounded-full filter blur-3xl opacity-10"></div>

      {/* Header Section */}
      <motion.div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px] flex items-center relative z-10`}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div variants={textVariant()}>
          <motion.p
            className={styles.sectionSubText}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Some Glimpses on...
          </motion.p>
          <motion.h2
            className={styles.sectionHeadText}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Achievements.
          </motion.h2>
        </motion.div>
      </motion.div>

      {/* Achievements List */}
      <motion.div
        className={`-mt-16 justify-center p-8 ${styles.paddingX} gap-6 relative z-10`}
        variants={containerVariants}
      >
        <motion.ul className='space-y-4'>
          {achievements.map((achievement, index) => (
            <motion.li
              key={`achievement-${index}`}
              variants={itemVariants}
              className="flex items-start space-x-4 p-4 rounded-xl border border-white/10 bg-tertiary/50 backdrop-blur-sm hover:bg-tertiary/70 transition-all duration-300 group"
            >
              {/* Icon/Bullet */}
              <motion.div
                className="flex-shrink-0 w-6 h-6 bg-[#915EFF] rounded-full mt-1 flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <motion.p
                  className='text-white text-[15px] leading-relaxed group-hover:text-white transition-colors duration-300'
                  whileHover={{ x: 5 }}
                >
                  {achievement.title}
                </motion.p>

                {/* Animated underline */}
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-[#915EFF] to-transparent mt-2"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Decorative Element */}
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-[#915EFF]">🏆</span>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Floating Decoration */}
        <motion.div
          className="absolute top-10 right-10 text-4xl opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          ⭐
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Achievement, "");