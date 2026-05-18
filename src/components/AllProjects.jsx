import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Star, ArrowLeft, ExternalLink } from 'lucide-react';
import { SectionWrapper } from '../hoc';
import ProjectCard from './ProjectCard';
import { webProject, otherProject } from '../constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Tag } from 'lucide-react';
import { fadeIn } from '../utils/motion';

const slugify = (text) => 
  text.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");


const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('featured');
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    // Combine all projects
    const allProjects = useMemo(() => [
        ...webProject.map(p => ({ ...p, category: 'web', featured: p.featured || false })),
        ...(otherProject ? otherProject.map(p => ({ ...p, category: 'other', featured: p.featured || false })) : [])
    ], []);

    // Filter and sort projects
    const filteredProjects = useMemo(() => {
        let filtered = allProjects;

        // Category filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(project => project.category === selectedCategory);
        }

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(project =>
                project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.tags.some(tag => tag.name.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Sort projects
        switch (sortBy) {
            case 'featured':
                filtered = filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
                break;
            case 'newest':
                filtered = filtered.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
                break;
            case 'name':
                filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                break;
        }

        return filtered;
    }, [allProjects, selectedCategory, searchTerm, sortBy]);

    const categories = [
        { id: 'all', name: 'All Projects', count: allProjects.length },
        { id: 'web', name: 'Web Development', count: webProject.length },
        { id: 'other', name: 'Other Projects', count: otherProject?.length || 0 }
    ];

    const handleProjectClick = (project) => {
        navigate(`/project/${slugify(project.name)}`);
        window.scrollTo({ top: 0, behavior: "instant" });
    };

    return (
        <div className="min-h-screen pt-20 relative overflow-hidden bg-primary">
            {/* Background Effects - Similar to your Experience component */}
            <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#915EFF] rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#00e9ff] rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute top-10 right-1/4 w-64 h-64 bg-[#4CAF50] rounded-full filter blur-3xl opacity-5"></div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10"
            >
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.history.back()}
                            className="inline-flex items-center gap-2 text-[#00e9ff] hover:text-white mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Home
                        </motion.button>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold text-white mb-4"
                        >
                            All <span className="text-[#00e9ff]">Projects</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
                        >
                            Explore my complete portfolio of {allProjects.length} projects.
                            From web applications to creative experiments.
                        </motion.p>
                    </div>


                    {/* Controls Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#151030]/65 backdrop-blur-xl rounded-3xl p-8 mb-12 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
                    >
                        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                            {/* 🔍 Search Field - Softer Glow */}
                            <div className="relative flex-1 max-w-md group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00e9ff] to-[#915EFF] rounded-xl blur-sm opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#00e9ff] w-5 h-5 z-10" />
                                <input
                                    type="text"
                                    placeholder="Discover projects..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="relative w-full pl-12 pr-6 py-4 bg-[#050816]/75 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00e9ff]/40 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                                />
                            </div>

                            {/* 🧭 Category Dropdown - Premium Look */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00e9ff] to-[#915EFF] rounded-xl blur-sm opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <div className="relative">
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="appearance-none bg-[#050816]/75 border border-white/10 rounded-xl pl-6 pr-12 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00e9ff]/40 backdrop-blur-sm cursor-pointer min-w-[200px] transition-all duration-300 hover:bg-[#151030]/80"
                                    >
                                        {categories.map((category) => (
                                            <option
                                                key={category.id}
                                                value={category.id}
                                                className="bg-[#151030] text-white"
                                            >
                                                {category.name} ({category.count})
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg
                                            className="w-5 h-5 text-[#00e9ff]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* ⚙️ Sort + View Toggle */}
                            <div className="flex gap-4 items-center">
                                {/* Sort Dropdown */}
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#00e9ff] to-[#915EFF] rounded-lg blur-sm opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="relative bg-[#050816]/75 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00e9ff]/40 backdrop-blur-sm appearance-none pr-10 cursor-pointer min-w-[160px] hover:bg-[#151030]/80 transition-all duration-300"
                                    >
                                        <option value="featured" className="bg-[#151030]">✨ Featured First</option>
                                        <option value="newest" className="bg-[#151030]">🆕 Newest First</option>
                                        <option value="name" className="bg-[#151030]">🔤 Alphabetical</option>
                                    </select>
                                    <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#00e9ff] w-4 h-4 pointer-events-none" />
                                </div>

                                {/* View Mode Buttons */}
                                <div className="bg-gray-700/40 backdrop-blur-sm rounded-xl p-1 border border-gray-700/30">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setViewMode('grid')}
                                        className={`p-3 rounded-lg transition-all duration-300 ${viewMode === 'grid'
                                            ? 'bg-gradient-to-br from-[#00e9ff] to-[#915EFF] text-white shadow-md'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-600/40'
                                            }`}
                                    >
                                        <Grid className="w-5 h-5" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setViewMode('list')}
                                        className={`p-3 rounded-lg transition-all duration-300 ${viewMode === 'list'
                                            ? 'bg-gradient-to-br from-[#00e9ff] to-[#915EFF] text-white shadow-md'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-600/40'
                                            }`}
                                    >
                                        <List className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </div>
                        </div>

                        {/* Active Filters */}
                        {(searchTerm || selectedCategory !== 'all') && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-6 pt-6 border-t border-gray-700/30"
                            >
                                <div className="flex items-center gap-4 flex-wrap">
                                    <span className="text-gray-400 text-sm">Active filters:</span>
                                    {searchTerm && (
                                        <span className="px-3 py-1 bg-[#00e9ff]/15 text-[#00e9ff] rounded-full text-sm border border-[#00e9ff]/30 flex items-center gap-2">
                                            Search: "{searchTerm}"
                                            <button onClick={() => setSearchTerm('')} className="hover:text-white">
                                                ×
                                            </button>
                                        </span>
                                    )}
                                    {selectedCategory !== 'all' && (
                                        <span className="px-3 py-1 bg-[#915EFF]/15 text-[#915EFF] rounded-full text-sm border border-[#915EFF]/30 flex items-center gap-2">
                                            Category: {categories.find((c) => c.id === selectedCategory)?.name}
                                            <button
                                                onClick={() => setSelectedCategory('all')}
                                                className="hover:text-white"
                                            >
                                                ×
                                            </button>
                                        </span>
                                    )}
                                    <button
                                        onClick={() => {
                                            setSearchTerm('');
                                            setSelectedCategory('all');
                                        }}
                                        className="ml-auto text-gray-400 hover:text-[#00e9ff] text-sm transition-colors"
                                    >
                                        Clear all
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>


                    {/* Projects Grid/List */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className={`${viewMode === 'grid'
                            ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'
                            : 'space-y-6'
                            }`}
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id || index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {viewMode === 'grid' ? (
                                    <ProjectCard
                                        index={index}
                                        {...project}
                                        onProjectClick={handleProjectClick}
                                    />
                                ) : (
                                    // List View Card
                                    <div
                                        onClick={() => handleProjectClick(project)}
                                        className="bg-[#151030]/40 backdrop-blur-lg rounded-2xl p-6 border border-white/5 hover:border-[#00e9ff] hover:shadow-[0_15px_30px_rgba(145,94,255,0.15)] transition-all duration-300 cursor-pointer group"
                                    >
                                        <div className="flex flex-col lg:flex-row gap-6 items-start">
                                            <div className="flex-shrink-0 w-full lg:w-48 h-32 rounded-lg overflow-hidden bg-[#050816] border border-white/5">
                                                <img
                                                    src={project.image}
                                                    alt={project.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white group-hover:text-[#00e9ff] transition-colors">
                                                            {project.name}
                                                        </h3>
                                                        {project.featured && (
                                                            <div className="flex items-center gap-1 mt-1">
                                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                                <span className="text-yellow-400 text-sm">Featured</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#00e9ff] transition-colors" />
                                                </div>
                                                <p className="text-gray-400 mb-4 line-clamp-2">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="px-2 py-1 bg-[#151030]/80 text-[#00e9ff] text-xs rounded border border-[#00e9ff]/20 font-medium"
                                                        >
                                                            {tag.name}
                                                        </span>
                                                    ))}
                                                    {project.tags.length > 4 && (
                                                        <span className="px-2 py-1 bg-[#151030]/80 text-gray-400 text-xs rounded border border-white/5 font-medium">
                                                            +{project.tags.length - 4} more
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
                            <p className="text-gray-400">
                                Try adjusting your search or filter criteria
                            </p>
                        </motion.div>
                    )}

                    {/* Results Count */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center mt-12 text-gray-400"
                    >
                        <p>
                            Showing {filteredProjects.length} of {allProjects.length} projects
                        </p>
                    </motion.div>
                </div>
            </motion.div>        </div>
    );
};

export default ProjectsPage;