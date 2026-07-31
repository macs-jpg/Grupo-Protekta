import productos from '../data/productos.json'
import ProductCard from '../components/ProductCard.jsx'

// .map() recorre el arreglo de productos y crea una ProductCard por cada uno
function Catalogo() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Nuestros productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  )
}

export default Catalogo
