import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo } from "../assets";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${scrolled ? "bg-primary/80 backdrop-blur-md border-b border-white/5 shadow-lg" : "bg-transparent border-b border-transparent"}`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-11 h-11 object-contain logo' />
          <p className='navbar-title text-[18px] font-black cursor-pointer'>
            Muhammad Ismaeel
          </p>
        </Link>

        <div className="flex gap-5">
          <a
            href="https://drive.google.com/file/d/1Q033WsbtXwZ-4XGvSaAakiipsQY2Ckao/view?usp=sharing"
            download="Ismaeel-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn border border-[#915EFF]/50 text-white px-5 py-2 rounded-full text-[14px] font-bold transition-all duration-300"
          >
            Resume
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar