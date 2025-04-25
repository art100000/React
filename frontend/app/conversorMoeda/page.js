"use client";

import Link from "next/link";
import { useState } from "react";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-poppins',
});



export default function Conversor_Moeda(){
    const [conversor, setConvesor] = useState([0, 0]);
 
    function conversor_dolar_real(e){
        const copiaConversor = [...conversor];
        if(e.target.value === ""){
            copiaConversor[0] = 0;
            setConvesor(copiaConversor)
            return;
        }
        copiaConversor[0] = parseFloat((e.target.value / 5.87)).toFixed(2);
        setConvesor(copiaConversor);
    }

    function conversor_real_dolar(e){
        const copiaConversor = [...conversor];
        const dolarValue = 5.87;
        if(e.target.value === ""){
            copiaConversor[1] = 0;
            setConvesor(copiaConversor)
            return;
        }
        copiaConversor[1] = parseFloat((e.target.value * dolarValue)).toFixed(2);
        setConvesor(copiaConversor);
    }

    return (
        <div className=" w-screen h-screen bg-black flex flex-col justify-center items-center">
            <header className="">
                <h1 className={`text-[#7B2CBF] font-[${poppins}] font-bold text-[30px]`}>Conversor Moeda</h1>
                <nav className={`text-[#7B2CBF] font-[${poppins}] text-center`}>
                    <Link href={'../'} className="hover:text-[#A37EFF]">Voltar</Link>
                </nav>
            </header>
            <main className="bg-neutral-500 w-[500px] p-[24px]">
                {conversor.map((_,index) => (
                    <div key={index} className="">
                        {index === 0 ? 
                        <label >Converter Dolar para Real:</label> :
                        <label>Converter Real para Dolar:</label>
                        }
                        <input 
                            type="number"
                            min={0}
                            onChange={index === 0 ? conversor_dolar_real : conversor_real_dolar}
                            className="border-[1px] ml-[8px]"
                        />
                        <input 
                            disabled={true}
                            value={conversor[index]}
                        />
                    </div>
                ))}
            </main>
        </div>
    )
}