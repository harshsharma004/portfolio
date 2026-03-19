import { TypeAnimation } from "react-type-animation"

export default function TypingHeading({ text }) {

return (

<div className="overflow-hidden text-center">

<TypeAnimation
sequence={[text, 1500]}
speed={60}
repeat={0}
cursor={true}

className="

text-4xl
sm:text-5xl
md:text-6xl

font-bold

bg-gradient-to-r
from-orange-400
to-red-500

bg-clip-text
text-transparent

"

/>

</div>

)

}