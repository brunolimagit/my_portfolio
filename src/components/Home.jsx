import homeImg from "../assets/img-section-home.png";
import Header from "../components/Header";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="relative h-screen">

      {/* IMAGEM DE FUNDO */}
      <img
        src={homeImg}
        alt="imagem de fundo da seção home"
        className="absolute inset-0 w-full  "
      />



      {/* CONTEÚDO NA FRENTE */}
      <div className="relative z-10 flex flex-col">

        <Header />
       
       <div className="z-20 mx-10 flex justify-between mt-10">
         <div className="h-80 text-white font-['Bitcount_Grid_Double'] font-bold">
          <h1 className="text-2xl ">
           {"->"}FULL STACK DEVELOPER = {"{"} 
          </h1>

          <p className="w-90">
            <span className="text-[blue]">const</span> dev = {"{"} 

            <p><span className="text-[#ff0000]">Stack: </span> <Typewriter
            
            words={[`"Full Stack Developer",`]}
              loop={1}
              cursor
              typeSpeed={100}
            />
            </p>

            <p> <span className="text-[#ff0000]"> Especialidade:</span> <Typewriter
            words={[`"Aplicações Web Modernas",`]}
              loop={1}
              cursor
              typeSpeed={100}
            />
            </p>

            <p><span className="text-[#ff0000]">  Foco:</span> <Typewriter
            words={[`"Criar Soluções Escaláveis e Eficientes",`]}
              loop={1}
              cursor
              typeSpeed={100}
            />
            </p>

            <p><span className="text-[#ff0000]">Disponibilidade:</span>  <Typewriter
            words={[`true,`]}
              loop={1}
              cursor
              typeSpeed={100}
            />
            </p>
            <p> <span className="text-[#ff0000]"> Objetivo:</span> <Typewriter
            words={[`"Construir Experiências Digitais Que Façam a Diferença" }`]}
              loop={1}
              cursor
              typeSpeed={100}
            />
            </p>

            <span className="text-2xl">{"};"}</span>
          </p>
          

         
        
 </div>

         <div className="w-77 text-white font-['Bitcount_Grid_Double'] font-bold mt-30">
          <p><span className="text-[#ff0000]">  contato</span> {"( ) {"}
           <span className="text-[blue]"> return </span><Typewriter
            words={[`Vamos construir algo incrível juntos!`, ]}
              loop={1}
              cursor
              typeSpeed={100}
            />
            </p>
            
            <span>{"};"}</span>
           
          <div className="font-bold font-['Bitcount_Grid_Double flex gap-5 mt-5 text-center ">
            <button className="font-['Bitcount_Grid_Double'] w-30 text-[#ff0000] text-xl border-1 border-[#ff0000] rounded-[30px] p-2 hover:bg-[#ff0000]/15 hover:text-white hover:border-0 cursor-pointer">Contato</button>
            <button className="font-['Bitcount_Grid_Double'] w-30 text-white text-xl  rounded-[30px] p-2 bg-[#ff0000]/15 hover:bg-white/0 hover:border-1 hover:text-[#ff0000] cursor-pointer">CV</button>
          </div>

         </div>

       </div>


        <div className="flex flex-1 items-center justify-center ">
          <h1 className="font-['Bitcount_Grid_Double'] text-[#ff0000] text-[10rem] font-bold animate-float">
      BRUNO DEV
          </h1>
        </div>
       {/*MY INFO */}

      </div>

     
    </section>
  );
}
