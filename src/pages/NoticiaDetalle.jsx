import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import noticias from "../data/noticias.json";

function NoticiaDetalle() {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === Number(id));

  const [fotoA, setFotoA] = useState(0);
  const [inicioSugeridos, setInicioSugeridos] = useState(0);

  if (!noticia) {
    return <p className="text-center py-10">Noticia no encontrada</p>;
  }

  const sugeridas = noticias.filter(
    (n) => n.visible && n.id !== Number(id)
  );
  const ventanaSugeridas = sugeridas.slice(inicioSugeridos, inicioSugeridos + 4);

  const siguienteF = () => setFotoA((fotoA + 1) % noticia.imagen.length);
  const fAnterior = () =>
    setFotoA((fotoA - 1 + noticia.imagen.length) % noticia.imagen.length);

  const siguienteSugerida = () => {
    if (inicioSugeridos < sugeridas.length - 4) {
      setInicioSugeridos(inicioSugeridos + 1);
    }
  };

  const anteriorSugerida = () => {
    if (inicioSugeridos > 0) {
      setInicioSugeridos(inicioSugeridos - 1);
    }
  };

  return (
    <div className="bg-surface border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="flex flex-col md:flex-row gap-6 p-4">
        {/* Galería / Imagen Principal */}
        <div className="relative group md:w-1/2">
          <img
            src={noticia.imagen[fotoA]}
            alt={noticia.titulo}
            className="w-full h-80 object-contain"
          />
          {noticia.imagen.length > 1 && (
            <>
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
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {noticia.imagen.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setFotoA(i)}
                    className={`w-2 h-2 rounded-full ${
                      i === fotoA ? "bg-primary" : "bg-black/20"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Detalle de la Noticia */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="font-semibold text-2xl text-ink">{noticia.titulo}</h1>
            <p className="text-xs text-muted mt-1">{noticia.fecha}</p>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">{noticia.texto}</p>
          </div>

          {noticia.linkFacebook && (
            <div className="pt-4 mt-4 border-t">
              <a
                href={noticia.linkFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-medium hover:underline transition inline-block"
              >
                Ver publicación original en Facebook →
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Noticias Sugeridas / También te puede interesar */}
      {sugeridas.length > 0 && (
        <div className="mt-10 px-4 pb-6">
          <h2 className="text-xl font-bold mb-4">También te puede interesar</h2>

          {/* Teléfono */}
          <div className="flex sm:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
            {sugeridas.map((n) => (
              <Link
                key={n.id}
                to={`/noticias/${n.id}`}
                className="w-[70%] shrink-0 snap-start border rounded-lg overflow-hidden bg-surface shadow-sm"
              >
                <img
                  src={n.imagen[0]}
                  alt={n.titulo}
                  className="w-full h-32 object-contain"
                />
                <div className="p-3">
                  <p className="text-xs text-muted">{n.fecha}</p>
                  <h3 className="font-semibold text-sm text-ink mt-1 truncate">
                    {n.titulo}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Escritorio */}
          <div className="hidden sm:flex items-start gap-4">
            <button
              onClick={anteriorSugerida}
              disabled={inicioSugeridos === 0}
              className="disabled:opacity-30 disabled:cursor-not-allowed text-3xl px-2 mt-16"
            >
              {"<"}
            </button>
            <div className="grid sm:grid-cols-4 gap-4 flex-1 min-w-0">
              {ventanaSugeridas.map((n) => (
                <Link
                  key={n.id}
                  to={`/noticias/${n.id}`}
                  className="border rounded-lg overflow-hidden bg-surface hover:shadow-md transition h-full block p-2"
                >
                  <img
                    src={n.imagen[0]}
                    alt={n.titulo}
                    className="w-full h-32 object-contain"
                  />
                  <div className="p-2">
                    <p className="text-xs text-muted">{n.fecha}</p>
                    <h3 className="font-semibold text-sm text-ink mt-1 line-clamp-2">
                      {n.titulo}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <button
              onClick={siguienteSugerida}
              disabled={inicioSugeridos >= sugeridas.length - 4}
              className="disabled:opacity-30 disabled:cursor-not-allowed text-3xl px-2 mt-16"
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NoticiaDetalle;