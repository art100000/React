"use client";

import Link from "next/link";
import { useState } from "react";

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-poppins',
});

export default function Conversor_grau(){
    const [conversor, setConversor] = useState([0, 0]);
    
    function conversor_celsius_fahrenheit(e){
        const copiaConversor = [...conversor];
        const convertionForFahrenheit = (parseFloat(e.target.value) * 1.8) + 32;
        if(e.target.value === ""){
            copiaConversor[0] = 0;
            setConversor(copiaConversor)
            return;
        }
        copiaConversor[0]= convertionForFahrenheit.toFixed(2);
        setConversor(copiaConversor);
    }

    function conversor_fahrenheit_celsius(e){
        const copiaConversor = [...conversor];
        const convertionForCelsius = (parseFloat(e.target.value) - 32) / 1.8;
        if(e.target.value === ""){
            copiaConversor[1] = 0;
            setConversor(copiaConversor);
            return;
        }
        copiaConversor[1] = convertionForCelsius.toFixed(2);
        setConversor(copiaConversor);
    }

    return (
        <div className=" w-screen h-screen bg-black flex flex-col justify-center items-center">
            <header className="">
                <h1 className={`text-[#7B2CBF] font-[${poppins}] font-bold text-[30px]`}>Converter Graus</h1>
                <nav className={`text-[#7B2CBF] font-[${poppins}] text-center`}>
                    <Link href={'../'} className="hover:text-[#A37EFF]">Voltar</Link>
                </nav>
            </header>
            <main className="bg-neutral-500 w-[500px] p-[24px]">

                {conversor.map((_, index) => (
                <div key={index} className="">
                    {index === 0 ? 
                    <label>Convertor Celsius para Fahrenheit </label> : 
                    <label>Convertor Fahrenheit para Celsius</label>}
                    <input 
                        type="number"
                        onChange={index === 0 ? conversor_celsius_fahrenheit : conversor_fahrenheit_celsius}
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