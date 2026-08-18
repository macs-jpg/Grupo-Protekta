import productos from '../data/productos.json'
import ProductCard from '../components/ProductCard.jsx'
import { useState } from 'react'
import Button from '../components/ui/Button.jsx';
import { Link } from 'react-router-dom';

function Catalogo() {

  const categoriasDisponibles = [
    "Equipo Tactico",
    "Uniformes",
    "Accesorios para Seguridad",
    "Equipamiento motos, Camionetas y Sedan",
    "Capacitaciones"
  ];

  const [paginaA, setPaginaA] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false);
  const [seleccioncat, setSeleccionCat] = useState([]);
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  const productsxPag = 14;

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = seleccioncat.length === 0 || producto.categorias.some((cat) => seleccioncat.includes(cat));
    return coincideBusqueda && coincideCategoria;
  });

  const totalpag = Math.ceil(productosFiltrados.length / productsxPag);
  const inicio = (paginaA - 1) * productsxPag;
  const fin = inicio + productsxPag;
  const productosPagina = productosFiltrados.slice(inicio, fin);

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
  const toggleCategoria = (categoria) => {
    if (seleccioncat.includes(categoria)) {
      setSeleccionCat(seleccioncat.filter((c) => c !== categoria));
    } else {
      setSeleccionCat([...seleccioncat, categoria]);
    }
  };

  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Nuestros productos</h2>

      <input
        type="text"
        value={busqueda}
        onChange={(e) => {
          setBusqueda(e.target.value);
          setMostrarSugerencias(true);
        }}
        onFocus={() => setMostrarSugerencias(true)}
        placeholder="Buscar productos..."
        className="w-full px-4 py-2 border border-border rounded-md mb-2"
      />
      {mostrarSugerencias && busqueda !== "" && (
        <div className="border border-border rounded-md bg-surface shadow-md mb-4 max-h-64 overflow-y-auto">
          {productosFiltrados.length === 0 ? (
            <p className="p-3 text-sm text-slate-500">Sin resultados</p>
          ) : (
            productosFiltrados.slice(0, 5).map((producto) => (
              <Link
                key={producto.id}
                to={`/catalogo/${producto.id}`}
                onClick={() => setMostrarSugerencias(false)}
                className="block px-4 py-2 hover:bg-border text-sm"
              >
                {producto.nombre}
              </Link>
            ))
          )}
        </div>
      )}

      <div className="relative mb-6 inline-block">
        <button
          onClick={() => setMostrarFiltros(!mostrarFiltros)}
          className="border border-border rounded-md px-4 py-2 text-sm bg-surface flex items-center gap-2"
        >
          Filtrar por categoría
          {mostrarFiltros ? "▲" : "▼"}
        </button>

        {mostrarFiltros && (
          <div className="absolute top-full left-0 mt-1 border border-border rounded-md bg-surface shadow-md p-3 z-20 w-64">
            {categoriasDisponibles.map((cat) => (
              <label key={cat} className="flex items-center gap-2 text-sm py-1">
                <input
                  type="checkbox"
                  checked={seleccioncat.includes(cat)}
                  onChange={() => toggleCategoria(cat)}
                />
                {cat}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {productosPagina.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
          />
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