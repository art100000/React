import Link from "next/link";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-poppins',
});


export default function Sobre(){
    return (
        <div>
            <header className="w-full h-[50px] bg-[#7B2CBF] font-semibold text-white flex flex-row justify-center items-center">
                <h1 className={`text-[24px] font-[${poppins}]`}>Sobre</h1>
            </header>
            <main className="">
                <nav className="">
                    <Link href={'../'} className="">Voltar</Link>
                </nav>
                <div>
                    <section>
                        <h1 className="">Quem sou eu?</h1>
                        <p className="">Eu sou Arthur Gonçalves Figueirôa, um desenvolvedor front-end. Eu sou um estudante do 3° período do curso de sistemas para Internet da Unicap
                        </p>
  
                        <h2 className="">Como cheguei até aqui?</h2>
                        <p className="">Sempre gostei de computadores e quando surgiu a oportunidade de entrar nesse curso eu não pensei duas vezes e abracei a oportunidade.</p>

                        <h2 className="">Meu Portifólio</h2>
                        <p><a target="_black" href="https://atvd-port.vercel.app/">Clique Aqui </a> para acessar meu Portifólio</p>
                    </section>
                </div>
            </main>
        </div>
    )
}