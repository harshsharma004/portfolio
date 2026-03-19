import { useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80; // adjust if needed

      const y =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setMenu(false);
  };
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  function toggleTheme() {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <nav
      className="fixed top-4  left-1/2 -translate-x-1/2 z-50

w-[92%] max-w-6xl

flex items-center justify-between

bg-white/80
dark:bg-black/70

backdrop-blur-xl

border border-gray-200
dark:border-white/10

shadow-md
dark:shadow-[0_0_20px_rgba(255,120,0,0.25)]

rounded-full

px-6 py-3"
    >
      {/* LOGO */}

      <h1
        className="font-bold text-lg

bg-gradient-to-r from-orange-400 to-red-500

bg-clip-text text-transparent"
      >
        HARSH
      </h1>

      {/* DESKTOP LINKS */}
      <ul className="hidden md:flex gap-8">

{links.map((link,i)=>(

<li
key={i}
onClick={() => scrollToSection(link.toLowerCase())}

className="relative group cursor-pointer

text-gray-700
dark:text-gray-200

font-medium

transition-all duration-300
hover:text-primary
hover:-translate-y-1
"

>

{link}

{/* 🔥 animated underline */}

<span className="absolute left-0 -bottom-1 w-0 h-[2px]

bg-gradient-to-r
from-orange-400
to-red-500

group-hover:w-full
transition-all duration-300
"/>

{/* 🔥 glow effect */}

<span className="absolute inset-0 opacity-0 group-hover:opacity-100

bg-orange-400/10
blur-lg

transition duration-300
- z-10
"/>

</li>

))}

</ul>
      

      {/* RIGHT SIDE */}

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full

bg-gray-200
dark:bg-white/10

text-gray-800
dark:text-white

hover:scale-110

transition"
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>

        {/* MOBILE MENU BUTTON */}

        <button
          className="md:hidden text-gray-800 dark:text-white"
          onClick={() => setMenu(!menu)}
        >
          <FaBars />
        </button>
      </div>

      {/* MOBILE MENU */}

      {menu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0

w-full

bg-white
dark:bg-black/90

border border-gray-200
dark:border-white/10

rounded-xl

p-6

flex flex-col gap-5

text-gray-700
dark:text-white"
        >
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(link.toLowerCase())}
              className="text-left cursor-pointer hover:text-primary transition"
            >
              {link}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
