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
        className="absolute inset-0  "
      />

      {/* CONTEÚDO NA FRENTE */}
      <div className="relative z-10 h-full flex flex-col">

        <Header />

        <div className="flex flex-1 items-center justify-center mt-75">
          <h1 className="font-['Bitcount_Grid_Double'] text-[#ff0000] text-[10rem] font-bold animate-float">
           <Typewriter
              words={["BRUNO DEV"]}
              loop={true}
              cursor
              typeSpeed={200}
            />
          </h1>
        </div>

      </div>

    </section>
  );
}
