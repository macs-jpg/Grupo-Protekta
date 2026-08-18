// Recibe un producto (objeto) como "prop" y lo muestra.
// Cuando haya backend, este componente NO cambia: solo cambia de dónde
// viene el objeto "producto" (de un JSON local -> de una API).

import { Link } from "react-router-dom";
function ProductCard({ producto }) {
  return (
    <Link
      to={`/catalogo/${producto.id}`}
      className="bg-surface border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition block"
    >
      <div className="relative group">
        <img
          src={producto.imagenes[0]}
          alt={producto.nombre}
          className="w-full h-48 object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{producto.nombre}</h3>
        <p className="text-slate-600 text-sm mt-1">{producto.descripcion}</p>
        <p className="text-slate-600 text-sm mt-1">{producto.descripcion2}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
