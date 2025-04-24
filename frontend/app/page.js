import Link from "next/link";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-poppins',
});

export default function Home() {
  return (
    <div className="w-full h-screen">
      <header className="w-full h-[50px] bg-[#7B2CBF] text-white">
        <nav className="w-[500px] h-full ml-[8px] flex flex-row gap-[20px] flex flex-row justify-center">
            <Link href="./sobre" className="h-[20p] m-auto">Sobre</Link>
            <Link href="./conversorMoeda" className="h-[20p] m-auto">conversor Moeda</Link>
            <Link href="./conversorMetro"className="h-[20p] m-auto">conversor Metro</Link>
            <Link href="./conversorGrau" className="h-[20p] m-auto">conversor Grau</Link>
        </nav>
      </header>
      <main className="h-full p-[20px] bg-[#000] text-white">
        <div>
          <h1 className={`text-[24px] font-bold font-[${poppins}]`}>Para que foi feito esse site?</h1>
          <p className="my-[8px]">Esse site foi feito para testar minha habilidades em next.</p>
          <section>
            <h2 className="text-[20px] my-[16px]">Página sobre</h2>
            <p className="my-[8px]">Página para introdução sobre mim.</p>
          </section>
          <section>
            <h2 className="text-[20px] my-[16px]">Conversor moeda</h2>
            <p className="my-[8px]">Página feita para converter dólar para real e vice-versa.</p>
          </section>

          <section>
            <h2 className="text-[20px] my-[16px]">Conversor temperatura</h2>
            <p className="my-[8px]">Página feita para converter graus Celsius para graus Fahrenheit e vice-versa.</p>
          </section>

          <section>
            <h2 className="text-[20px] my-[16px]">Conversor metro</h2>
            <p className="my-[8px]">Página feita para converter metros para polegadas e vice-versa.</p>
          </section>
        </div>

        <div>
          <h1 className={`text-[24px] font-bold font-[${poppins}]`}>Como foi feito esse site?</h1>

          <p>Para fazer esse site foi utilizado o hook useState como um array(esse state utilizando um array foi importante para a utilização da função map).</p>
          <p>Para exibir os inputs utilizei a função do JS map para exibir dois inputs diferentes e designei a eles funções de diferentes conversoes</p>
          <p>Essas funções são chamas e fazem a conversão, o resultado dela irá atualizar o indice do array através do setConversao</p>
          <p>Esse código foi utilizado em todas as conversões, mudando apenas a lógica.</p>
        </div>
      </main>
    </div>
  );
}
