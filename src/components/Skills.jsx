import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function Skills() {

  const cards = [
    {
      title: "Languages",
      desc: "Core programming languages for building robust applications",
      items: ["C++", "Python", "JavaScript"],
    },
    {
      title: "Frameworks and Libraries",
      desc: "Modern frameworks for fast, scalable web experiences",
      items: ["Reactjs","Node.js","GSAP","FastAPI","TensorFlow","NLTK"],
    },
    {
      title: "Databases & Cloud",
      desc: "Data management and cloud infrastructure solutions",
      items: ["MongoDB", "MySQL","Vercel"],
    },
    {
      title: "Developer Tools",
      desc: "Essential tools for modern development workflows",
      items: ["Git", "GitHub", "Figma"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 bg-white dark:bg-black overflow-hidden"
    >

      {/* GLOW */}
      <div className="absolute top-10 left-20 w-[400px] h-[400px] bg-yellow-300/30 dark:bg-yellow-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-green-300/20 dark:bg-green-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP */}

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

          {/* LEFT TEXT */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once:false, amount:0.3 }}
            variants={{
              hidden:{},
              visible:{ transition:{ staggerChildren:0.2 } }
            }}
          >

            <motion.p
              variants={{ hidden:{opacity:0,y:30}, visible:{opacity:1,y:0} }}
              className="text-primary tracking-widest mb-2"
            >
              EXPERTISE
            </motion.p>

            <motion.h2
              variants={{ hidden:{opacity:0,y:40}, visible:{opacity:1,y:0} }}
              className="text-6xl font-bold mb-6 text-black dark:text-white"
            >
              Skills
            </motion.h2>

            <motion.p
              variants={{ hidden:{opacity:0,y:40}, visible:{opacity:1,y:0} }}
              className="text-gray-600 dark:text-gray-400 mb-8 max-w-md"
            >
              A versatile skill set spanning from core programming fundamentals
              to modern web frameworks and cloud infrastructure.
            </motion.p>

          </motion.div>


          {/* ORBIT */}

          <motion.div
            initial={{ opacity:0, scale:0.5 }}
            whileInView={{ opacity:1, scale:1 }}
            transition={{ duration:0.8 }}
            viewport={{ once:false }}
            className="flex justify-center"
          >

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="relative w-72 h-72 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center"
            >

              <motion.div
                animate={{ y:[0,-10,0] }}
                transition={{ repeat:Infinity, duration:2 }}
                className="absolute top-0 text-primary text-2xl"
              >
                <FaReact />
              </motion.div>

              <motion.div
                animate={{ y:[0,10,0] }}
                transition={{ repeat:Infinity, duration:2 }}
                className="absolute bottom-0 text-yellow-500 text-2xl"
              >
                <FaJsSquare />
              </motion.div>

              <motion.div
                animate={{ x:[0,-10,0] }}
                transition={{ repeat:Infinity, duration:2 }}
                className="absolute left-0 text-blue-500 text-2xl"
              >
                <FaPython />
              </motion.div>

              <motion.div
                animate={{ x:[0,10,0] }}
                transition={{ repeat:Infinity, duration:2 }}
                className="absolute right-0 text-green-500 text-2xl"
              >
                <SiMongodb />
              </motion.div>

              <div className="absolute text-red-500 text-xl">&lt;/&gt;</div>

            </motion.div>

          </motion.div>

        </div>


        {/* CARDS */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
          variants={{
            hidden:{},
            visible:{ transition:{ staggerChildren:0.2 } }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >

          {cards.map((card, i) => (

            <motion.div
              key={i}
              variants={{
                hidden:{ opacity:0, y:80, scale:0.9 },
                visible:{ opacity:1, y:0, scale:1 }
              }}
              whileHover={{ scale:1.07 }}
              className="relative p-8 rounded-2xl

              bg-white/60 dark:bg-white/5
              backdrop-blur-xl

              border border-gray-200 dark:border-white/10
              shadow-lg

              transition-all duration-300

              hover:shadow-[0_0_30px_rgba(255,120,0,0.4)]
              hover:border-orange-400/40
              hover:-translate-y-2
              "
            >

              {/* NUMBER FIXED */}

              <span className="absolute -top-6 -right-2
              text-6xl font-bold
              text-gray-200 dark:text-white/10
              pointer-events-none select-none">

                {`0${i + 1}`}

              </span>

              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                {card.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                {card.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {card.items.map((item, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale:1.1 }}
                    className="px-3 py-1 text-sm rounded-full

                    bg-black/5
                    dark:bg-white/10

                    border border-gray-200
                    dark:border-white/10
                    "
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}