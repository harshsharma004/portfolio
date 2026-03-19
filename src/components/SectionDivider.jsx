import { motion } from "framer-motion"

export default function SectionDivider(){

return(

<motion.div
initial={{scaleX:0}}
whileInView={{scaleX:1}}
transition={{duration:1}}

className="w-full h-[1px]

bg-gradient-to-r
from-transparent
via-orange-400
to-transparent

my-20"
/>

)

}