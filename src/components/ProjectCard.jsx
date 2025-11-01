import Tilt from "react-parallax-tilt";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { list } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { webProject, otherProject } from "../constants";
import ProjectList from "./ProjectList";
import "./Project.scss";
import ProjectDetail from "./projectDetail";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    source_link,
    onProjectClick,
    // Add all the new fields from your project data
    featured,
    date,
    category,
    status,
    timeline,
    features,
    feedback
}) => {
    // Convert project data to match ProjectDetail expected structure
    const handleClick = () => {
        if (onProjectClick) {
            const projectDetailData = {
                // Core project information
                name: name, // Use 'name' instead of 'title'
                description: description,
                image: image,
                tags: tags, // Keep full tags with colors

                // Links - use correct field names
                source_link: source_link,
                source_code_link: source_code_link,

                // Additional project data
                featured: featured || false,
                date: date || new Date().toISOString().split('T')[0],
                category: category || "web",
                status: status || "Completed",
                timeline: timeline || "Not specified",
                features: features || [], // Use actual features array
                feedback: feedback || [], // Use actual feedback array

                // For compatibility with existing code
                images: [image] // Convert single image to array
            };

            console.log('🟢 ProjectCard sending data:', projectDetailData);
            onProjectClick(projectDetailData);
        }
    };

    return (
        <motion.div
            whileInView={{ opacity: 1, transform: 'none' }}
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            onClick={handleClick}
            className="cursor-pointer"
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full h-auto min-h-[445px] flex flex-col justify-between'>
                {/* Screen-like Image Container */}
                <div className='Box1 relative w-full h-[160px] rounded-lg overflow-hidden bg-gray-900 border border-gray-700'>
                    {/* Screen Frame */}
                    <div className="absolute inset-0 border-4 border-gray-800 rounded-lg z-10 pointer-events-none"></div>

                    {/* Screen Content */}
                    <div className="relative w-full h-full">
                        <img
                            src={image}
                            alt='project_image'
                            className='image w-full h-full object-cover'
                        />

                        {/* Screen Overlay Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Project Title Overlay */}
                    <div className='absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 bg-black/80 backdrop-blur-sm'>
                        <h3 className='text-white font-bold text-[18px] text-center px-4'>{name}</h3>
                    </div>

                    {/* Action Buttons */}
                    <div className='title absolute top-3 right-3 flex flex-col space-y-2 opacity-0 hover:opacity-100 transition-all duration-300'>
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(source_link, "_blank");
                            }}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/20 hover:border-[#00e9ff] transition-colors'
                        >
                            <img
                                src={demo}
                                alt='live demo'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(source_code_link, "_blank");
                            }}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/20 hover:border-[#915EFF] transition-colors'
                        >
                            <img
                                src={github}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className='content mt-5'>
                    <h3 className='text-white font-bold text-[20px] mb-3 text-center'>{name}</h3>

                    <p className='text-secondary text-[14px] leading-relaxed text-justify mb-4'>
                        {description.split(' ').slice(0, 20).join(' ') + (description.split(' ').length > 20 ? '...' : '')}
                    </p>

                    <div className='flex flex-wrap gap-2 justify-center'>
                        {tags.slice(0, 5).map((tag) => (
                            <span
                                key={`${name}-${tag.name}`}
                                className={`text-[12px] px-2 py-1 rounded-full ${tag.color} font-medium bg-opacity-10 border`}
                            >
                                #{tag.name}
                            </span>
                        ))}
                        {tags.length > 6 && (
                            <span className="text-[12px] px-2 py-1 rounded-full text-gray-400 font-medium bg-gray-700 border border-gray-600">
                                +{tags.length - 6} more
                            </span>
                        )}
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};

export default ProjectCard;