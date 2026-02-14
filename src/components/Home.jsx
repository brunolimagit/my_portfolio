import homeImg from "../assets/img-section-home.png";
import Header from "../components/Header";

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

        <div className="flex flex-1 items-center justify-center mt-20">
          <h1 className="text-white text-[10rem] font-bold">
            
          </h1>
        </div>

      </div>

    </section>
  );
}
