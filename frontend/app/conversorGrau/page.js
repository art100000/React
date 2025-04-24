"use client";

import Link from "next/link";
import { useState } from "react";

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
        <div className="">
            <header className="">
                <h1 className="">Converter Graus</h1>
            </header>
            <main className="">
                <nav className="">
                    <Link href={'../'} className="">Voltar</Link>
                </nav>
                {conversor.map((_, index) => (
                <div key={index} className="">
                    {index === 0 ? 
                    <label>Convertor Celsius para Fahrenheit </label> : 
                    <label>Convertor Fahrenheit para Celsius</label>}
                    <input 
                        type="number"
                        onChange={index === 0 ? conversor_celsius_fahrenheit : conversor_fahrenheit_celsius}
                        className=""
                    />
                    <input 
                        disabled={true}
                        value={conversor[index]}
                        className=""
                    />
                </div>
                ))}
            </main>
        </div>
    )
}