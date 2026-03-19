import { Canvas } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { useMemo } from "react"

export default function ParticlesBackground(){

const points = useMemo(()=>{

const positions = new Float32Array(5000)

for(let i=0;i<5000;i++){

positions[i] = (Math.random() - 0.5) * 10

}

return positions

},[])

return(

<div className="absolute inset-0 -z-10">

<Canvas camera={{position:[0,0,1]}}>

<Points positions={points} stride={3} frustumCulled>

<PointMaterial
transparent
color="#ff7a18"
size={0.02}
sizeAttenuation
depthWrite={false}
/>

</Points>

</Canvas>

</div>

)

}