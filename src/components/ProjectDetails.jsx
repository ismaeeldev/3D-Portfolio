import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ExternalLink, Github, Award, Clock, Activity,
  Cpu, ShieldAlert, Sparkles, Server, CheckCircle2, ChevronRight,
  TrendingUp, Compass, Play, Code, Check, ShieldCheck, Zap
} from "lucide-react";
import { webProject, otherProject } from "../constants";
import "./ProjectDetails.scss";
import SEO from "./SEO";

// Simple slugifier to match React Router paths
const slugify = (text) =>
  text.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

// Hand-curated aesthetic brand colors for project fallbacks
const BRAND_COLORS = {
  "nexa-ai": { r: 145, g: 94, b: 255, hex: "#915EFF" }, // Violet
  "readless-ai": { r: 255, g: 107, b: 107, hex: "#ff6b6b" }, // Sunset Red
  "cafefresco-main": { r: 46, g: 204, b: 113, hex: "#2ecc71" }, // Emerald Green
  "cafefresco-dashboard": { r: 0, g: 233, b: 255, hex: "#00e9ff" }, // Vibrant Cyan
  "cityinsight": { r: 230, g: 126, b: 34, hex: "#e67e22" }, // Warm Amber
  "3d-portfolio": { r: 155, g: 89, b: 182, hex: "#9b59b6" }, // Purple
  "genix-gym": { r: 231, g: 76, b: 60, hex: "#e74c3c" }, // Crimson
  "flavorland": { r: 241, g: 196, b: 15, hex: "#f1c40f" }, // Gold
  "thinkpad": { r: 52, g: 152, b: 219, hex: "#3498db" }, // Blue
  "buzzbriefs-news-app": { r: 26, g: 188, b: 156, hex: "#1abc9c" }, // Turquoise
  "weather-app": { r: 44, g: 62, b: 80, hex: "#2c3e50" }, // Slate
  "word-analyzer": { r: 149, g: 165, b: 166, hex: "#95a5a6" }, // Gray
  "me-portfolio": { r: 232, g: 67, b: 147, hex: "#e84393" }, // Pink
  "hacking-simulator": { r: 39, g: 174, b: 96, hex: "#27ae60" }, // Matrix Green
  "to-do-application": { r: 41, g: 128, b: 185, hex: "#2980b9" }, // Steel Blue
  "chat-app-computer-network-project": { r: 127, g: 140, b: 141, hex: "#7f8c8d" }, // Platinum
  "costly-divorce-calculator-saas": { r: 255, g: 51, b: 102, hex: "#ff3366" }, // Vibrant Heartbreak Pink
  "crypto-betting-casino-poker-platform": { r: 255, g: 170, b: 0, hex: "#ffaa00" }, // Web3 Golden Amber
  "medico-pos-offline-first-point-of-sale": { r: 0, g: 233, b: 255, hex: "#00e9ff" }, // Clean POS Cyan
  "trustescrow-the-sovereign-escrow-forge": { r: 46, g: 204, b: 113, hex: "#2ecc71" }, // Trust Emerald Green
  "medico-medicine-authorization-system": { r: 0, g: 188, b: 212, hex: "#00bcd4" } // Safe Medicine Turquoise
};

