import { motion, useInView } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiGooglecloud,
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiNestjs,
  SiMongodb,
  SiGit,
  SiNextdotjs,
  SiPostgresql,
  SiFlutter,
  SiTrpc,
  SiVisualstudiocode,
  SiAndroidstudio,
  SiPostman,
  SiVercel,
  SiFigma,
  SiDocker,
  SiFirebase,
  SiRedis,
  SiAmazonaws,
  SiTypescript,
  SiPython,
  SiJest,
  SiCypress,
  SiWebpack,
  SiFastapi,
  SiGraphql,
  SiSocketdotio,
  SiPrisma,
  SiSwagger,
  SiJquery,
  SiApollographql,
  SiKoa,
  SiOpenai
} from "react-icons/si";
import { FaDatabase, FaTools, FaMobile, FaRobot } from "react-icons/fa";

import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { useRef, useState } from "react";

const technologies = [
  // Frontend
  {
    name: "HTML 5",
    icon: SiHtml5,
    color: "#E34F26",
    category: "frontend"
  },
  {
    name: "CSS 3",
    icon: SiCss3,
    color: "#1572B6",
    category: "frontend"
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    category: "frontend"
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    category: "frontend"
  },
  {
    name: "React JS",
    icon: SiReact,
    color: "#61DAFB",
    category: "frontend"
  },
  {
    name: "Next JS",
    icon: SiNextdotjs,
    color: "#ffffff",
    category: "frontend"
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    category: "frontend"
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
    category: "frontend"
  },
  {
    name: "jQuery",
    icon: SiJquery,
    color: "#0769AD",
    category: "frontend"
  },

  // Backend
  {
    name: "Node JS",
    icon: SiNodedotjs,
    color: "#339933",
    category: "backend"
  },
  {
    name: "Express JS",
    icon: SiExpress,
    color: "#ffffff", // Changed from black to white
    category: "backend"
  },
  {
    name: "Nest JS",
    icon: SiNestjs,
    color: "#E0234E",
    category: "backend"
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "#009688",
    category: "backend"
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    category: "backend"
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "#E10098",
    category: "backend"
  },
  {
    name: "Apollo",
    icon: SiApollographql,
    color: "#311C87",
    category: "backend"
  },
  {
    name: "Socket.io",
    icon: SiSocketdotio,
    color: "#ffffff", // Changed from black to white
    category: "backend"
  },
  {
    name: "tRPC",
    icon: SiTrpc,
    color: "#2596BE",
    category: "backend"
  },
  {
    name: "Koa",
    icon: SiKoa,
    color: "#ffffff", // Changed from black to white
    category: "backend"
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#ffffff", // Changed from dark gray to white
    category: "backend"
  },
  {
    name: "Swagger",
    icon: SiSwagger,
    color: "#85EA2D",
    category: "backend"
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C",
    category: "backend"
  },

  // Database
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    category: "database"
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    category: "database"
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "#DC382D",
    category: "database"
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
    category: "database"
  },

  // Mobile
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#02569B",
    category: "mobile"
  },
  {
    name: "React Native",
    icon: SiReact,
    color: "#61DAFB",
    category: "mobile"
  },

  // AI/ML
  {
    name: "OpenAI API",
    icon: SiOpenai,
    color: "#00A67E",
    category: "ai"
  },
  {
    name: "LangChain",
    icon: FaRobot,
    color: "#10B981",
    category: "ai"
  },
  {
    name: "LangGraph",
    icon: FaRobot,
    color: "#3B82F6",
    category: "ai"
  },
  {
    name: "Pinecone DB",
    icon: FaDatabase,
    color: "#EC4899",
    category: "ai"
  },
  {
    name: "Agentic Workflows",
    icon: FaRobot,
    color: "#7C3AED",
    category: "ai"
  },
  {
    name: "RAG Systems",
    icon: FaDatabase,
    color: "#FF9800",
    category: "ai"
  },

  // Tools & DevOps
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    category: "tools"
  },
  {
    name: "VS Code",
    icon: SiVisualstudiocode,
    color: "#007ACC",
    category: "tools"
  },
  {
    name: "Android Studio",
    icon: SiAndroidstudio,
    color: "#3DDC84",
    category: "tools"
  },
  {
    name: "Cursor",
    icon: SiVisualstudiocode,
    color: "#ffffff", // Changed from black to white
    category: "tools"
  },
  {
    name: "Tray AI",
    icon: FaRobot,
    color: "#7C3AED",
    category: "tools"
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    category: "tools"
  },
  {
    name: "Thunder Client",
    icon: SiPostman,
    color: "#4F46E5",
    category: "tools"
  },
  {
    name: "pgAdmin",
    icon: SiPostgresql,
    color: "#336791",
    category: "tools"
  },
  {
    name: "MongoDB Atlas",
    icon: SiMongodb,
    color: "#47A248",
    category: "tools"
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    category: "tools"
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#ffffff", // Changed from black to white
    category: "tools"
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
    category: "tools"
  },
  {
    name: "AWS",
    icon: SiAmazonaws,
    color: "#FF9900",
    category: "tools"
  },
  {
    name: "Google Cloud",
    icon: SiGooglecloud,
    color: "#4285F4",
    category: "tools"
  },
  {
    name: "Jest",
    icon: SiJest,
    color: "#C21325",
    category: "tools"
  },
  {
    name: "Cypress",
    icon: SiCypress,
    color: "#ffffff", // Changed from dark gray to white
    category: "tools"
  },
  {
    name: "Webpack",
    icon: SiWebpack,
    color: "#8DD6F9",
    category: "tools"
  }
];

