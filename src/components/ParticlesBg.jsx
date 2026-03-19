import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function ParticlesBg(){

const particlesInit = async (main)=>{
await loadFull(main)
}

return(

<Particles
init={particlesInit}
options={{
background:{color:"transparent"},
particles:{
number:{value:60},
size:{value:3},
move:{enable:true,speed:1},
links:{enable:true,color:"#ff6b3d",distance:120},
opacity:{value:0.5}
}
}}
/>

)

}