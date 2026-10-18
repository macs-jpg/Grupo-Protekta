import { Link } from "react-router-dom";
import noticias from "../data/noticias.json";
import Card from "../components/ui/card.jsx";

function Noticias() {
  const noticiasVisibles = noticias.filter((noticia) => noticia.visible);

  return (
    <section className="px-6 py-10 max-w-6xl mx-auto">
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl font-bold text-ink">Noticias y Novedades</h1>
        <p className="text-muted mt-2">
          Consulta nuestras últimas publicaciones y comunicados.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticiasVisibles.map((noticia) => (
          <Link key={noticia.id} to={`/noticias/${noticia.id}`}>
            <Card className="bg-surface overflow-hidden h-full hover:shadow-md transition">
              <img
                src={noticia.imagen[0]}
                alt={noticia.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-muted mb-1">{noticia.fecha}</p>
                <h3 className="font-semibold text-lg text-ink">{noticia.titulo}</h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-3">{noticia.texto}</p>
                <span className="inline-block mt-3 text-primary text-sm font-medium">
                  Ver nota completa →
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {noticiasVisibles.length === 0 && (
        <p className="text-center text-muted py-10">
          No hay noticias disponibles por el momento.
        </p>
      )}
    </section>
  );
}

export default Noticias;