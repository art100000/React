"use client";

import Link from "next/link";
import { useState } from "react";

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
        <div className="">
            <header className="">
                <h1 className="">Conversor Moeda</h1>
            </header>
            <main className="">
            <nav className="">
                    <Link href={'../'} className="">Voltar</Link>
                </nav>
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