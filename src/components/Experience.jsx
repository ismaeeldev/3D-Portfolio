import React, { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useInView } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #2a2352 100%)",
        color: "#fff",
        border: "1px solid rgba(145, 94, 255, 0.1)",
        borderRadius: "20px",
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
        position: "relative",
        overflow: "hidden"
      }}
      contentArrowStyle={{
        borderRight: "7px solid #232631",
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
      }}
      date={experience.date}
      dateClassName="text-white lg:text-secondary font-semibold !opacity-90 px-4"
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 4px #1d1836, 0 5px 15px rgba(0,0,0,0.3)",
        border: "2px solid rgba(145, 94, 255, 0.3)"
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#915EFF]/5 to-transparent opacity-50"></div>

      <div className="relative z-10">
        <div>
          <h3 className='text-white text-[22px] font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-left'>
            {experience.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <p className='text-secondary text-[15px] font-semibold' style={{ margin: 0 }}>
              {experience.company_name}
            </p>
            {experience.company_name === "Fiverr" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_12px_rgba(76,175,80,0.15)] select-none">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                Level 2 Seller
              </span>
            )}
          </div>
          {/* Responsive Inline Date Badge */}
          <div className="timeline-date-inline mt-2.5 flex items-center gap-1.5 text-secondary text-[13px] font-semibold select-none text-left">
            <span className="inline-block w-2 h-2 rounded-full bg-[#915EFF] animate-pulse"></span>
            <span>{experience.date}</span>
          </div>
        </div>

        <ul className='mt-6 list-disc ml-5 space-y-3 text-left'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wide leading-relaxed'
            >
              {point}
            </li>
          ))}
        </ul>

        {experience.link && (
          <div className="mt-6 pt-4 border-t border-white/10">
            <a
              href={experience.link}
              className="flex justify-center items-center gap-2 blue-text-gradient font-semibold text-[15px] hover:scale-105 transition-transform duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company_name === "Fiverr" ? "View Profile" : "View Project"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
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
      className="relative"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#915EFF] rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00e9ff] rounded-full filter blur-3xl opacity-10"></div>

      <motion.div variants={containerVariants}>
        <motion.div
          id="experience"
          variants={textVariant()}
          className="text-left mb-16"
        >
          <motion.p
            className={`${styles.sectionSubText}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            What I have done so far
          </motion.p>
          <motion.h2
            className={`${styles.sectionHeadText}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Work Experience.
          </motion.h2>
        </motion.div>

        <motion.div
          className='mt-20 flex flex-col relative z-10'
          variants={containerVariants}
        >
          <VerticalTimeline
            lineColor="linear-gradient(to bottom, #915EFF, #00e9ff)"
          >
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
                index={index}
              />
            ))}
          </VerticalTimeline>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Experience, "work");