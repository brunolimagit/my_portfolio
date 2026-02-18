export default function Stacks() {
  return (
    <section className="overflow-hidden bg-white/1 backdrop-blur-md shadow-lg py-15 mt-10">

      <div className="relative w-full">

        <div className="flex gap-16 text-xl text-white font-bold animate-scroll whitespace-nowrap">

          {/* duplicamos para efeito infinito */}
          {[
            "Node.js",
            "JavaScript",
            "React.js",
            "PostgreSQL",
            "MongoDB",
            "TailwindCSS",
          ].map((tech, index) => (
            <div key={index} className="">
              {tech}
            </div>
          ))}

          {[
            "Node.js",
            "JavaScript",
            "React.js",
            "PostgreSQL",
            "MongoDB",
            "TailwindCSS",
          ].map((tech, index) => (
            <div key={`dup-${index}`} className="">
              {tech}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