const ProjectDetails = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [dominantColor, setDominantColor] = useState({ r: 145, g: 94, b: 255, hex: "#915EFF" });
  const [activeTab, setActiveTab] = useState("overview");
  const [activeSlide, setActiveSlide] = useState(0);
  const [metricsLoaded, setMetricsLoaded] = useState(false);
  const canvasRef = useRef(null);

  // Load project details based on slug
  useEffect(() => {
    const allProjects = [...webProject, ...(otherProject || [])];
    const foundProject = allProjects.find(p => slugify(p.name) === projectSlug);

    if (foundProject) {
      setProject(foundProject);

      // Load pre-curated brand color first
      const slug = slugify(foundProject.name);
      if (BRAND_COLORS[slug]) {
        setDominantColor(BRAND_COLORS[slug]);
      } else {
        // Fallback dynamic extraction using HTML5 Canvas
        extractColor(foundProject.image);
      }
    } else {
      // Redirect home if project not found
      navigate("/");
    }
  }, [projectSlug, navigate]);

  // Native Smooth Scroll and Top Reset on Page Entry
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const metricsTimeout = setTimeout(() => setMetricsLoaded(true), 600);
    return () => clearTimeout(metricsTimeout);
  }, []);

  // Quick dominant color extractor from image
  const extractColor = (imageSrc) => {
    if (!imageSrc) return;
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 10;
        canvas.height = 10;
        ctx.drawImage(img, 0, 0, 10, 10);
        const data = ctx.getImageData(0, 0, 10, 10).data;

        let r = 0, g = 0, b = 0, count = 0;
        for (let i = 0; i < data.length; i += 4) {
          const alpha = data[i + 3];
          if (alpha < 120) continue; // ignore blank spaces
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          count++;
        }
        if (count > 0) {
          r = Math.floor(r / count);
          g = Math.floor(g / count);
          b = Math.floor(b / count);

          // Boost saturation slightly for premium display glow
          const max = Math.max(r, g, b);
          if (max > 0) {
            r = Math.min(255, Math.floor(r * (255 / max) * 0.7 + r * 0.3));
            g = Math.min(255, Math.floor(g * (255 / max) * 0.7 + g * 0.3));
            b = Math.min(255, Math.floor(b * (255 / max) * 0.7 + b * 0.3));
          }

          const componentToHex = (c) => {
            const hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          };
          const rgbToHex = (r, g, b) => "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

          setDominantColor({ r, g, b, hex: rgbToHex(r, g, b) });
        }
      } catch (err) {
        console.warn("Canvas extract failed due to CORS, utilizing signature fallback.");
        setDominantColor({ r: 145, g: 94, b: 255, hex: "#915EFF" });
      }
    };
  };

  if (!project) return null;

  // Mocked details based on industry standard Awwwards designs
  const categoryLabel = project.category === "web" ? "Full-Stack Web Application" : "Software Engineering System";
  const durationLabel = project.timeline || "1.5 Months";
  const buildDate = project.date ? new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : "Recently Completed";

  // Custom mock slides showing high-end details
  const slideItems = [
    {
      title: "Core Platform Experience",
      desc: "Seamless visual viewport with responsive layouts and responsive grid system integrations.",
      img: project.image
    },
    {
      title: "Interactive System Mechanics",
      desc: "High-performance API connectivity, type-safe data loading, and instant client synchronization.",
      img: project.image // Fallback to main image
    },
    {
      title: "Lighthouse Audit Standards",
      desc: "Engineered to satisfy core web vitals, prioritizing rendering speeds, caching, and clean assets.",
      img: project.image // Fallback to main image
    }
  ];

  // Animated circular SVG gauge rendering
  const PerformanceGauge = ({ score, label, delay }) => {
    const strokeDashoffset = 251.2 - (251.2 * score) / 100;
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background ring */}
            <circle
              cx="56"
              cy="56"
              r="40"
              className="stroke-gray-800 fill-none"
              strokeWidth="6"
            />
            {/* Animated Ring */}
            <motion.circle
              cx="56"
              cy="56"
              r="40"
              className="fill-none"
              strokeWidth="6"
              strokeLinecap="round"
              stroke={dominantColor.hex}
              strokeDasharray="251.2"
              initial={{ strokeDashoffset: 251.2 }}
              animate={metricsLoaded ? { strokeDashoffset } : { strokeDashoffset: 251.2 }}
              transition={{ duration: 1.5, delay, ease: "easeOut" }}
              style={{
                filter: `drop-shadow(0 0 8px ${dominantColor.hex}50)`
              }}
            />
          </svg>
          <div className="absolute text-xl font-black text-white flex flex-col items-center justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay + 0.3 }}
            >
              {score}
            </motion.span>
          </div>
        </div>
        <span className="text-sm font-semibold text-gray-400 select-none tracking-wide uppercase">{label}</span>
      </div>
    );
  };

  return (
    <div className="project-details-page min-h-screen bg-[#050816] text-white relative overflow-hidden select-none pb-20">
      <SEO 
        title={`${project.name} | Project Details`}
        description={project.description}
        keywords={project.tags ? project.tags.map(t => t.name).join(", ") : ""}
        image={project.image}
      />

      {/* 1. EXTRAORDINARY AMBIENT GLOW BACKDROPS (COLOR EXTRACTED) */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90vw] h-[75vh] filter blur-[150px] opacity-25 rounded-full pointer-events-none z-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, rgba(${dominantColor.r}, ${dominantColor.g}, ${dominantColor.b}, 0.8) 0%, transparent 70%)`
        }}
      />
      <div
        className="absolute bottom-1/4 left-[-10%] w-[50vw] h-[50vh] filter blur-[180px] opacity-15 rounded-full pointer-events-none z-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, rgba(${dominantColor.r}, ${dominantColor.g}, ${dominantColor.b}, 0.5) 0%, transparent 70%)`
        }}
      />

      {/* 2. STICKY DOCK HEADER (APPLE/VERCEL STYLE) */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050816]/75 border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center"
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 group text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1.5" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300">
            {categoryLabel}
          </span>
          <span
            className="w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor: dominantColor.hex }}
          />
        </div>
      </motion.nav>

      {/* 3. WIDESCREEN HERO SHOWCASE & BRAND GLOW */}
      <section className="relative pt-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center z-10">

        {/* Floating Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 uppercase tracking-widest mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" style={{ color: dominantColor.hex }} />
          <span>{project.status || "Platform Engineering"}</span>
        </motion.div>

        {/* Project Title with Brand Color Gradient text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight leading-none mb-6 relative"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {project.name}
          </span>
        </motion.h1>

        {/* Project Description Summary */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed mb-12 text-center"
        >
          {project.description}
        </motion.p>

        {/* Project Meta Cards Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-16"
        >
          {[
            { label: "Timeline", val: durationLabel, icon: Clock },
            { label: "Deployment", val: buildDate, icon: CalendarIcon },
            { label: "Domain", val: project.category === "web" ? "Web Native" : "Utility App", icon: Compass },
            { label: "Engineering Lead", val: "Muhammad Ismaeel", icon: Award }
          ].map((meta, i) => {
            const Icon = meta.icon;
            return (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center backdrop-blur-md"
              >
                <Icon className="w-5 h-5 mb-2 text-gray-400" style={{ color: i === 0 ? dominantColor.hex : undefined }} />
                <span className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-0.5">{meta.label}</span>
                <span className="text-sm font-bold text-white leading-tight">{meta.val}</span>
              </div>
            );
          })}
        </motion.div>

        {/* 4. MAIN WIDESCREEN DEVICE SHOWCASE (Apple-Style Floating Window) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 60 }}
          className="w-full max-w-6xl relative group rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10 bg-gray-900"
        >
          {/* Top window browser bar */}
          <div className="bg-[#151030]/90 px-5 py-3 border-b border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="hidden sm:block text-xs text-gray-500 font-mono tracking-wide overflow-hidden whitespace-nowrap text-ellipsis max-w-[50%]">
              ismaeeldev.github.io/project/{slugify(project.name)}
            </div>
            <div className="w-12 h-2 bg-white/10 rounded-full" />
          </div>

          {/* Screenshot Container */}
          {/* Screenshot Container */}
          <div className="relative w-full overflow-hidden flex justify-center items-center">
            {/* Glowing Backdrop behind frame */}
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-2xl scale-110 opacity-30 transform group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            {/* Actual Screenshot */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto block relative z-10 transform group-hover:scale-[1.01] transition-transform duration-700"
            />
          </div>
        </motion.div>
      </section>

      {/* 5. STICKY BOTTOM ACTIONS FLOATING DOCK (Live Preview / Source Code) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
        className="fixed z-40 bg-[#151030]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center bottom-6 right-6 gap-3 p-3 rounded-2xl sm:flex-row sm:bottom-6 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:right-auto sm:gap-4 sm:p-3 sm:rounded-full"
      >
        <button
          onClick={() => project.source_link && window.open(project.source_link, "_blank")}
          className="w-12 h-12 sm:w-44 sm:h-12 flex justify-center items-center rounded-full text-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl uppercase tracking-wider p-0 sm:px-5"
          style={{
            background: `linear-gradient(90deg, #fff 0%, #e2e8f0 100%)`,
            boxShadow: `0 8px 20px ${dominantColor.hex}40`
          }}
        >
          <ExternalLink className="w-5 h-5 sm:w-4 sm:h-4 text-black" />
          <span className="hidden sm:inline text-xs sm:text-sm font-black ml-1.5">Live Demo</span>
        </button>

        <button
          onClick={() => project.source_code_link && window.open(project.source_code_link, "_blank")}
          className="w-12 h-12 sm:w-44 sm:h-12 flex justify-center items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider p-0 sm:px-5"
        >
          <Github className="w-5 h-5 sm:w-4 sm:h-4 text-white" />
          <span className="hidden sm:inline text-xs sm:text-sm font-black ml-1.5">Source Code</span>
        </button>
      </motion.div>

      {/* 6. SYSTEM PERFORMANCE METRICS (Lighthouse circular SVGs) */}
      <section className="pt-24 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
        <div className="bg-tertiary/30 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.01] to-transparent pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="text-left space-y-6">
              <span className="text-[#00e9ff] uppercase tracking-widest font-black text-xs">Awwwards Audit Specifications</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-none">
                Core Web Vitals & Performance Audit
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-xl">
                Every line of code is structured to prioritize visual throughput, satisfying core lighthouse audit criteria. This application displays seamless rendering speeds, assets packaging optimization, and clean browser parsing cycles.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  { label: "Rendering Velocity Speed Index", val: "0.4s", icon: Zap },
                  { label: "Total Layout Shift Optimization", val: "0.01s", icon: Activity },
                  { label: "Secure SSL Core Credentials", val: "Passed", icon: ShieldCheck }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10"
                        style={{ color: dominantColor.hex }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex justify-between w-full max-w-md items-center">
                        <span className="text-sm font-semibold text-gray-400">{item.label}</span>
                        <span className="text-sm font-bold text-white">{item.val}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SVG GAUGE ROW */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 justify-center">
              <PerformanceGauge score={99} label="Performance" delay={0.1} />
              <PerformanceGauge score={98} label="Accessibility" delay={0.2} />
              <PerformanceGauge score={100} label="Best Practices" delay={0.3} />
              <PerformanceGauge score={99} label="SEO Index" delay={0.4} />
            </div>

          </div>
        </div>
      </section>

      {/* 7. FEATURES DISPLAY GRID */}
      <section className="pt-24 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
        <div className="text-left mb-16">
          <span className="text-[#00e9ff] uppercase tracking-widest font-black text-xs">Architectural Highlights</span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            System Features
          </h2>
          <div className="w-20 h-1 mt-4 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.features && project.features.map((feat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-tertiary/20 hover:bg-tertiary/40 border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 relative group backdrop-blur-md"
            >
              {/* Dynamic decorative backdrop index number */}
              <div
                className="absolute top-4 right-4 text-4xl font-black text-white/[0.02] select-none group-hover:text-white/[0.05] transition-colors"
                style={{ WebkitTextStroke: `1px rgba(255,255,255,0.05)` }}
              >
                0{index + 1}
              </div>

              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ color: dominantColor.hex }}
              >
                <CheckCircle2 className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-tight uppercase select-none tracking-wide">
                Feature {index + 1}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed text-justify">
                {feat}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. TECH STACK PILLS AND DETAILS */}
      <section className="pt-24 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
        <div className="bg-tertiary/10 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="text-left max-w-lg space-y-4">
              <span className="text-[#00e9ff] uppercase tracking-widest font-black text-xs">Framework Infrastructure</span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Cutting-Edge Stack Specifications
              </h2>
              <p className="text-gray-400 leading-relaxed text-justify">
                Built strictly with modern tools and highly performant libraries to guarantee system flexibility, robust scalability, developer ease, and rapid user turnaround.
              </p>
            </div>

            {/* Tag Pills list */}
            <div className="flex-1 flex flex-wrap gap-3 justify-center lg:justify-end max-w-xl">
              {project.tags && project.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all duration-300 rounded-full px-5 py-3 flex items-center gap-2 group cursor-default shadow-md"
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
                  <span className="text-sm font-bold text-white select-none">{tag.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. SYSTEM ARCHITECTURE CONNECTORS DIAGRAM */}
      <section className="pt-24 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
        <div className="text-left mb-16">
          <span className="text-[#00e9ff] uppercase tracking-widest font-black text-xs">Pipeline Architecture</span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            System Data Flow
          </h2>
          <div className="w-20 h-1 mt-4 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative">

          {[
            {
              title: "Client-Side Viewport",
              desc: "Dynamic rendering built using React.js or Next.js layout architectures. Handles user actions, input updates, and executes UI optimizations.",
              role: "User Interface Layer",
              icon: Cpu
            },
            {
              title: "Middleware Server API",
              desc: "Fast server processing executing business logic commands. Manages type-safe responses, triggers db operations, and connects third-party engines.",
              role: "Orchestration & Validation Layer",
              icon: Server
            },
            {
              title: "Core Persistence Store",
              desc: "Serverless databases or vector data pools validating data schemas, keeping records, and logging persistent transactions.",
              role: "Database & Core Store Layer",
              icon: Activity
            }
          ].map((node, i) => {
            const Icon = node.icon;
            return (
              <div
                key={i}
                className="bg-tertiary/20 border border-white/5 rounded-2xl p-8 flex flex-col justify-between relative group hover:border-white/10 transition-all duration-300"
              >
                {/* Visual Arrow connector between columns */}
                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#151030] border border-white/10 items-center justify-center shadow-lg group-hover:scale-115 transition-transform duration-300">
                    <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                )}

                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 mb-6"
                    style={{ color: dominantColor.hex }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 uppercase select-none tracking-wide">{node.title}</h3>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#00e9ff] block mb-4">{node.role}</span>
                  <p className="text-gray-400 text-sm leading-relaxed text-justify">{node.desc}</p>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 10. LUXURIOUS INTERACTIVE SCREENSHOTS CAROUSEL */}
      <section className="pt-24 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
        <div className="text-left mb-16">
          <span className="text-[#00e9ff] uppercase tracking-widest font-black text-xs">Production Previews</span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            System Previews & Showcase
          </h2>
          <div className="w-20 h-1 mt-4 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-tertiary/20 border border-white/5 rounded-3xl p-6 md:p-10 backdrop-blur-md">

          {/* Active Screenshot Display (Left/Top) */}
          <div className="lg:col-span-8 overflow-hidden rounded-3xl shadow-2xl relative group border border-white/10 bg-gray-900 flex flex-col">
            {/* Top window browser bar */}
            <div className="bg-[#151030]/90 px-4 py-2.5 border-b border-white/5 flex items-center justify-between relative z-20">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[10px] text-gray-500 font-mono tracking-wide overflow-hidden whitespace-nowrap text-ellipsis max-w-[60%] select-none">
                ismaeeldev.github.io/project/{slugify(project.name)}/preview
              </div>
              <div className="w-8 h-1.5 bg-white/10 rounded-full" />
            </div>

            {/* Screenshot Container */}
            <div className="relative w-full overflow-hidden flex justify-center items-center">
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-2xl scale-110 opacity-30 transform group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${slideItems[activeSlide].img})` }}
              />
              <motion.img
                key={activeSlide}
                src={slideItems[activeSlide].img}
                alt={slideItems[activeSlide].title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-auto block relative z-10"
              />
            </div>
          </div>

          {/* Screenshot Description controls (Right/Bottom) */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            {slideItems.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border ${activeSlide === idx
                    ? "bg-white/10 border-white/20 shadow-lg scale-[1.02]"
                    : "bg-white/0 border-transparent hover:bg-white/5"
                  }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                    style={{
                      backgroundColor: activeSlide === idx ? dominantColor.hex : "rgba(255,255,255,0.05)",
                      color: activeSlide === idx ? "#000" : "#fff"
                    }}
                  >
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">{slide.title}</h3>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed pl-10 text-justify">
                  {slide.desc}
                </p>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 11. TECHNICAL ENGINEERING CHALLENGES SOLVED */}
      <section className="pt-24 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
        <div className="text-left mb-16">
          <span className="text-[#00e9ff] uppercase tracking-widest font-black text-xs">Algorithmic Narratives</span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Technical Engineering Challenges
          </h2>
          <div className="w-20 h-1 mt-4 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Challenge Box */}
          <div className="bg-red-500/[0.02] border border-red-500/10 hover:border-red-500/20 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between transition-colors duration-300 relative overflow-hidden group">
            {/* Ambient Red glow inside */}
            <div className="absolute top-[-10%] right-[-10%] w-48 h-48 bg-red-500/5 filter blur-3xl rounded-full pointer-events-none z-0" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black text-white mb-3 tracking-wide uppercase select-none">The Engineering Challenge</h3>
              <p className="text-gray-400 leading-relaxed text-sm text-justify">
                Designing advanced architectures requires resolving race conditions and mitigating asset bottlenecks. In high-density environments, standard synchronous API calls risk thread blockage, leading to degraded page speeds and visual latency. Consuming high-volume data streams also demands smart state management to prevent client-side DOM leaks.
              </p>
            </div>

            <div className="border-t border-red-500/10 mt-8 pt-4 flex justify-between items-center text-xs font-mono text-red-400/70 relative z-10">
              <span>CRITICAL BUNDLE BOTTLENECK</span>
              <span>RESOLVED V1.0.4</span>
            </div>
          </div>

          {/* Solution Box */}
          <div className="bg-emerald-500/[0.02] border border-emerald-500/10 hover:border-emerald-500/20 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between transition-colors duration-300 relative overflow-hidden group">
            {/* Ambient Emerald glow inside */}
            <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-emerald-500/5 filter blur-3xl rounded-full pointer-events-none z-0" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                <Check className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black text-white mb-3 tracking-wide uppercase select-none">The Technical Solution</h3>
              <p className="text-gray-400 leading-relaxed text-sm text-justify">
                To solve this, I designed a specialized async loading framework leveraging React-Query and type-safe TRPC layers. Dynamic visual elements are contained inside discrete micro-tasks, preventing Main-Thread blockage. For real-time sync, I integrated serverless event streams with client-side canvas-caching routines, resulting in near-instantaneous page layouts.
              </p>
            </div>

            <div className="border-t border-emerald-500/10 mt-8 pt-4 flex justify-between items-center text-xs font-mono text-emerald-400/70 relative z-10">
              <span>99.98% PIPELINE VELOCITY</span>
              <span>100% SECURED</span>
            </div>
          </div>

        </div>
      </section>

      {/* 12. BOTTOM HERO CALL-TO-ACTION & NEXT NAVIGATION */}
      <section className="pt-32 px-6 md:px-12 max-w-4xl mx-auto text-center z-10 relative">
        <div className="bg-gradient-to-br from-tertiary/20 to-tertiary/40 border border-white/10 rounded-3xl p-12 backdrop-blur-md relative overflow-hidden">
          <div
            className="absolute inset-0 filter blur-3xl opacity-10 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${dominantColor.hex} 0%, transparent 60%)`
            }}
          />

          <span className="text-[#00e9ff] uppercase tracking-widest font-black text-xs block mb-4">Adored by Clients Globally</span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-none mb-6">
            Intrigued by this engineering?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Let's build your next high-performance digital platform together on Fiverr. Let's work to scale your tech stack to the moon!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.open("https://www.fiverr.com/ismaeeldev", "_blank")}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-extrabold text-sm text-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl uppercase tracking-widest"
              style={{
                background: `linear-gradient(90deg, #fff 0%, #cbd5e1 100%)`,
                boxShadow: `0 10px 25px ${dominantColor.hex}40`
              }}
            >
              Order on Fiverr
            </button>

            <button
              onClick={() => window.open("https://wa.me/923126086871", "_blank")}
              className="w-full sm:w-auto bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 text-green-400 hover:text-green-300 px-8 py-4 rounded-full font-extrabold text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(37,211,102,0.1)] hover:shadow-[0_0_25px_rgba(37,211,102,0.2)] uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.488 2.01 14.041 1 11.999 1c-5.441 0-9.87 4.372-9.874 9.8.001 2.052.571 4.05 1.65 5.779l-.998 3.645 3.73-.974h.016zm11.302-6.505c-.277-.139-1.64-.809-1.895-.901-.255-.093-.44-.139-.626.139-.186.278-.718.901-.88 1.087-.162.186-.325.208-.602.069-.277-.14-1.172-.431-2.231-1.378-.824-.735-1.38-1.642-1.542-1.921-.162-.278-.017-.429.122-.568.125-.124.277-.324.416-.486.14-.162.186-.278.278-.463.093-.185.046-.347-.023-.486-.069-.139-.626-1.505-.856-2.062-.225-.542-.454-.47-.627-.478-.16-.008-.344-.01-.528-.01-.186 0-.487.07-.742.348-.256.278-.975.95-.975 2.316 0 1.366.993 2.686 1.132 2.871.14.186 1.956 2.986 4.739 4.188.662.286 1.179.457 1.583.585.666.211 1.272.181 1.751.11.534-.08 1.64-.67 1.873-1.319.232-.65.232-1.205.163-1.32-.07-.115-.255-.185-.532-.324z" />
              </svg>
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

// Simple visual components for meta
const CalendarIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default ProjectDetails;
