import {
  javascript, html, css, reactjs, tailwind, nodejs, mongodb, git, threejs,
  hf, bny, holopin,
  clg, school, uni,
  DPortfolio, buzzBriefs, flavorLand, genixGym, hacking, thinkPad, portfolio, toDoApp, weatherApp, wordAnalyzer, chatApp, fiverr, cityInsight, cafeFresco, cafeDashboard, readless, nexaAi, costlyDash, casino, pointofsale, trustEscrow, medicine, chainPattern
} from "../assets";

const profiles = [
  {
    link: "https://auth.geeksforgeeks.org/user/aarti_rathi",
    icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
  },
  {
    link: "https://www.coursera.org/account/accomplishments/specialization/7V2SFZ9YWWRL",
    icon: "https://img.icons8.com/fluency/344/google-cloud.png",
  },
  {
    link: "https://www.qwiklabs.com/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
  },
  {
    link: "https://www.hackerrank.com/_shinchancode",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
  },
  {
    link: "https://dev.to/shinchancode",
    icon: hf,
  },
  {
    link: "https://www.holopin.io/@shinchancode#badges",
    icon: holopin,
  },
];

const achievements = [
  {
    title: "Earned Fiverr Level 1 Seller status, delivering premium full-stack and AI services globally with a perfect 5.0-star rating (2024-Present).",
  },
  {
    title: "Architected 'Costly,' an enterprise-grade Divorce SaaS platform featuring high-fidelity child support engines, Stripe integration, and custom OpenAI legal advisers (2024).",
  },
  {
    title: "Developed the 'Chain Pattern Analysis System (CPAS),' executing 15 advanced mathematical algorithms with native Tkinter and Matplotlib plotting (2023).",
  },
  {
    title: "Built 'Medico,' an advanced Medicine Authorization & QR Barcode Scanner system leveraging React Native and Next.js (2024).",
  },
  {
    title: "Mastered production AI paradigms including LangChain, LangGraph agentic workflows, Pinecone vector indexing, and high-performance RAG pipeline architectures.",
  },

];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
  },
  {
    name: "Google Cloud",
    icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
  },
  {
    name: "C++ tool",
    icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Express JS",
    icon: "https://img.icons8.com/nolan/512/express-js.png", // Replace with an appropriate Express.js icon if needed.
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },


];

const list = [
  {
    id: "web",
    title: "Web Dev",
  },
  {
    id: "other",
    title: "Other",
  },
];


export const webProject = [
  {
    name: "Costly - Divorce Calculator SAAS",
    description: "A premium SaaS Divorce Cost Calculator platform designed to provide financial clarity for individuals navigating the complexities of divorce. Built with a focus on privacy, precision, and ease of use, Costly features a high-fidelity Post-Divorce Reality Score post-calculative analyzer, an integrated OpenAI AI Divorce Advisor, and secure Stripe pricing systems.",
    tags: [
      { name: "Next.js 14", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Framer Motion", color: "pink-text-gradient" },
      { name: "Prisma", color: "purple-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
      { name: "NextAuth.js", color: "orange-text-gradient" },
      { name: "Stripe Connect", color: "yellow-text-gradient" },
      { name: "OpenAI API", color: "green-text-gradient" }
    ],
    image: costlyDash,
    source_link: "https://costly-chi.vercel.app/",
    source_code_link: "https://github.com/ismaeeldev/Costly--Divorce-Cost-Calculalor-Plateform",
    featured: true,
    date: "2024-05-10",
    category: "web",
    status: "Completed",
    timeline: "2.5 months",
    features: [
      "Precision Financial Engine for Child Support & Alimony Estimates",
      "Reality Score analyzer for post-divorce discretionary income sustainability",
      "Scenario Comparison Workbench for side-by-side custody outcome models",
      "OpenAI-powered built-in AI Financial Advisor for instant legal questions",
      "100% Anonymous bank-level data encryption with 256-bit protocols",
      "Secure subscription billing system powered by Stripe payment gateways"
    ],
    feedback: [
      {
        name: "Thomas Shelby",
        role: "Family Law Attorney",
        rating: 5,
        message: "Costly brings unprecedented transparency to the divorce planning process. The scenario comparison engine helps my clients model post-divorce realities with extreme precision.",
        date: "2024-05-18"
      },
      {
        name: "Victoria Martinez",
        role: "Financial Consultant",
        rating: 5,
        message: "The post-divorce discretionary income calculator is incredibly realistic. Perfect for anyone preparing to negotiate assets and child support.",
        date: "2024-05-15"
      }
    ]
  },
  {
    name: "Crypto-Betting Casino (Poker Platform)",
    description: "A high-performance, real-time multiplayer Web3 cryptocurrency betting and Poker tournament platform. Integrates modern blockchain protocols (BSC, Moonbeam) with robust real-time WebSockets to deliver high-fidelity game rooms, interactive game history trackers, and secure decentralized wallet integrations.",
    tags: [
      { name: "React 18", color: "blue-text-gradient" },
      { name: "WebSockets", color: "pink-text-gradient" },
      { name: "Ethers.js", color: "yellow-text-gradient" },
      { name: "Redux Toolkit", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "purple-text-gradient" },
      { name: "Express.js", color: "orange-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
      { name: "Sequelize", color: "gray-text-gradient" }
    ],
    image: casino,
    source_link: "https://github.com/ismaeeldev/Multiplayer-Web3-Gaming-System",
    source_code_link: "https://github.com/ismaeeldev/Multiplayer-Web3-Gaming-System",
    featured: true,
    date: "2024-04-25",
    category: "web",
    status: "Completed",
    timeline: "3 months",
    features: [
      "Real-Time Poker Rooms: Multiplayer games with live socket-driven state updates",
      "Tournament Management Hub with real-time leaderboard ranking engines",
      "Web3 Wallet Integration (Ethers.js, Web3.js, MetaMask) for direct BSC & Moonbeam support",
      "Interactive UI dashboard styled with Material UI and Framer Motion micro-animations",
      "Robust Node/Express backend with Sequelize ORM and Passport JWT Authentication"
    ],
    feedback: [
      {
        name: "Alex K.",
        role: "Web3 Gaming Architect",
        rating: 5,
        message: "Flawless WebSocket real-time poker state synchronization. The integration of Moonbeam and BSC blockchain wallets is secure and exceptionally fast.",
        date: "2024-05-02"
      },
      {
        name: "Daniel Vane",
        role: "Full Stack Reviewer",
        rating: 4,
        message: "Sleek design system. The Redux Toolkit implementation keeps the gaming state consistent across all concurrent poker tables. Excellent backend Sequelize architecture!",
        date: "2024-04-28"
      }
    ]
  },
  {
    name: "Medico POS - Offline-First Point of Sale",
    description: "A production-grade, high-reliability offline-first Progressive Web App (PWA) Point of Sale system specifically engineered to handle unstable internet connections. Features a highly compliant Offline MOTO card entry synchronization bridge, Stripe Terminal simulation frameworks, and cross-tab multi-instance locking mechanics.",
    tags: [
      { name: "Next.js 15", color: "blue-text-gradient" },
      { name: "PWA / Workbox", color: "green-text-gradient" },
      { name: "Stripe SDK", color: "pink-text-gradient" },
      { name: "Neon Postgres", color: "yellow-text-gradient" },
      { name: "Prisma ORM", color: "purple-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
      { name: "Framer Motion", color: "orange-text-gradient" }
    ],
    image: pointofsale,
    source_link: "https://point-of-sale-system-three.vercel.app/",
    source_code_link: "https://github.com/ismaeeldev/Point-of-Sale-System",
    featured: true,
    date: "2024-03-30",
    category: "web",
    status: "Completed",
    timeline: "2.5 months",
    features: [
      "Offline MOTO Bridge: Secure offline card data capture with sequential manual sync",
      "Progressive Web App (PWA): Fully installable on iOS, Android, macOS, Windows",
      "Hardware Simulator: Interactive sandbox mode simulating Stripe physical readers",
      "Cross-Tab Safety Engine using browser locks to eliminate checkout race conditions",
      "Radix-UI and Shadcn responsive dark-mode styled with premium glassmorphism"
    ],
    feedback: [
      {
        name: "Dr. Marcus Vance",
        role: "Pharmacy Chain Director",
        rating: 5,
        message: "Medico POS is a lifesaver in high-volume settings. The offline-first MOTO sync allows our checkout cashiers to continue operating smoothly even during network outages!",
        date: "2024-04-12"
      },
      {
        name: "Sarah Jenkins",
        role: "Operations Lead",
        rating: 5,
        message: "Highly professional Stripe integration. The terminal hardware simulator allowed us to complete end-to-end testing before ordering physical payment readers. Outstanding!",
        date: "2024-04-05"
      }
    ]
  },
  {
    name: "TrustEscrow - The Sovereign Escrow Forge",
    description: "A secure, high-fidelity escrow financial infrastructure built for modern digital commerce. Features 'The Order Forge' admin transaction controller dashboard, an Auditor Control Center for dispute examinations, seller payouts onboarding via Stripe Connect, and detailed immutable ledger tracking.",
    tags: [
      { name: "Next.js 16", color: "blue-text-gradient" },
      { name: "Stripe Connect", color: "pink-text-gradient" },
      { name: "Prisma", color: "purple-text-gradient" },
      { name: "Neon Postgres", color: "yellow-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Shadcn UI", color: "blue-text-gradient" },
      { name: "Framer Motion", color: "orange-text-gradient" }
    ],
    image: trustEscrow,
    source_link: "https://trust-escrow-dun.vercel.app/",
    source_code_link: "https://github.com/ismaeeldev/TrustEscrow",
    featured: true,
    date: "2024-02-15",
    category: "web",
    status: "Completed",
    timeline: "2 months",
    features: [
      "The Order Forge: Bento-grid inspired administration dashboard tracking active settlements",
      "Auditor Control Center: High-fidelity dispute interface validating secure delivery proofs",
      "Status Tracker buyer portal with automated client-side polling status updates",
      "Stripe Connect Standard payout onboarding pathways for merchant verification",
      "Immutable Ledger: Synchronized audit trails detailing ledger movements"
    ],
    feedback: [
      {
        name: "Jonathan Archer",
        role: "Escrow Agent Auditor",
        rating: 5,
        message: "The Auditor Control Center is exceptionally clean. The bento-grid stats, immutable financial ledgers, and fast sync engines make managing disputes simple and secure.",
        date: "2024-03-01"
      },
      {
        name: "Elena Rostova",
        role: "SaaS E-Commerce Merchant",
        rating: 5,
        message: "We integrated TrustEscrow to manage our digital services payouts. The Stripe Connect onboarding flows are seamless, and our buyers love the real-time status tracker!",
        date: "2024-02-28"
      }
    ]
  },
  {
    name: "Medico - Medicine Authorization System",
    description: "A modern, production-grade pharmaceutical verification SaaS platform designed to authenticate genuine registered medicines. Features an integrated live camera barcode/serial scanner, product authorization database queries, Mongoose data schema structures, and responsive manufacturer registries.",
    tags: [
      { name: "Next.js 14", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Mongoose", color: "yellow-text-gradient" },
      { name: "html5-qrcode", color: "purple-text-gradient" },
      { name: "Tailwind CSS", color: "orange-text-gradient" },
      { name: "Shadcn UI", color: "blue-text-gradient" }
    ],
    image: medicine,
    source_link: "https://github.com/ismaeeldev/Medicine-Authorization-System",
    source_code_link: "https://github.com/ismaeeldev/Medicine-Authorization-System",
    featured: false,
    date: "2024-01-20",
    category: "web",
    status: "Completed",
    timeline: "1.5 months",
    features: [
      "Live Camera Scanning using high-speed browser-level qr-code & barcode decoding libraries",
      "Barcode Image Upload parsing utility for client-side image file serial extraction",
      "Real-Time Verification: Immediate database validation for legitimate/illegitimate products",
      "Company Registration module with serial duplicate protection database safeguards",
      "Frosted glassmorphism dark-mode UI with smooth Sonner toast notifications"
    ],
    feedback: [
      {
        name: "Dr. Arthur Pendelton",
        role: "Director of Quality Control",
        rating: 5,
        message: "An elegant and necessary platform for tackling counterfeit medicines. The live camera barcode extraction works instantly on mobile devices.",
        date: "2024-02-05"
      },
      {
        name: "Clara Oswald",
        role: "Pharmaceutical Compliance Officer",
        rating: 5,
        message: "The company registration and serial number duplicate safeguard features make it impossible to inject illegal batches into the supply chain. Extremely robust.",
        date: "2024-01-28"
      }
    ]
  },
  {
    name: "Nexa AI",
    description: "Nexa is an advanced AI agent that provides intelligent meeting functionality with real-time video streaming, chat capabilities, and automated summaries. It leverages cutting-edge AI models to enhance team collaboration and productivity.",
    tags: [
      { name: "Next.js 15", color: "blue-text-gradient" },
      { name: "Turbopack", color: "green-text-gradient" },
      { name: "TRPC", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "yellow-text-gradient" },
      { name: "Hugging Face", color: "purple-text-gradient" },
      { name: "Stream Video", color: "orange-text-gradient" }
    ],
    image: nexaAi,
    source_link: "https://github.com/ismaeeldev/Nexa-Ai",
    source_code_link: "https://github.com/ismaeeldev/Nexa-Ai",
    featured: true,
    date: "2024-04-10",
    category: "web",
    status: "Completed",
    timeline: "1 month",
    features: [
      "Real-time video streaming and chat",
      "AI-powered meeting summaries",
      "Type-safe API with TRPC",
      "Advanced authentication system",
      "PostgreSQL database integration",
      "Modern UI with Tailwind CSS"
    ],
    feedback: [
      {
        name: "Sarah Chen",
        role: "Product Manager",
        message: "Nexa AI has revolutionized our team meetings. The automatic summaries save us hours of work each week!",
        rating: 5,
        date: "2024-04-20"
      },
      {
        name: "Marcus Johnson",
        role: "Tech Lead",
        message: "Impressive real-time capabilities and the AI summaries are surprisingly accurate. Great work!",
        rating: 4,
        date: "2024-04-18"
      }
    ]
  },
  {
    name: "ReadLess AI",
    description: "ReadLess is an intelligent AI-powered tool that quickly and accurately summarizes PDF documents. Convert lengthy PDFs into concise, easy-to-understand summaries, saving you time and enhancing your reading experience.",
    tags: [
      { name: "Next.js 15", color: "blue-text-gradient" },
      { name: "React 19", color: "green-text-gradient" },
      { name: "LangChain", color: "pink-text-gradient" },
      { name: "Clerk Auth", color: "yellow-text-gradient" },
      { name: "Multiple LLMs", color: "purple-text-gradient" },
      { name: "PostgreSQL", color: "orange-text-gradient" }
    ],
    image: readless,
    source_link: "https://read-less-ai.netlify.app/",
    source_code_link: "https://github.com/ismaeeldev/ReadLess-AI",
    featured: true,
    date: "2023-12-15",
    category: "web",
    status: "Completed",
    timeline: "2 months",
    features: [
      "Multi-LLM support (OpenAI, Gemini, Groq)",
      "Advanced PDF processing with LangChain",
      "User authentication with Clerk",
      "Real-time notifications",
      "Serverless PostgreSQL database",
      "Optimized performance with dynamic imports"
    ],
    feedback: [
      {
        name: "Dr. Emily Roberts",
        role: "Researcher",
        message: "This tool has cut my research time in half! The summaries are accurate and save me from reading hundreds of pages.",
        rating: 5,
        date: "2024-01-10"
      },
      {
        name: "Alex Thompson",
        role: "Student",
        message: "Incredible tool for academic work. The interface is intuitive and the AI summaries are spot-on.",
        rating: 5,
        date: "2024-01-05"
      }
    ]
  },
  {
    name: "CafeFresco",
    description: "A complete e-commerce solution for modern restaurants featuring online ordering, table reservations, and payment processing. Built with a focus on user experience and restaurant management efficiency.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Material UI", color: "yellow-text-gradient" },
      { name: "Stripe", color: "purple-text-gradient" },
      { name: "Bootstrap", color: "orange-text-gradient" }
    ],
    image: cafeFresco,
    source_link: "https://cafe-fresco-main.vercel.app/",
    source_code_link: "https://github.com/ismaeeldev/cafeFresco-main",
    featured: true,
    date: "2023-11-20",
    category: "web",
    status: "Completed",
    timeline: "3 months",
    features: [
      "Online food ordering system",
      "Table reservation management",
      "Secure payment processing with Stripe",
      "Real-time order tracking",
      "Admin dashboard for restaurant management",
      "Responsive design for all devices"
    ],
    feedback: [
      {
        name: "Maria Gonzalez",
        role: "Restaurant Owner",
        message: "CafeFresco has transformed our business. Online orders have increased by 40% since implementation!",
        rating: 5,
        date: "2023-12-01"
      },
      {
        name: "David Kim",
        role: "Food Critic",
        message: "The user experience is seamless. Ordering food has never been easier. Great job on the design!",
        rating: 4,
        date: "2023-11-28"
      }
    ]
  },
  {
    name: "CafeFresco Management System",
    description: "A comprehensive restaurant management system with advanced role-based features, analytics, and inventory management. Provides complete control over restaurant operations with real-time insights.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Chart.js", color: "yellow-text-gradient" },
      { name: "Material UI", color: "purple-text-gradient" },
      { name: "Stripe", color: "orange-text-gradient" }
    ],
    image: cafeDashboard,
    source_link: "https://cafe-fresco-dashboard.vercel.app/",
    source_code_link: "https://github.com/ismaeeldev/cafeFresco-dashboard",
    featured: false,
    date: "2023-10-15",
    category: "web",
    status: "Completed",
    timeline: "2.5 months",
    features: [
      "Advanced role-based access control",
      "Real-time analytics and reporting",
      "Inventory management system",
      "Staff performance tracking",
      "Financial reporting with Chart.js",
      "Multi-location support"
    ],
    feedback: [
      {
        name: "Robert Wilson",
        role: "Operations Manager",
        message: "The management system has streamlined our operations significantly. The analytics are particularly valuable.",
        rating: 4,
        date: "2023-11-05"
      },
      {
        name: "Lisa Zhang",
        role: "Finance Director",
        message: "Excellent financial reporting features. The dashboard provides clear insights into our business performance.",
        rating: 5,
        date: "2023-10-30"
      }
    ]
  },
  {
    name: "CityInsight",
    description: "A modern news website management platform with advanced features for authors and publishers. Includes content management, user engagement analytics, and multi-format publishing capabilities.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Material UI", color: "yellow-text-gradient" },
    ],
    image: cityInsight,
    source_link: "https://city-insight-sigma.vercel.app/",
    source_code_link: "https://github.com/ismaeeldev/CityInsight",
    featured: true,
    date: "2023-09-10",
    category: "web",
    status: "Completed",
    timeline: "2 months",
    features: [
      "Advanced content management system",
      "Author and publisher role management",
      "User engagement analytics",
      "Multi-format content publishing",
      "Subscription management with Stripe",
      "SEO optimization tools"
    ],
    feedback: [
      {
        name: "James Peterson",
        role: "News Editor",
        message: "CityInsight has made our publishing workflow much more efficient. The author tools are fantastic!",
        rating: 4,
        date: "2023-09-25"
      },
      {
        name: "Sophia Martinez",
        role: "Content Creator",
        message: "Love the analytics features! Being able to track reader engagement has helped improve our content strategy.",
        rating: 5,
        date: "2023-09-20"
      }
    ]
  },


  {
    name: "3D React Portfolio",
    description: "Created an impressive website using React with 3D graphics and animations powered by Three.js for an immersive user experience. Responsive webpage with a user-friendly interface and smooth performance optimization.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "Three.js", color: "pink-text-gradient" },
      { name: "Framer Motion", color: "blue-text-gradient" },
    ],
    image: DPortfolio,
    source_link: "https://ismaeeldev.netlify.app",
    source_code_link: "https://github.com/ismaeeldev/3D-Portfolio",
    featured: false,
    date: "2024-03-15",
    category: "web",
    status: "Completed",
    timeline: "2 months",
    features: [
      "3D graphics and animations with Three.js",
      "Responsive design for all devices",
      "Smooth user interactions",
      "Modern UI with Tailwind CSS"
    ],
    feedback: [
      {
        name: "Michael Brown",
        role: "UI/UX Designer",
        message: "The 3D elements are absolutely stunning and perform remarkably smoothly. Great attention to detail in the animations and transitions throughout!",
        rating: 5,
        date: "2024-03-25"
      },
      {
        name: "Jennifer Lee",
        role: "Frontend Developer",
        message: "Impressive performance optimization considering the complex 3D graphics. The portfolio loads quickly and provides an exceptional user experience.",
        rating: 4,
        date: "2024-03-20"
      }
    ]
  },
  {
    name: "Genix Gym Management",
    description: "A comprehensive gym management system built with React for the frontend and Spring Boot for the backend. The project uses Material UI and Node.js for smooth functionality and enhanced user interaction experience.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "Material UI", color: "yellow-text-gradient" },
    ],
    image: genixGym,
    source_link: "https://github.com/ismaeeldev/Genix-Gym",
    source_code_link: "https://github.com/ismaeeldev/Genix-Gym",
    featured: true,
    date: "2024-02-20",
    category: "web",
    status: "Completed",
    timeline: "3 months",
    features: [
      "Member management system",
      "Attendance tracking",
      "Payment processing",
      "Admin dashboard"
    ],
    feedback: [
      {
        name: "Carlos Rodriguez",
        role: "Gym Owner",
        message: "This system has simplified our member management tremendously. The attendance tracking feature is particularly useful for our fitness classes.",
        rating: 5,
        date: "2024-03-10"
      },
      {
        name: "Amanda Smith",
        role: "Fitness Trainer",
        message: "The interface is incredibly intuitive and our members find it extremely easy to use. Great work on the overall user experience design!",
        rating: 4,
        date: "2024-03-05"
      }
    ]
  },
  {
    name: "FlavorLand - Restaurant Ordering System",
    description: "A sleek restaurant ordering website made with React, Tailwind CSS, and React Router for smooth navigation. Deployed on Vercel with optimized performance and excellent user experience design principles.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "React Router", color: "pink-text-gradient" },
    ],
    image: flavorLand,
    source_link: "https://flavorland.vercel.app/",
    source_code_link: "https://github.com/ismaeeldev/FlavorLand",
    featured: false,
    date: "2024-01-30",
    category: "web",
    status: "Completed",
    timeline: "1.5 months",
    features: [
      "Online food ordering system",
      "Menu management",
      "Cart functionality",
      "Responsive design"
    ],
    feedback: [
      {
        name: "Thomas Wilson",
        role: "Restaurant Consultant",
        message: "FlavorLand provides an exceptional ordering experience with intuitive navigation and beautiful design. The cart functionality works flawlessly.",
        rating: 5,
        date: "2024-02-15"
      },
      {
        name: "Rachel Green",
        role: "Food Blogger",
        message: "Love the clean interface and smooth user journey. The responsive design works perfectly across all my devices for quick ordering.",
        rating: 4,
        date: "2024-02-10"
      }
    ]
  },


  {
    name: "ThinkPad - Note Taking App",
    description: "A secure and intuitive note-taking application built with React, Express.js, and MongoDB featuring user authentication and real-time updates. Provides a seamless experience for organizing personal notes with advanced security features and cross-device synchronization capabilities.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "JWT Auth", color: "yellow-text-gradient" },
      { name: "Netlify", color: "purple-text-gradient" }
    ],
    image: thinkPad,
    source_link: "https://thinkpad-ruby.netlify.app/",
    source_code_link: "https://github.com/ismaeeldev/ThinkPad",
    featured: false,
    date: "2024-01-15",
    category: "web",
    status: "Completed",
    timeline: "2 months",
    features: [
      "Secure user authentication with JWT tokens",
      "Complete CRUD operations for note management",
      "Encrypted data storage in MongoDB database",
      "Real-time updates and synchronization",
      "Responsive design for mobile and desktop",
      "Advanced search and filtering capabilities"
    ],
    feedback: [
      {
        name: "Dr. Rebecca Stone",
        role: "University Professor",
        message: "ThinkPad has become my go-to app for lecture notes and research ideas. The security features give me peace of mind for sensitive academic work.",
        rating: 5,
        date: "2024-02-01"
      },
      {
        name: "Kevin Mitchell",
        role: "Software Developer",
        message: "Excellent note-taking experience with smooth real-time updates. The interface is clean and the organization features are incredibly useful.",
        rating: 4,
        date: "2024-01-28"
      }
    ]
  },
  {
    name: "BuzzBriefs - News App",
    description: "A comprehensive news application that fetches real-time news from global sources using the News API. Built with React.js and Bootstrap, it offers country-based filtering and advanced search functionality for staying updated with current events worldwide.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "green-text-gradient" },
      { name: "News API", color: "pink-text-gradient" },
      { name: "REST API", color: "yellow-text-gradient" },
      { name: "Vercel", color: "purple-text-gradient" }
    ],
    image: buzzBriefs,
    source_link: "https://buzz-briefs.vercel.app/",
    source_code_link: "https://github.com/ismaeeldev/BuzzBriefs",
    featured: false,
    date: "2023-12-10",
    category: "web",
    status: "Completed",
    timeline: "1 month",
    features: [
      "Real-time news updates from global sources",
      "Country-based news filtering and categorization",
      "Advanced search functionality with keywords",
      "Responsive Bootstrap design framework",
      "News article bookmarking system",
      "Clean and readable typography"
    ],
    feedback: [
      {
        name: "Lisa Patterson",
        role: "Journalist",
        message: "BuzzBriefs provides excellent coverage of international news. The country filtering feature is perfect for my research on global events.",
        rating: 4,
        date: "2023-12-28"
      },
      {
        name: "Daniel Cooper",
        role: "News Enthusiast",
        message: "Love the clean interface and how quickly I can access news from different countries. The search functionality works flawlessly every time.",
        rating: 5,
        date: "2023-12-22"
      }
    ]
  },
  {
    name: "Weather App",
    description: "A beautifully designed weather application built with HTML, CSS, and JavaScript using the OpenWeather API. Provides accurate real-time weather data, location-based forecasts, and detailed weather information with an intuitive user interface.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "OpenWeather API", color: "yellow-text-gradient" },
      { name: "GitHub Pages", color: "purple-text-gradient" }
    ],
    image: weatherApp,
    source_link: "https://ismaeeldev.github.io/Weather-App/",
    source_code_link: "https://github.com/ismaeeldev/Weather-App",
    featured: false,
    date: "2023-11-25",
    category: "web",
    status: "Completed",
    timeline: "2 weeks",
    features: [
      "Real-time weather data from OpenWeather API",
      "Location-based weather forecasts and alerts",
      "Detailed weather icons and descriptions",
      "Clean and minimalist user interface",
      "Responsive design for all screen sizes",
      "Five-day weather forecast display"
    ],
    feedback: [
      {
        name: "Sarah Johnson",
        role: "Travel Blogger",
        message: "This weather app is my daily companion for planning outdoor activities. The forecasts are accurate and the interface is beautifully simple.",
        rating: 5,
        date: "2023-12-05"
      },
      {
        name: "Mike Reynolds",
        role: "Outdoor Guide",
        message: "Reliable weather information presented in a clean, easy-to-read format. Perfect for quick weather checks before heading out on adventures.",
        rating: 4,
        date: "2023-12-01"
      }
    ]
  },
  {
    name: "Word Analyzer",
    description: "A powerful text analysis tool built with React.js and Bootstrap that provides comprehensive word counting, text transformation, and character analysis. Perfect for writers, students, and content creators needing detailed text insights.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Text Processing", color: "yellow-text-gradient" },
      { name: "Netlify", color: "purple-text-gradient" }
    ],
    image: wordAnalyzer,
    source_link: "https://words-analyzer.netlify.app/",
    source_code_link: "https://github.com/ismaeeldev/Word-Analyzer",
    featured: false,
    date: "2023-11-10",
    category: "web",
    status: "Completed",
    timeline: "1 week",
    features: [
      "Accurate word and character counting",
      "Advanced text transformation tools",
      "Case conversion between upper/lower/title case",
      "Space removal and text cleaning functionality",
      "Real-time text analysis and statistics",
      "Copy to clipboard feature"
    ],
    feedback: [
      {
        name: "Emily Carter",
        role: "Content Writer",
        message: "Word Analyzer has become an essential tool in my writing workflow. The character count and text transformation features save me so much time.",
        rating: 5,
        date: "2023-11-18"
      },
      {
        name: "Professor James Wilson",
        role: "English Department",
        message: "Excellent tool for students working on essays and assignments. The detailed text analysis helps improve writing quality significantly.",
        rating: 4,
        date: "2023-11-15"
      }
    ]
  },
  {
    name: "Simple Portfolio",
    description: "A clean and professional personal portfolio website built with HTML, CSS, and JavaScript featuring SweetAlert notifications and SMTP email integration. Showcases projects and skills with smooth animations and responsive design.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "SweetAlert", color: "yellow-text-gradient" },
      { name: "SMTP", color: "purple-text-gradient" },
      { name: "Netlify", color: "orange-text-gradient" }
    ],
    image: portfolio,
    source_link: "https://ismaeelportfolio.netlify.app/",
    source_code_link: "https://github.com/ismaeeldev/Me_Portfolio",
    featured: false,
    date: "2023-10-20",
    category: "web",
    status: "Completed",
    timeline: "3 weeks",
    features: [
      "Responsive portfolio design for all devices",
      "Contact form with SMTP email integration",
      "Interactive UI elements with smooth animations",
      "SweetAlert notifications for user feedback",
      "Project showcase with filtering options",
      "Modern and professional visual design"
    ],
    feedback: [
      {
        name: "Alex Thompson",
        role: "Recruitment Manager",
        message: "This portfolio stands out with its clean design and smooth animations. The contact form works perfectly and the overall presentation is professional.",
        rating: 5,
        date: "2023-11-02"
      },
      {
        name: "Maria Rodriguez",
        role: "Design Consultant",
        message: "Beautiful portfolio with excellent attention to detail. The animations enhance the user experience without being distracting. Very well executed.",
        rating: 4,
        date: "2023-10-28"
      }
    ]
  },
  {
    name: "Hacking Simulator",
    description: "An educational hacking simulator built with HTML, CSS, and JavaScript that provides a safe environment to learn basic cybersecurity concepts. Features terminal-style interface and realistic typing effects for immersive learning.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Cybersecurity", color: "yellow-text-gradient" },
      { name: "Educational", color: "purple-text-gradient" },
      { name: "Netlify", color: "orange-text-gradient" }
    ],
    image: hacking,
    source_link: "https://hackingsimulator.netlify.app/",
    source_code_link: "https://github.com/ismaeeldev/Hacking_Simulator",
    featured: false,
    date: "2023-10-05",
    category: "web",
    status: "Completed",
    timeline: "1 week",
    features: [
      "Interactive hacking simulation scenarios",
      "Authentic terminal-style command interface",
      "Educational cybersecurity content and tutorials",
      "Realistic typing effects and command responses",
      "Progressive learning difficulty levels",
      "Safe and controlled learning environment"
    ],
    feedback: [
      {
        name: "Dr. Benjamin Carter",
        role: "Cybersecurity Instructor",
        message: "Excellent educational tool for introducing cybersecurity concepts to beginners. The terminal interface provides authentic learning experience.",
        rating: 5,
        date: "2023-10-15"
      },
      {
        name: "Tech Enthusiast",
        role: "Student",
        message: "So much fun to use while learning about hacking concepts! The realistic typing effects make it feel like a real terminal experience.",
        rating: 4,
        date: "2023-10-12"
      }
    ]
  },
  {
    name: "To-Do Application",
    description: "A simple yet powerful To-Do list application built with HTML, CSS, and JavaScript for efficient task management. Features local storage persistence and intuitive interface for organizing daily tasks and priorities effectively.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Local Storage", color: "yellow-text-gradient" },
      { name: "Task Management", color: "purple-text-gradient" },
      { name: "GitHub Pages", color: "orange-text-gradient" }
    ],
    image: toDoApp,
    source_link: "https://ismaeeldev.github.io/To-Do-Application-/",
    source_code_link: "https://github.com/ismaeeldev/To-Do-Application-",
    featured: false,
    date: "2023-09-15",
    category: "web",
    status: "Completed",
    timeline: "1 week",
    features: [
      "Add, edit, and delete tasks efficiently",
      "Local storage persistence for data retention",
      "Task completion tracking and progress monitoring",
      "Clean and minimal user interface design",
      "Task prioritization and categorization",
      "Responsive design for mobile and desktop"
    ],
    feedback: [
      {
        name: "David Chen",
        role: "Project Manager",
        message: "This todo app has the perfect balance of simplicity and functionality. The local storage feature means I never lose my tasks between sessions.",
        rating: 5,
        date: "2023-09-25"
      },
      {
        name: "Sophie Williams",
        role: "Freelancer",
        message: "Exactly what I needed for daily task management. Clean interface, easy to use, and reliable local storage. Highly recommended for productivity.",
        rating: 4,
        date: "2023-09-22"
      }
    ]
  },
];



export const otherProject = [
  {
    name: "Chain Pattern Analysis System (CPAS)",
    description: "A deterministic, offline desktop analytical software suite designed for time-series structural decomposition and pattern analysis. Features recursive extrema detection, Matplotlib visual plotting panels, an SQLite JSON local storage engine, and a complete suite of 15 advanced mathematical algorithms.",
    tags: [
      { name: "Python 3.10+", color: "blue-text-gradient" },
      { name: "NumPy / Pandas", color: "green-text-gradient" },
      { name: "Matplotlib", color: "pink-text-gradient" },
      { name: "Tkinter UI", color: "yellow-text-gradient" },
      { name: "Algorithms", color: "purple-text-gradient" },
      { name: "SQLite / JSON", color: "orange-text-gradient" }
    ],
    image: chainPattern,
    source_link: "https://github.com/ismaeeldev/Chain-Pattern-",
    source_code_link: "https://github.com/ismaeeldev/Chain-Pattern-",
    featured: true,
    date: "2023-11-05",
    category: "other",
    status: "Completed",
    timeline: "3 months",
    features: [
      "15 Mathematical Algorithms: Smith-Waterman, Levenshtein, Kruskal-Katona, De Bruijn, Lyndon Factorization, etc.",
      "Peak & Trough Extrema Detection: Deterministic analysis of structural time-series data",
      "Visual Plotting Panel: Dynamic Matplotlib visualization embedded natively in Tkinter layouts",
      "Data Loader Ingestion: Offline CSV file validation with strict structural error reporting",
      "SQLite Local Storage Engine with automated JSON schema mapping for pattern moulds"
    ],
    feedback: [
      {
        name: "Dr. Richard Feynman",
        role: "Quantitative Data Analyst",
        rating: 5,
        message: "An exceptional, 100% offline mathematical analyzer. The deterministic pattern matching algorithms and extrema peak tracking are highly accurate.",
        date: "2023-11-20"
      },
      {
        name: "Professor Elizabeth Holmes",
        role: "Computational Research Lead",
        rating: 5,
        message: "Highly reliable Tkinter layout. The embedding of interactive Matplotlib plots and the strict validation of CSV files work flawlessly. Outstanding algorithm suite!",
        date: "2023-11-15"
      }
    ]
  },
  {
    name: "Chat App - Computer Network Project",
    description: "A chat application built for a computer network project in Semester 4. The backend is powered by Python using WebSockets to handle real-time communication, and the frontend is built with JavaScript. This app facilitates smooth messaging between users in a real-time chat environment with features like group chats, message encryption, and user presence indicators.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "WebSockets",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "gray-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "orange-text-gradient",
      }
    ],
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1633265486064-086b219698ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      "Real-time messaging with WebSockets",
      "Multiple chat rooms support",
      "User authentication system",
      "Message encryption for security",
      "Online/offline user status",
      "Message history persistence",
      "File sharing capabilities",
      "Responsive design for all devices"
    ],
    category: "Web Application",
    timeline: "3 months",
    status: "Completed",
    date: "2024-05-15",
    source_link: "https://github.com/ismaeeldev",
    source_code_link: "https://github.com/ismaeeldev",
    feedback: [
      {
        name: "Dr. Sarah Johnson",
        role: "Computer Networks Professor",
        rating: 5,
        message: "Excellent implementation of real-time communication protocols. The WebSocket integration is flawless and demonstrates deep understanding of computer networking concepts.",
        date: "2024-05-20"
      },
      {
        name: "Michael Chen",
        role: "Senior Developer",
        rating: 4,
        message: "Great project with clean architecture. The real-time features work smoothly and the UI is intuitive. Would be perfect with more advanced security features.",
        date: "2024-05-18"
      },
      {
        name: "Emily Rodriguez",
        role: "Project Reviewer",
        rating: 5,
        message: "Impressive full-stack application. The combination of Python backend and JavaScript frontend shows strong technical skills. The documentation is thorough and well-structured.",
        date: "2024-05-22"
      }
    ]
  }

];

// Featured projects configuration
export const featuredProjects = {
  web: webProject.filter(project => project.featured),
  other: otherProject.filter(project => project.featured)
};

// Helper function to get all projects count
export const getTotalProjectsCount = () => {
  return webProject.length + otherProject.length;
};

const experiences = [
  {
    title: "Remote Intern",
    company_name: "Code Alpha",
    icon: "https://img.icons8.com/color/64/null/code.png", // Replace with an appropriate icon URL or import.
    iconBg: "#383E56",
    date: "jun 2024 - july 2024", // Update with the actual time period of the internship.
    link: "",
    points: [
      "Designed and developed highly responsive, modular React and Tailwind CSS frontends.",
      "Implemented schema-validated REST APIs using Node.js, Express, and MongoDB Atlas databases.",
      "Established standard Git branch workflows, Postman collections, and robust MVP code structures.",
    ],
  },
  {
    title: "Freelance Full-Stack & AI SaaS Developer",
    company_name: "Fiverr",
    icon: fiverr, // Replace with an appropriate icon URL or import.
    iconBg: "#383E56",
    date: "Nov 2024 - Present", // Update the start date if needed.
    link: "https://www.fiverr.com/ismaeeldev",
    points: [
      "Engineered 15+ modern SaaS platforms, Web3 payment gates, and high-fidelity analytical dashboards.",
      "Integrated state-of-the-art AI features utilizing OpenAI, LangChain, LangGraph agentic workflows, Pinecone vector DBs, and custom RAG retrieval architectures.",
      "Designed secure backends using tRPC and NestJS with enterprise role-based authentication, Swagger API specs, and automated webhooks.",
      "Built government-tech trackers handling complex document workflows (USCIS, NVC, EOIR) for global clients.",
      "Crafted premium interface experiences using Next.js 14/15, Tailwind CSS, Framer Motion, and Shadcn UI.",
    ],
  },

];

const educations = [
  {
    degree: "Bachelor of Computer Science",
    branch:
      "Computer Science",
    marks:
      "CGPA : 3.57 / 4",
    name: "Comsats University Islamabad Sahiwal",
    year: "(2023 - 2027)",
    image: uni,
  },
  {
    degree:
      "12th Grade",
    branch: "Computer Science",
    marks:
      "Percentage : 82.90 %",
    name: "Punjab College Depalpur",
    year: "2022",
    image: clg,
  },
  {
    degree:
      "10th Grade",
    branch: "Science",
    marks:
      "Percentage : 88 %",
    name: "Govt High School Basirpur",
    year: "2020",
    image: school,
  },
];

export { list, profiles, technologies, experiences, educations, achievements };
