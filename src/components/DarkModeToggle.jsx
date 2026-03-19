import { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

export default function DarkModeToggle(){

const [dark,setDark] = useState(false)

useEffect(()=>{

const html = document.documentElement

if(dark){
html.classList.add("dark")
}else{
html.classList.remove("dark")
}

},[dark])

return(

<button
onClick={()=>setDark(!dark)}
className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition"
>

{dark ? <FaSun/> : <FaMoon/>}

</button>

)

}