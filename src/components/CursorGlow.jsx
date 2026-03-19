import { useEffect, useState } from "react"

export default function CursorGlow(){

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
className="fixed pointer-events-none w-40 h-40 bg-primary/20 rounded-full blur-3xl z-50"
style={{left:pos.x-80,top:pos.y-80}}
/>

)

}