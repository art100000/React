"use client";
import Link from "next/link";
import { useState } from "react";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-poppins',
});

export default function Conversor_metros(){
    const [conversor, setConvesor] = useState([0, 0]);

    function conversor_metros_polegadas(e){
        const copiaConversor = [...conversor];
        if(e.target.value === ""){
            copiaConversor[0] = 0;
            setConvesor(copiaConversor);
            return;
        }
        copiaConversor[0] = parseFloat(e.target.value * 39,3701).toFixed(2);
        setConvesor(copiaConversor);
    }

    function conversor_polegadas_metros(e){
        const copiaConversor = [...conversor];
        if(e.target.value === ""){
            copiaConversor[1] = 0;
            setConvesor(copiaConversor);
            return;
        }
        copiaConversor[1] = parseFloat(e.target.value * 0.0254).toFixed(2);
        setConvesor(copiaConversor);
    }

    return (
        <div className=" w-screen h-screen bg-black flex flex-col justify-center items-center">
            <header>
                <h1 className={`text-[#7B2CBF] font-[${poppins}] font-bold text-[30px]`}>Conversor de Medidas</h1>
                <nav className={`text-[#7B2CBF] font-[${poppins}] text-center`}>
                    <Link href={'../'} className="hover:text-[#A37EFF]">Voltar</Link>
                </nav>
            </header>
            <main className="bg-neutral-500 w-[500px] p-[24px]">

                {conversor.map((_,index) => (
                <div key={index} >
                    {index === 0 ?
                    <label>Converter Metros para Polegadas</label> :
                    <label>Converter Polegadas para Metros</label>
                    }
                    <input 
                        type="number"
                        min={0}
                        onChange={index === 0 
                            ? conversor_metros_polegadas
                            : conversor_polegadas_metros}
                         className="border-[1px] ml-[8px]"
                    />
                    <input 
                        type="number"
                        value={conversor[index]}
                        disabled={true}
                        className=""
                    />
                </div>
                ))}
            </main>
        </div>
    )
}