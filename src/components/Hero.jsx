import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedName from "./AnimatedName"
import ParallaxHero from "./ParallaxHero";
import ParticlesBackground from "./ParticlesBackground";
import MagneticButton from "./MagneticButton";
import OrbitParticles from "./OrbitParticles";

const scrollToProjects = () => {
  const section = document.getElementById("projects");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center
bg-white dark:bg-black overflow-hidden hero-grid"
    >
      <OrbitParticles x={0.8} y={0.25}/>
      <OrbitParticles x={0.2} y={0.75}/>
      <ParticlesBackground />

      <ParallaxHero />

      {/* glowing blobs */}

      <div
        data-speed="0.02"
        className="parallax absolute top-20 left-10 w-72 h-72 bg-orange-400/20 blur-3xl rounded-full"
      />

      <div
        data-speed="0.03"
        className="parallax absolute bottom-20 right-10 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"
      />

      {/* HERO CONTENT */}

      <div
        data-speed="0.06"
        className="parallax hero-content text-center relative z-10"
      >
        <p className="tracking-widest text-4xl text-gray-500 mb-4">HELLO I'M</p>
        
        <AnimatedName/>

        <div className="text-xl
sm:text-2xl
md:text-3xl

text-primary
font-bold

mt-4">
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "DSA Enthusiast",
              2000,
            ]}
            repeat={Infinity}
          />
        </div>

        <p className="mt-4

text-sm
sm:text-base

max-w-[280px]
sm:max-w-md

mx-auto

text-gray-600
dark:text-gray-400">
          Pre-final year student passionate about building modern web
          applications and solving algorithmic challenges.
        </p>

        {/* BUTTONS */}

        <div className="flex flex-col
sm:flex-row

gap-4

justify-center

mt-8">
          <div onClick={scrollToProjects}>
            <MagneticButton>See My Work</MagneticButton>
          </div>
          <a 
href="/resume"

rel="noopener noreferrer"
>
  <MagneticButton>Resume</MagneticButton>
</a>
        </div>

        {/* SOCIAL */}

        <div className="flex justify-center gap-6

mt-8

text-lg">

          <motion.a
          href="https://www.linkedin.com/in/harsh-sharma-4b5947324/"
          target="_blank"
          rel="noopener noreferrer"
            whileHover={{ scale: 1.3, y: -4 }}
            
            className="p-4 rounded-full bg-black/5 dark:bg-white/10"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
          href="https://github.com/harshsharma004"
          target="_blank"
          rel="noopener noreferrer"
            whileHover={{ scale: 1.3, y: -4 }}
            className="p-4 rounded-full bg-black/5 dark:bg-white/10"
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
