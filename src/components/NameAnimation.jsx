import { useState, useEffect } from "react";

export default function NameAnimation() {
  const name = "Raaghav";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % name.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl font-bold flex justify-center gap-1">
      {name.split("").map((letter, i) => {
        const active = i === index;

        return (
          <span
            key={i}
            className={`transition-all duration-300 
${active ? "blur-0 scale-110 text-primary" : "blur-sm opacity-50"}`}
          >
            {active ? `[${letter}]` : letter}
          </span>
        );
      })}
    </h1>
  );
}
