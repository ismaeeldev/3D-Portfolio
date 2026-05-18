import { React, useState } from "react";
import { motion } from "framer-motion";
import "./Content.scss";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

const Content = () => {
  const [activeNav, setActiveNav] = useState("#");

  const navItems = [
    { id: "#", icon: <AiOutlineHome /> },
    { id: "#education", icon: <BiBook /> },
    { id: "#project", icon: <AiOutlineFundProjectionScreen /> },
    { id: "#experience", icon: <BsPersonWorkspace /> },
    { id: "#contact", icon: <MdMessage /> },
  ];

  return (
    <div className="nav">
      {navItems.map((item) => {
        const isActive = activeNav === item.id;
        return (
          <a
            key={item.id}
            href={item.id}
            onClick={() => setActiveNav(item.id)}
            className={`relative ${isActive ? "active" : ""}`}
          >
            {isActive && (
              <motion.span
                layoutId="activeNavIndicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 bg-[#915EFF] rounded-full z-[-1] shadow-[0_0_20px_rgba(145,94,255,0.5)]"
              />
            )}
            <span className="relative z-10 flex items-center justify-center">
              {item.icon}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default Content;