import { useState, useEffect } from "react"

export default function Spotlight(){

const [pos,setPos]=useState({x:0,y:0})

useEffect(()=>{

const move=(e)=>{
setPos({x:e.clientX,y:e.clientY})
}

window.addEventListener("mousemove",move)

return ()=>window.removeEventListener("mousemove",move)

},[])

return(

<div
className="fixed inset-0 pointer-events-none z-30"

style={{
background:`radial-gradient(
600px at ${pos.x}px ${pos.y}px,
rgba(255,120,0,0.15),
transparent 80%
)`
}}
/>

)

}