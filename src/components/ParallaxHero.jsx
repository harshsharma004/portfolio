import { useEffect } from "react"

export default function ParallaxHero(){

useEffect(()=>{

const move = (e)=>{

const x = (window.innerWidth/2 - e.clientX)
const y = (window.innerHeight/2 - e.clientY)

document.querySelectorAll(".parallax").forEach(layer=>{

const speed = layer.getAttribute("data-speed")

layer.style.transform = `translate(${x*speed}px, ${y*speed}px)`

})

}

window.addEventListener("mousemove", move)

return ()=>window.removeEventListener("mousemove", move)

},[])

return null
}