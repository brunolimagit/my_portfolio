import imgError from "../assets/i-book.png"
export default function Objective() {
    return(
        <section className="flex justify-between items-center gap-20 mt-20 bg-black backdrop-blur-md  p-10">
            <div>
                <p className="text-white">Criar marcas significativas e experiências digitais intuitivas que se destacam.</p>
            </div>

            <div>

            <img src={imgError} alt="imagem de erro" className="z-20 w-170 mx-auto mt-20 rounded-xl "/>
            
            </div>
        </section>
    )
}