import productos from '../data/productos.json'
import ProductCard from '../components/ProductCard.jsx'
import { useState } from 'react'
import Button from '../components/ui/Button.jsx';

function Catalogo() {
  const [paginaA, setPaginaA] = useState(1);
  const productsxPag = 14;
  const totalpag = Math.ceil(productos.length / productsxPag);
  const inicio = (paginaA - 1) * productsxPag;
  const fin = inicio + productsxPag;
  const productosPagina = productos.slice(inicio, fin);
  const sigP = () => {
    if (paginaA < totalpag) {
      setPaginaA(paginaA + 1);
  }
  };
  const PagA = () => {
    if (paginaA > 1) {
      setPaginaA(paginaA - 1);
    }
  };
  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Nuestros productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productosPagina.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-8">
        <Button onClick={PagA}
        disabled={paginaA === 1}
        className="disabled:opacity-40 disabled:cursor-not-allowed"> {"<"} </Button>
        <span>Pagina {paginaA} de {totalpag}</span>
        <Button onClick={sigP}
        disabled={paginaA === totalpag}
        className="disabled:opacity-40 disabled:cursor-not-allowed"> {">"} </Button>
      </div>
    </section>
  )   
}

export default Catalogo
