import { useParams } from "react-router-dom";
import productos from "../data/productos.json";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

function ProductoDetalle() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === Number(id));
  const [fotoA, setFotoA] = useState(0);
  const siguienteF = () => setFotoA((fotoA + 1) % producto.imagenes.length);
  const fAnterior = () =>
    setFotoA((fotoA - 1 + producto.imagenes.length) % producto.imagenes.length);
  const [inicioSugeridos, setInicioSugeridos] = useState(0);
  const sugeridos = productos.filter((p) => p.id !== producto.id);
  const ventanaSugeridos = sugeridos.slice(
    inicioSugeridos,
    inicioSugeridos + 4,
  );

  const siguienteSugerido = () => {
    if (inicioSugeridos < sugeridos.length - 4) {
      setInicioSugeridos(inicioSugeridos + 1);
    }
  };

  const anteriorSugerido = () => {
    if (inicioSugeridos > 0) {
      setInicioSugeridos(inicioSugeridos - 1);
    }
  };

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="bg-surface border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="flex flex-col md:flex-row gap-6 p-4">
        <div className="relative group md:w-1/2">
          <img
            src={producto.imagenes[fotoA]}
            alt={producto.nombre}
            className="w-full h-80 object-contain"
          />
          <button
            onClick={fAnterior}
            className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition text-black text-4xl font-light scale-y-150"
          >
            {"<"}
          </button>
          <button
            onClick={siguienteF}
            className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition text-black text-4xl font-light scale-y-150"
          >
            {">"}
          </button>
        </div>
        <div className="md:w-1/2">
          <h1 className="font-semibold text-2xl">{producto.nombre}</h1>
          <p className="text-slate-600 text-sm mt-1">{producto.descripcion}</p>
          <p className="text-slate-600 text-sm mt-1">{producto.descripcion2}</p>
          <div className="space-y-1 border-t pt-3 mt-3">
            {Object.entries(producto.especificaciones).map(([llave, valor]) => (
              <p key={llave} className="text-sm text-slate-600">
                <span className="font-medium text-ink capitalize">{llave}</span>
                : {valor}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 px-4 pb-6">
        <h2 className="text-xl font-bold mb-4">También te puede interesar</h2>

        {/*Telefono */}
        <div className="flex sm:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
          {sugeridos.map((p) => (
            <div key={p.id} className="w-[70%] shrink-0 snap-start">
              <ProductCard producto={p} />
            </div>
          ))}
        </div>

        {/* Grande*/}
        <div className="hidden sm:flex items-start gap-4">
          <button
            onClick={anteriorSugerido}
            disabled={inicioSugeridos === 0}
            className="disabled:opacity-30 disabled:cursor-not-allowed text-3xl px-2 mt-20"
          >
            {"<"}
          </button>
          <div className="grid sm:grid-cols-4 gap-4 flex-1 min-w-0">
            {ventanaSugeridos.map((p) => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
          <button
            onClick={siguienteSugerido}
            disabled={inicioSugeridos >= sugeridos.length - 4}
            className="disabled:opacity-30 disabled:cursor-not-allowed text-3xl px-2 mt-20"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
