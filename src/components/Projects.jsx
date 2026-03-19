import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";

export default function Projects() {

  const projects = [
    {
      title: "Sentiment Analysis",
      desc: "A machine learning project that analyzes tweets...",
      image: p1,
      tags: ["Python","NLTK","Scikit-learn","Pandas","Matplotlib","Seaborn"],
      link: "https://sentimentanalysis6.streamlit.app/",
      github: "https://github.com/harshsharma004/sentiment-analysis",
    },
    {
      title: "Dementia Detector",
      desc: "A machine learning based NLP project...",
      image: p2,
      tags: ["Python","NLTK","Scikit-Learn","XGBoost"],
      github: "https://github.com/harshsharma004/Dementia_detector",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 bg-white dark:bg-black overflow-hidden"
    >

      {/* glow */}
      <div className="absolute top-10 left-20 w-[400px] h-[400px] bg-yellow-300/30 dark:bg-yellow-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-green-300/20 dark:bg-green-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADING */}

        <motion.div
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:false }}
        >

          <p className="text-primary tracking-widest mb-2">
            FEATURED WORK
          </p>

          <h2 className="text-6xl font-bold mb-16 text-black dark:text-white">
            Projects
          </h2>

        </motion.div>


        {/* GRID */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false }}
          variants={{
            hidden:{},
            visible:{
              transition:{ staggerChildren:0.2 }
            }
          }}
          className="grid md:grid-cols-2 gap-10"
        >

          {projects.map((project, i) => (

            <motion.div
              key={i}
              variants={{
                hidden:{ opacity:0, y:80, scale:0.95 },
                visible:{ opacity:1, y:0, scale:1 }
              }}
            >

              <Tilt
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                glareEnable={true}
                glareMaxOpacity={0.15}
                scale={1.03}
              >

                <motion.div
                  whileHover={{ y:-10 }}
                  className="rounded-2xl overflow-hidden
                  bg-white/60 dark:bg-white/5
                  backdrop-blur-xl
                  border border-gray-200 dark:border-white/10
                  shadow-xl
                  transition"
                >

                  {/* IMAGE */}

                  <div className="relative overflow-hidden group">

                    <img
                      src={project.image}
                      className="w-full h-64 object-cover
                      transition-transform duration-500
                      group-hover:scale-110"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition"></div>

                    <span className="absolute bottom-4 right-6 text-6xl font-bold text-white/70">
                      0{i + 1}
                    </span>

                  </div>

                  {/* CONTENT */}

                  <div className="p-6">

                    <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {project.desc}
                    </p>

                    {/* TAGS */}

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, j) => (
                        <motion.span
                          key={j}
                          whileHover={{ scale:1.1 }}
                          className="px-3 py-1 text-xs rounded-full
                          bg-black/5 dark:bg-white/10
                          border border-gray-200 dark:border-white/10"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* BUTTONS */}

                    <div className="flex justify-between items-center">

                      <motion.a
                        whileHover={{ x:5 }}
                        href={project.link}
                        className="text-primary font-medium"
                      >
                        Case Study →
                      </motion.a>

                      <div className="flex gap-3">

                        <motion.a
                          whileHover={{ scale:1.3, rotate:5 }}
                          href={project.github}
                          className="p-2 rounded-lg
                          bg-black/5 dark:bg-white/10
                          hover:bg-primary hover:text-white transition"
                        >
                          <FaGithub />
                        </motion.a>

                        <motion.a
                          whileHover={{ scale:1.3, rotate:-5 }}
                          href={project.link}
                          className="p-2 rounded-lg
                          bg-black/5 dark:bg-white/10
                          hover:bg-primary hover:text-white transition"
                        >
                          <FaExternalLinkAlt />
                        </motion.a>

                      </div>

                    </div>

                  </div>

                </motion.div>

              </Tilt>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}