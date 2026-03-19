import { useEffect, useRef } from "react"

export default function OrbitParticles({ x = 0.75, y = 0.45 }){

const canvasRef = useRef(null)

useEffect(()=>{

const canvas = canvasRef.current
const ctx = canvas.getContext("2d")

let w = canvas.width = window.innerWidth
let h = canvas.height = window.innerHeight

const centerX = w * x
const centerY = h * y

const particles=[]

for(let i=0;i<10;i++){

particles.push({
angle:Math.random()*Math.PI*2,
radius:80 + Math.random()*80,
speed:0.004 + Math.random()*0.01
})

}

function drawOrbit(r){

ctx.strokeStyle="rgba(255,120,0,0.2)"
ctx.setLineDash([6,6])

ctx.beginPath()
ctx.arc(centerX,centerY,r,0,Math.PI*2)
ctx.stroke()

ctx.setLineDash([])

}

function animate(){

ctx.clearRect(0,0,w,h)

// orbit rings

drawOrbit(70)
drawOrbit(110)
drawOrbit(150)

const pos=[]

particles.forEach(p=>{

p.angle+=p.speed

const px=centerX + Math.cos(p.angle)*p.radius
const py=centerY + Math.sin(p.angle)*p.radius

pos.push({px,py})

ctx.beginPath()
ctx.arc(px,py,3,0,Math.PI*2)
ctx.fillStyle="#ff7a18"
ctx.fill()

})

// connecting lines

for(let i=0;i<pos.length;i++){

for(let j=i+1;j<pos.length;j++){

const dx=pos[i].px-pos[j].px
const dy=pos[i].py-pos[j].py
const dist=Math.sqrt(dx*dx+dy*dy)

if(dist<120){

ctx.strokeStyle="rgba(255,120,0,0.15)"

ctx.beginPath()
ctx.moveTo(pos[i].px,pos[i].py)
ctx.lineTo(pos[j].px,pos[j].py)
ctx.stroke()

}

}

}

// rotating center square

ctx.save()

ctx.translate(centerX,centerY)
ctx.rotate(Date.now()*0.001)

ctx.strokeStyle="#ff7a18"
ctx.strokeRect(-8,-8,16,16)

ctx.restore()

requestAnimationFrame(animate)

}

animate()

},[x,y])

return(

<canvas
ref={canvasRef}
className="absolute inset-0 pointer-events-none opacity-40"
/>

)

}