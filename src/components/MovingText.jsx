export default function MovingText(){

    const items=[
    "ReactJs",
    "JavaScript",
    "Nodejs",
    "MongoDB",
    "TailwindCss",
    "C++",
    "DSA",
    "Frontend Developer"
    ]
    
    return(
    
    <div className="overflow-hidden py-12
    
    bg-gray-50
    dark:bg-black
    
    border-y
    border-gray-200
    dark:border-white/10
    ">
    
    <div className="flex whitespace-nowrap animate-marquee gap-12 text-5xl font-semibold">
    
    {items.concat(items).map((item,i)=>(
    <span
    key={i}
    
    className="
    
    text-gray-700
    dark:text-gray-300
    
    hover:text-primary
    transition
    "
    >
    
    {item} •
    
    </span>
    ))}
    
    </div>
    
    </div>
    
    )
    
    }