const categories = [
  { id: "frontend", name: "Frontend", icon: SiReact, color: "#00e9ff" },
  { id: "backend", name: "Backend", icon: SiNodedotjs, color: "#4CAF50" },
  { id: "database", name: "Database", icon: FaDatabase, color: "#e91e63" },
  { id: "mobile", name: "Mobile", icon: FaMobile, color: "#FF9800" },
  { id: "ai", name: "AI/ML", icon: FaRobot, color: "#9C27B0" },
  { id: "tools", name: "Tools", icon: FaTools, color: "#607D8B" }
];

const Tech = () => {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  const filteredTechnologies = technologies.filter(tech => tech.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
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
      {/* Header */}
      <motion.div
        id="tech"
        variants={textVariant()}
        className="mb-8"
      >
        <motion.h2
          className={`${styles.sectionHeadText}`}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          Tools & Technologies.
        </motion.h2>
        <motion.p
          className={`${styles.sectionSubText} mt-4`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies I work with to bring ideas to life
        </motion.p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        {categories.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 font-medium transition-all duration-300 ${selectedCategory === category.id
                  ? "scale-105 shadow-lg"
                  : "opacity-80 hover:opacity-100"
                }`}
              style={{
                borderColor: category.color,
                backgroundColor: selectedCategory === category.id ? `${category.color}15` : 'transparent',
                color: category.color
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CategoryIcon className="text-sm" />
              {category.name}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Technology Icons Grid */}
      <motion.div
        key={selectedCategory}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 justify-items-center"
      >
        {filteredTechnologies.map((technology, index) => {
          const IconComponent = technology.icon;
          return (
            <motion.div
              key={technology.name}
              variants={iconVariants}
              className="relative group flex flex-col items-center"
              whileHover={{
                scale: 1.1,
                y: -3,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              {/* Icon Container */}
              <div
                className="w-16 h-16 rounded-xl bg-tertiary/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 relative overflow-hidden"
                style={{
                  border: `2px solid ${technology.color}30`,
                  boxShadow: `0 4px 15px ${technology.color}15`,
                }}
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${technology.color}20, transparent 70%)`
                  }}
                />

                {/* Icon */}
                <IconComponent
                  className="text-2xl transition-all duration-300 group-hover:scale-110 relative z-10"
                  style={{ color: technology.color }}
                />

                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    borderColor: technology.color,
                    boxShadow: `0 0 20px ${technology.color}40`
                  }}
                />
              </div>

              {/* Tooltip */}
              <motion.div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded pointer-events-none opacity-0 group-hover:opacity-100 z-20 whitespace-nowrap transition-opacity duration-200"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              >
                {technology.name}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-1.5 h-1.5 bg-black/90 rotate-45"></div>
              </motion.div>

              {/* Technology Name (Visible on mobile) */}
              <p className="text-white text-[10px] mt-2 text-center font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300 md:hidden leading-tight">
                {technology.name.split(' ')[0]}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");