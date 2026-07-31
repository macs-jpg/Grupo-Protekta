// Recibe un producto (objeto) como "prop" y lo muestra.
// Cuando haya backend, este componente NO cambia: solo cambia de dónde
// viene el objeto "producto" (de un JSON local -> de una API).
function ProductCard({ producto }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{producto.nombre}</h3>
        <p className="text-slate-600 text-sm mt-1">{producto.descripcion}</p>
      </div>
    </div>
  )
}

export default ProductCard
