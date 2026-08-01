import { useState, useEffect } from "react";

function Carousel({imagenes, className = ''}){
    const[indice, setIndice] = useState(0)
    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndice((i) =>  (i+1) % imagenes.length)
        },3000)

        return () => clearInterval(intervalo)
    }, [imagenes.lenght])


    return(
        <div className={`relative overflow-hidden bg-surface h-full ${className}`}>
            {imagenes.map((imagen, i) => (
                <img
                    key={imagen}
                    src={imagen}
                    alt="Protekta"
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(${(i - indice) * 100}%)` }}
                />
            ))}
        </div>
    )
}

export default Carousel