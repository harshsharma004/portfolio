import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Footer(){

return(

<footer className="relative py-12

bg-gray-50
dark:bg-black

border-t
border-gray-200
dark:border-white/10
">

<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">


{/* LEFT */}

<h2 className="text-xl font-bold

text-gray-900
dark:text-white

bg-gradient-to-r from-orange-400 to-red-500
bg-clip-text text-transparent
">

HARSH

</h2>


{/* CENTER */}

<p className="text-gray-600 dark:text-gray-400 text-sm text-center">

© {new Date().getFullYear()} Harsh. Built with React & Tailwind.

</p>


{/* RIGHT SOCIAL */}

<div className="flex items-center gap-5">

<motion.a
whileHover={{scale:1.3,y:-4}}
href="https://www.linkedin.com/in/harsh-sharma-4b5947324/"

className="p-3 rounded-full

bg-gray-200
dark:bg-white/10

text-gray-800
dark:text-white

hover:bg-primary
hover:text-white

transition"
>

<FaLinkedin/>

</motion.a>


<motion.a
whileHover={{scale:1.3,y:-4}}
href="https://github.com/harshsharma004"

className="p-3 rounded-full

bg-gray-200
dark:bg-white/10

text-gray-800
dark:text-white

hover:bg-primary
hover:text-white

transition"
>

<FaGithub/>

</motion.a>


{/* BACK TO TOP */}

<motion.a
whileHover={{scale:1.2}}
href="#home"

className="p-3 rounded-full

bg-gray-200
dark:bg-white/10

text-gray-800
dark:text-white

hover:bg-primary
hover:text-white

transition"
>

<FaArrowUp/>

</motion.a>

</div>

</div>

</footer>

)

}