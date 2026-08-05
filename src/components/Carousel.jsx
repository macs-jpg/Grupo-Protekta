import { useState, useEffect } from "react";

function Carousel({ imagenes, className = "" }) {
  const [indice, setIndice] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((i) => (i + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  function siguiente() {
    setIndice((i) => (i + 1) % imagenes.length);
  }

  function anterior() {
    setIndice((i) => (i - 1 + imagenes.length) % imagenes.length);
  }

  return (
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

      <button
        onClick={anterior}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-surface/80 hover:bg-surface text-ink w-10 h-10 rounded-full flex items-center justify-center"
      >
        ◀
      </button>

      <button
        onClick={siguiente}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-surface/80 hover:bg-surface text-ink w-10 h-10 rounded-full flex items-center justify-center"
      >
        ▶
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {imagenes.map((imagen, i) => (
          <button
            key={imagen}
            onClick={() => setIndice(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === indice ? "bg-primary" : "bg-surface/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
