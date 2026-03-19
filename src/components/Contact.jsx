import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5vjk3le",
        "template_fmxlxaa",
        form.current,
        "N1PtO_xxWBXpDAjlB"
      )
      .then(() => {
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-white dark:bg-black overflow-hidden"
    >
      {/* glow */}
      <div className="absolute top-10 left-20 w-[450px] h-[450px] bg-orange-300/30 dark:bg-orange-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-[450px] h-[450px] bg-yellow-300/30 dark:bg-yellow-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary tracking-widest mb-2">GET IN TOUCH</p>

          <h2 className="text-5xl font-bold mb-16 text-gray-900 dark:text-white">
            Contact Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white"
            >
              Let's build something amazing 🚀
            </motion.h3>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-gray-600 dark:text-gray-400 mb-10 max-w-md"
            >
              Have a project idea or collaboration in mind? Feel free to reach
              out.
            </motion.p>

            {/* ICONS */}

            <div className="flex gap-6 relative z-10">
              {[
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/harsh-sharma-4b5947324/",
                },
                {
                  icon: <FaGithub />,
                  link: "https://github.com/harshsharma004",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.3, y: -8, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href={item.link}
                  className="
p-4 rounded-full
bg-gray-200 dark:bg-white/10
border border-gray-300 dark:border-white/10
text-gray-800 dark:text-white
hover:bg-primary hover:text-white
hover:shadow-xl hover:shadow-primary/40
transition
"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* FORM */}

          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="
relative p-10 rounded-2xl
bg-white/70 dark:bg-white/5
backdrop-blur-xl
border border-gray-200 dark:border-white/10
shadow-xl
"
          >
            {/* glow */}
            <div className="absolute inset-0 rounded-2xl 
bg-gradient-to-br from-orange-400/10 to-yellow-400/10 
blur-2xl pointer-events-none"></div>

            <div className="relative">
              {/* INPUTS */}

              {["user_name", "user_email"].map((name, i) => (
                <motion.input
                  key={i}
                  type={name === "user_email" ? "email" : "text"}
                  name={name}
                  placeholder={
                    name === "user_email" ? "Your Email" : "Your Name"
                  }
                  required
                  whileFocus={{ scale: 1.03 }}
                  className="w-full mb-5 p-4 rounded-lg
bg-gray-100 dark:bg-black
text-gray-900 dark:text-white
border border-gray-200 dark:border-white/10
focus:ring-2 focus:ring-primary outline-none"
                />
              ))}

              <motion.textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                whileFocus={{ scale: 1.03 }}
                className="w-full mb-6 p-4 rounded-lg
bg-gray-100 dark:bg-black
text-gray-900 dark:text-white
border border-gray-200 dark:border-white/10
focus:ring-2 focus:ring-primary outline-none"
              />

              {/* BUTTON */}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-full
bg-gradient-to-r from-orange-400 to-red-500
text-white font-semibold
shadow-lg hover:shadow-xl hover:shadow-primary/40
transition"
              >
                {sent ? "✓ Message Sent" : "Send Message"}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
