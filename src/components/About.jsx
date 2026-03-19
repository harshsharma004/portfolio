import { motion } from "framer-motion"
import profile from "../assets/profile.png"

export default function About(){

return(

<section
id="about"
className="relative py-32 bg-white dark:bg-black overflow-hidden"
>

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

{/* LEFT IMAGE */}

<motion.div

initial={{ opacity:0, x:-150 }}
whileInView={{ opacity:1, x:0 }}

transition={{ duration:1 }}

viewport={{ once:false, amount:0.3 }}

className="flex justify-center"
>

<img
src={profile}
className="w-[380px] h-[480px] object-cover rounded-2xl shadow-xl"
/>

</motion.div>


{/* RIGHT TEXT */}

<motion.div

initial="hidden"
whileInView="visible"

viewport={{ once:false, amount:0.3 }}

variants={{
hidden:{},
visible:{
transition:{ staggerChildren:0.25 }
}
}}

>

<motion.p
variants={{
hidden:{ opacity:0, y:50 },
visible:{ opacity:1, y:0 }
}}
className="text-primary mb-3"
>
WHO I AM
</motion.p>

<motion.h2
variants={{
hidden:{ opacity:0, y:60 },
visible:{ opacity:1, y:0 }
}}
className="text-5xl font-bold mb-6 text-black dark:text-white"
>
About Me
</motion.h2>

<motion.h3
variants={{
hidden:{ opacity:0, y:60 },
visible:{ opacity:1, y:0 }
}}
className="text-2xl mb-6 text-gray-800 dark:text-gray-200"
>
I build scalable web applications and AI-powered solutions.
</motion.h3>

<motion.p
variants={{
hidden:{ opacity:0, y:80 },
visible:{ opacity:1, y:0 }
}}
className="text-gray-600 dark:text-gray-400 mb-6"
>

Hi, I’m Harsh Sharma, a developer passionate about Machine Learning and software development. I enjoy building real-world projects and exploring new technologies.

I have worked on projects like a Dementia Detection system and a Sentiment Analysis model, and I regularly practice coding to improve my problem-solving skills.

I’m always eager to learn and grow in the field of technology.

</motion.p>
<motion.div
variants={{
hidden:{ opacity:0 },
visible:{ opacity:1 }
}}

className="flex flex-wrap gap-3 mb-8"
>

<motion.span

whileHover={{ scale:1.1 }}
transition={{ duration:0.2 }}

className="px-4 py-2 text-sm rounded-full
bg-black/5 dark:bg-white/10 border border-gray-200 dark:border-white/10"
>

100+ DSA Problems

</motion.span>

</motion.div>

</motion.div>

</div>

</section>

)
}