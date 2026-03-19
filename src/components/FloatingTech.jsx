import { motion } from "framer-motion"
import { FaReact, FaJsSquare, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss, SiMongodb } from "react-icons/si"

export default function FloatingTech(){

const icons = [

{icon:<FaReact/>, x:"10%", y:"20%", color:"text-blue-400"},
{icon:<FaJsSquare/>, x:"80%", y:"25%", color:"text-yellow-400"},
{icon:<SiTailwindcss/>, x:"20%", y:"70%", color:"text-sky-400"},
{icon:<SiMongodb/>, x:"75%", y:"75%", color:"text-green-400"},
{icon:<FaGitAlt/>, x:"50%", y:"40%", color:"text-orange-500"}

]

return(

<div className="fixed inset-0 pointer-events-none z-0">

{icons.map((item,i)=>(

<motion.div
key={i}

initial={{x:item.x,y:item.y}}

animate={{
x:[item.x,"+=20","-=20",item.x],
y:[item.y,"-=20","+=20",item.y]
}}

transition={{
duration:12,
repeat:Infinity,
ease:"easeInOut"
}}

className={`absolute text-4xl opacity-20 ${item.color}`}
>

{item.icon}

</motion.div>

))}

</div>

)

}