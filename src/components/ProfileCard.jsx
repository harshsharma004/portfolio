import profile from "../assets/profile.png"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"
import OrbitIcons from "./OrbitIcons"

export default function ProfileCard(){

return(

<div className="relative flex flex-col items-center gap-6">

{/* orbit icons */}

<OrbitIcons/>

{/* glow */}

<div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>

{/* rotating ring */}

<motion.div
animate={{rotate:360}}
transition={{repeat:Infinity,duration:30,ease:"linear"}}
className="absolute w-72 h-72 border border-primary/30 rounded-full"
/>

{/* profile image */}

<motion.img
whileHover={{scale:1.18,rotate:2}}
src={profile}
className="relative w-60 h-60 object-cover rounded-full border-4 border-primary shadow-2xl"
/>

{/* social icons */}

<div className="flex gap-6 text-2xl mt-8 relative z-10">

<motion.a
whileHover={{scale:1.2,y:-5}}
whileTap={{scale:0.9}}
href="https://github.com/"
target="_blank"
className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white shadow-md"
>

<FaGithub/>

</motion.a>

<motion.a
whileHover={{scale:1.2,y:-5}}
whileTap={{scale:0.9}}
href="https://linkedin.com/"
target="_blank"
className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white shadow-md"
>

<FaLinkedin/>

</motion.a>

</div>

</div>

)

}