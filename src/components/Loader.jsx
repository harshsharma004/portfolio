import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Loader(){

const [loading, setLoading] = useState(true)

useEffect(() => {

const timer = setTimeout(() => {
  setLoading(false)
}, 2000) // 🔥 thoda longer (2s)

return () => clearTimeout(timer)

}, [])

if (!loading) return null

return(

<motion.div

initial={{ opacity: 1 }}
animate={{ opacity: 0 }}
transition={{ delay: 1.4, duration: 0.6 }} // 🔥 smooth exit

className="fixed inset-0 z-[300]
flex items-center justify-center
bg-white dark:bg-black"

>

<div className="flex flex-col items-center gap-6">

{/* Spinner */}

<motion.div
animate={{ rotate: 360 }}
transition={{ repeat: Infinity, duration: 1, ease: "linear" }}

className="w-12 h-12 border-4
border-gray-300 dark:border-white/20
border-t-orange-500
rounded-full"
/>

{/* Text */}

<motion.p
initial={{ opacity:0 }}
animate={{ opacity:1 }}
transition={{ delay:0.3 }}

className="text-gray-500 dark:text-gray-400 text-sm tracking-wide"
>
Loading portfolio...
</motion.p>

</div>

</motion.div>

)

}