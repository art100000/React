"use client";
import Link from "next/link";
import { useState } from "react";

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
        <div className="">
            <header className="">
                <h1 className="">Conversor de Medidas</h1>
            </header>
            <main className="">
                <nav className="">
                    <Link href={'../'} className="">Voltar</Link>
                </nav>
                {conversor.map((_,index) => (
                <div key={index} className="">
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
                        className=""
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