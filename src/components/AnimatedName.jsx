import { useState, useEffect } from "react"

export default function AnimatedName(){

const name = "HARSH SHARMA"
const [index,setIndex] = useState(0)

useEffect(()=>{

const interval = setInterval(()=>{
setIndex(prev => (prev+1) % name.length)
},800)

return ()=>clearInterval(interval)

},[])

return(

<h1
className="

text-3xl
sm:text-4xl
md:text-6xl
lg:text-7xl

font-bold

text-gray-900
dark:text-white

"

>

{name.split("").map((letter,i)=>{

if(letter===" ") return <span key={i}>&nbsp;</span>

const active = i===index

return(

<span
key={i}
className={`transition-all duration-300

${active
? "text-primary scale-110 blur-0"
: "opacity-60 blur-sm text-gray-900 dark:text-gray-100"}

`}
>
{active ? `[${letter}]` : letter}
</span>

)

})}

</h1>

)

}