import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Play, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const ProjectDetail = ({ project, isOpen, onClose }) => {
    useEffect(() => {
        console.log('Project Detail Props:', { project, isOpen, onClose });
    }, [project, isOpen, onClose]);

    const [activeImage, setActiveImage] = useState(0);
    const [currentFeedback, setCurrentFeedback] = useState(0);

    if (!project) return null;

    // Ensure images array exists and has at least one image
    const images = project.images || [project.image].filter(Boolean) || ['https://via.placeholder.com/800x450/1a1a1a/00e9ff?text=Project+Image'];

    // Feedback navigation
    const nextFeedback = () => {
        setCurrentFeedback((prev) =>
            prev === (project.feedback?.length - 1 || 0) ? 0 : prev + 1
        );
    };

    const prevFeedback = () => {
        setCurrentFeedback((prev) =>
            prev === 0 ? (project.feedback?.length - 1 || 0) : prev - 1
        );
    };

    // Render star ratings
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
            />
        ));
    };

    // Calculate average rating
    const averageRating = project.feedback?.length > 0
        ? Math.round(project.feedback.reduce((acc, curr) => acc + curr.rating, 0) / project.feedback.length)
        : 0;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-gray-700"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center p-6 border-b border-gray-700">
                                <h2 className="text-2xl font-bold text-white">{project.name || 'Project Title'}</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                                {/* Laptop Mockup Section */}
                                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-8">
                                    {/* Laptop Container */}
                                    <div className="max-w-4xl mx-auto">
                                        {/* Laptop Top */}
                                        <div className="relative mx-auto w-full max-w-[800px] h-0 pb-[56.25%] bg-gray-800 rounded-t-2xl border-t-4 border-l-4 border-r-4 border-gray-600">
                                            {/* Laptop Screen */}
                                            <div className="absolute inset-4 bg-black rounded-lg overflow-hidden border border-gray-600">
                                                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-600 rounded-full"></div>

                                                {/* Screen Content */}
                                                <div className="absolute inset-0 top-4">
                                                    <img
                                                        src={images[activeImage]}
                                                        alt={project.name}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            e.target.src = 'https://via.placeholder.com/800x450/1a1a1a/00e9ff?text=Project+Image';
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Laptop Bottom */}
                                        <div className="mx-auto w-full max-w-[900px] h-8 bg-gray-700 rounded-b-2xl border-b-4 border-l-4 border-r-4 border-gray-600 relative">
                                            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
                                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gray-600 rounded-t-lg"></div>
                                        </div>
                                    </div>

                                    {/* Image Thumbnails */}
                                    {images.length > 1 && (
                                        <div className="flex justify-center gap-4 mt-8">
                                            {images.map((image, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setActiveImage(index)}
                                                    className={`w-20 h-12 rounded border-2 overflow-hidden transition-all ${activeImage === index
                                                            ? 'border-[#00e9ff] scale-110'
                                                            : 'border-gray-600 hover:border-gray-400'
                                                        }`}
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`${project.name} ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            e.target.src = 'https://via.placeholder.com/80x48/1a1a1a/00e9ff?text=Image';
                                                        }}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Project Details */}
                                <div className="p-6 bg-gray-800/40 backdrop-blur-sm">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                        {/* Main Content */}
                                        <div className="lg:col-span-2 space-y-6">
                                            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl p-6 border border-gray-700/50">
                                                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                                                    Project Overview
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed mb-6 text-[15px]">
                                                    {project.description || 'No description available.'}
                                                </p>

                                                {/* Features - Compact Design */}
                                                {project.features && project.features.length > 0 && (
                                                    <div className="mb-6">
                                                        <div className="flex items-center gap-2 mb-3">
                                                            <div className="w-1.5 h-1.5 bg-[#00e9ff] rounded-full"></div>
                                                            <h4 className="text-lg font-semibold text-white">Key Features</h4>
                                                        </div>
                                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                            {project.features.map((feature, index) => (
                                                                <motion.li
                                                                    key={index}
                                                                    className="flex items-start text-gray-300 group hover:translate-x-1 transition-transform duration-200"
                                                                    whileHover={{ scale: 1.02 }}
                                                                >
                                                                    <div className="w-1.5 h-1.5 bg-[#00e9ff] rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                                                                    <span className="text-[14px] leading-tight">{feature}</span>
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Tech Stack - Modern Cards */}
                                                {project.tags && project.tags.length > 0 && (
                                                    <div className="mb-6">
                                                        <div className="flex items-center gap-2 mb-3">
                                                            <div className="w-1.5 h-1.5 bg-[#915EFF] rounded-full"></div>
                                                            <h4 className="text-lg font-semibold text-white">Technologies</h4>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.tags.map((tag, index) => (
                                                                <motion.span
                                                                    key={index}
                                                                    whileHover={{ scale: 1.05 }}
                                                                    className="px-3 py-2 bg-gradient-to-r from-gray-700/50 to-gray-600/30 text-[#00e9ff] rounded-xl text-sm border border-[#00e9ff]/20 backdrop-blur-sm hover:border-[#00e9ff]/40 transition-all duration-200"
                                                                >
                                                                    {typeof tag === 'string' ? tag : tag.name}
                                                                </motion.span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Feedback Section - Sleek Design */}
                                                {project.feedback && project.feedback.length > 0 && (
                                                    <div className="mt-6">
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                                                            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                                                                <Quote className="w-4 h-4 text-yellow-400" />
                                                                User Feedback
                                                            </h4>
                                                        </div>

                                                        <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl p-5 border border-gray-700/50 backdrop-blur-sm">
                                                            <AnimatePresence mode="wait">
                                                                <motion.div
                                                                    key={currentFeedback}
                                                                    initial={{ opacity: 0, y: 10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, y: -10 }}
                                                                    transition={{ duration: 0.3 }}
                                                                    className="text-center"
                                                                >
                                                                    {/* Compact Quote Design */}
                                                                    <div className="text-yellow-400/60 mb-3">
                                                                        <Quote className="w-6 h-6 mx-auto" />
                                                                    </div>

                                                                    {/* Feedback Message */}
                                                                    <p className="text-gray-300 text-[15px] italic mb-4 leading-relaxed">
                                                                        "{project.feedback[currentFeedback].message}"
                                                                    </p>

                                                                    {/* Reviewer Info - Compact */}
                                                                    <div className="mb-3">
                                                                        <h5 className="text-white font-semibold text-[16px]">
                                                                            {project.feedback[currentFeedback].name}
                                                                        </h5>
                                                                        <p className="text-yellow-400 text-[13px]">
                                                                            {project.feedback[currentFeedback].role}
                                                                        </p>
                                                                    </div>

                                                                    {/* Star Rating - Compact */}
                                                                    <div className="flex justify-center items-center gap-1 mb-3">
                                                                        {renderStars(project.feedback[currentFeedback].rating)}
                                                                        <span className="text-gray-400 text-[12px] ml-2">
                                                                            ({project.feedback[currentFeedback].rating}/5)
                                                                        </span>
                                                                    </div>

                                                                    {/* Date - Smaller */}
                                                                    <p className="text-gray-500 text-[12px]">
                                                                        {new Date(project.feedback[currentFeedback].date).toLocaleDateString('en-US', {
                                                                            month: 'short',
                                                                            day: 'numeric',
                                                                            year: 'numeric'
                                                                        })}
                                                                    </p>
                                                                </motion.div>
                                                            </AnimatePresence>

                                                            {/* Navigation Controls - Minimal */}
                                                            {project.feedback.length > 1 && (
                                                                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700/50">
                                                                    <motion.button
                                                                        whileHover={{ scale: 1.05 }}
                                                                        whileTap={{ scale: 0.95 }}
                                                                        onClick={prevFeedback}
                                                                        className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors text-sm group"
                                                                    >
                                                                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                                                                        Prev
                                                                    </motion.button>

                                                                    {/* Modern Dots Indicator */}
                                                                    <div className="flex gap-1.5">
                                                                        {project.feedback.map((_, index) => (
                                                                            <button
                                                                                key={index}
                                                                                onClick={() => setCurrentFeedback(index)}
                                                                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentFeedback
                                                                                        ? 'bg-yellow-400 scale-125'
                                                                                        : 'bg-gray-600 hover:bg-gray-400'
                                                                                    }`}
                                                                            />
                                                                        ))}
                                                                    </div>

                                                                    <motion.button
                                                                        whileHover={{ scale: 1.05 }}
                                                                        whileTap={{ scale: 0.95 }}
                                                                        onClick={nextFeedback}
                                                                        className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors text-sm group"
                                                                    >
                                                                        Next
                                                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                                                    </motion.button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Sidebar */}
                                        <div className="space-y-6">
                                            {/* Project Links */}
                                            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                                                <h4 className="text-lg font-semibold text-white mb-4">Project Links</h4>
                                                <div className="space-y-3">
                                                    {project.source_link && (
                                                        <a
                                                            href={project.source_link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-between p-3 bg-[#00e9ff]/10 border border-[#00e9ff]/30 rounded-lg hover:bg-[#00e9ff]/20 transition-colors group"
                                                        >
                                                            <div className="flex items-center">
                                                                <Play className="w-5 h-5 text-[#00e9ff] mr-3" />
                                                                <span className="text-white">Live Demo</span>
                                                            </div>
                                                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                                                        </a>
                                                    )}

                                                    {project.source_code_link && (
                                                        <a
                                                            href={project.source_code_link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-between p-3 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors group"
                                                        >
                                                            <div className="flex items-center">
                                                                <Github className="w-5 h-5 text-white mr-3" />
                                                                <span className="text-white">Source Code</span>
                                                            </div>
                                                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                                                        </a>
                                                    )}

                                                    {!project.source_link && !project.source_code_link && (
                                                        <p className="text-gray-400 text-sm text-center">No links available</p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Project Info */}
                                            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                                                <h4 className="text-lg font-semibold text-white mb-4">Project Info</h4>
                                                <div className="space-y-3">
                                                    <div>
                                                        <span className="text-gray-400 text-sm">Category</span>
                                                        <p className="text-white">{project.category || 'Not specified'}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-400 text-sm">Timeline</span>
                                                        <p className="text-white">{project.timeline || 'Not specified'}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-400 text-sm">Status</span>
                                                        <p className="text-[#00e9ff]">{project.status || 'Not specified'}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-400 text-sm">Date Completed</span>
                                                        <p className="text-white">
                                                            {project.date ? new Date(project.date).toLocaleDateString('en-US', {
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric'
                                                            }) : 'Not specified'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Feedback Stats */}
                                            {project.feedback && project.feedback.length > 0 && (
                                                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                                                    <h4 className="text-lg font-semibold text-white mb-4">Feedback Summary</h4>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-gray-400 text-sm">Total Reviews</span>
                                                            <span className="text-white font-semibold">{project.feedback.length}</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-gray-400 text-sm">Average Rating</span>
                                                            <div className="flex items-center gap-1">
                                                                {renderStars(averageRating)}
                                                                <span className="text-gray-400 text-sm ml-2">({averageRating}/5)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetail;