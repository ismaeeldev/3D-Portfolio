import {
  javascript, html, css, reactjs, tailwind, nodejs, mongodb, git, threejs,
  hf, bny, holopin,
  clg, school, uni,
  DPortfolio, buzzBriefs, flavorLand, genixGym, hacking, thinkPad, portfolio, toDoApp, weatherApp, wordAnalyzer, chatApp, fiverr
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
    title: "Successfully completed a one-month remote internship at Code Alpha, gaining hands-on experience in scalable project implementations (2024).",
  },
  {
    title: "Launched 'ThinkPad,' a secure note-taking application, featuring authentication, responsive design, and deployment on MongoDB Atlas and Vercel (2024).",
  },
  {
    title: "Built a modern news website, 'BuzzBriefs,' leveraging React.js, Vite, and Tailwind CSS to deliver tailored and fast updates (2024).",
  },
  {
    title: "Started freelancing on Fiverr, providing scalable and efficient development solutions to clients globally (2024).",
  },
  {
    title: "Learning data structures and algorithms to crack opportunities at top tech companies like Google and Amazon (2024).",
  },
  {
    title: "Developed a restaurant website, 'Flavour Land,' showcasing a dynamic menu with filtering and responsive design (2024).",
  },
  {
    title: "Exploring circular linked lists and other advanced concepts in C++, focusing on beginner-friendly implementations (2024).",
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
    name: "3D React Portfolio",
    description:
      "Created an impressive website using React with 3D graphics and animations powered by Three.js for an immersive user experience. Responsive webpage with a user-friendly interface.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: DPortfolio,
    source_link: "https://ismaeeldev.netlify.app",
    source_code_link: "https://github.com/ismaeeldev/3D-Portfolio",
  },
  {
    name: "Genix Gym Management",
    description:
      "A gym management system built with React for the frontend and Spring Boot for the backend. The project uses Material UI and Node.js for smooth functionality and user interaction.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "yellow-text-gradient",
      },
    ],
    image: genixGym, // Replace with appropriate image
    source_link: "https://github.com/ismaeeldev/Genix-Gym", // Add project link
    source_code_link: "https://github.com/ismaeeldev/Genix-Gym", // Add GitHub link
  },
  {
    name: "FlavorLand - Restaurant Ordering System",
    description:
      "A sleek restaurant ordering website made with React, Tailwind CSS, and React Router for smooth navigation. Deployed on Vercel.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "React Router",
        color: "pink-text-gradient",
      },
    ],
    image: flavorLand, // Replace with appropriate image
    source_link: "https://flavorland.vercel.app/", // Add project link
    source_code_link: "https://github.com/ismaeeldev/FlavorLand", // Add GitHub link
  },
  {
    name: "ThinkPad - Note Taking App",
    description:
      "A secure note-taking app built with React, Express.js, and MongoDB. Features user login and security. Deployed on Netlify.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: thinkPad, // Replace with appropriate image
    source_link: "https://thinkpad-ruby.netlify.app/", // Add project link
    source_code_link: "https://github.com/ismaeeldev/ThinkPad", // Add GitHub link
  },

  {
    name: "BuzzBriefs - News App",
    description:
      "A news application that fetches the latest news from different countries using the News API. Built with React.js and Bootstrap. Deployed on Vercel.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "News API",
        color: "pink-text-gradient",
      },
    ],
    image: buzzBriefs, // Replace with appropriate image
    source_link: "https://buzz-briefs.vercel.app/", // Add project link
    source_code_link: "https://github.com/ismaeeldev/BuzzBriefs", // Add GitHub link
  },
  {
    name: "Weather App",
    description:
      "A simple weather app built with HTML, CSS, and JavaScript using the OpenWeather API. Deployed on GitHub Pages.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: weatherApp, // Replace with appropriate image
    source_link: "https://ismaeeldev.github.io/Weather-App/", // Add project link
    source_code_link: "https://github.com/ismaeeldev/Weather-App", // Add GitHub link
  },
  {
    name: "Word Analyzer",
    description:
      "A word analyzer built with React.js and Bootstrap to count words, remove spaces, and toggle case. Deployed on Netlify.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: wordAnalyzer, // Replace with appropriate image
    source_link: "https://words-analyzer.netlify.app/", // Add project link
    source_code_link: "https://github.com/ismaeeldev/Word-Analyzer", // Add GitHub link
  },
  {
    name: "Simple Portfolio",
    description:
      "A simple personal portfolio website built with HTML, CSS, and JavaScript. Alerts using SweetAlert and email integration with SMTP. Deployed on Netlify.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio, // Replace with appropriate image
    source_link: "https://ismaeelportfolio.netlify.app/", // Add project link
    source_code_link: "https://github.com/ismaeeldev/Me_Portfolio", // Add GitHub link
  },
  {
    name: "Hacking Simulator",
    description:
      "A simple hacking simulator built with HTML, CSS, and JavaScript for educational purposes.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: hacking, // Replace with appropriate image
    source_link: "https://hackingsimulator.netlify.app/", // Add project link
    source_code_link: "https://github.com/ismaeeldev/Hacking_Simulator", // Add GitHub link
  },
  {
    name: "To-Do Application",
    description:
      "A simple To-Do list application built with HTML, CSS, and JavaScript to help with task management.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: toDoApp, // Replace with appropriate image
    source_link: "https://ismaeeldev.github.io/To-Do-Application-/", // Add project link
    source_code_link: "https://github.com/ismaeeldev/To-Do-Application-", // Add GitHub link
  },
];

export const otherProject = [
  {
    name: "Chat App - Computer Network Project",
    description:
      "A chat application built for a computer network project in Semester 4. The backend is powered by Python using WebSockets to handle real-time communication, and the frontend is built with JavaScript. This app facilitates smooth messaging between users in a real-time chat environment.",
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
    ],
    image: chatApp, // Replace with the appropriate image
    source_link: "https://yourusername.github.io/chat-app", // Add project link
    source_code_link: "https://github.com/yourusername/chat-app", // Add GitHub link
  },


];

const experiences = [
  {
    title: "Remote Intern",
    company_name: "Code Alpha",
    icon: "https://img.icons8.com/color/64/null/code.png", // Replace with an appropriate icon URL or import.
    iconBg: "#383E56",
    date: "jun 2024 - july 2024", // Update with the actual time period of the internship.
    link: "",
    points: [
      "Completed one-month remote internship focused on delivering impactful solutions.",
      "Worked on scalable and efficient project implementations.",
      "Gained experience in teamwork and remote collaboration.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Fiverr",
    icon: fiverr, // Replace with an appropriate icon URL or import.
    iconBg: "#383E56",
    date: "Nov 2024 - Present", // Update the start date if needed.
    link: "",
    points: [
      "Providing scalable development services to a diverse range of clients.",
      "Specializing in creating efficient, high-quality software solutions tailored to client needs.",
      "Maintaining a strong track record of customer satisfaction and timely project delivery.",
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
