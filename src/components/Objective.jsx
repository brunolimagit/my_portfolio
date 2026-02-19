import imgError from "../assets/i-book.png"
export default function Objective() {
    return(
        <section className="w-full flex justify-between items-center gap-20 mt-20 bg-black backdrop-blur-md  p-10">
            <div className="w-1/2 flex flex-col gap-10 p-10 rounded-xl group-hover:opacity-80 group-hover:blur-3xl transition-all duration-300">
                <p className="text-white text-3xl">Criar marcas significativas e experiências digitais intuitivas que se destacam.</p>
                <p className="text-white">
                    Meu objetivo é criar produtos digitais que não apenas funcionem, mas que resolvam problemas reais e fortaleçam marcas. Uno tecnologia, experiência do usuário e pensamento estratégico para entregar soluções eficientes e escaláveis.
                </p>
                <a href="https://wa.me/5585988307887" target="_blank" className="flex font-['Bitcount_Grid_Double'] w-30 text-[#ff0000] text-xl border justify-center border-[#ff0000] rounded-[30px] p-2 font-bold cursor-pointer transition-all duration-300 hover:bg-[#ff0000]/15hover:text-white hover:shadow-[0_0_25px_#ff0000]">Contato
               </a>

            </div>

            <div>

            <img src={imgError} alt="imagem de erro" className="z-20 w-170 mx-auto mt-20 rounded-xl"/>
            
            </div>
        </section>
    )
}