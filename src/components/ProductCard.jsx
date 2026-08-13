  // Recibe un producto (objeto) como "prop" y lo muestra.
  // Cuando haya backend, este componente NO cambia: solo cambia de dónde
  // viene el objeto "producto" (de un JSON local -> de una API).

  //Se importo la libreria de useState nos de una variable y funcion
  import { useState } from "react"
  import Button from "./ui/Button"
  function ProductCard({ producto }) {
    //Se declara el estado dentro del componente
    //expandido -> Valor
    //setExpandido -> la funcion para cambiarlo
    const [expandido, setExpandido] = useState(false);
    const [fotoA, setFotoA] = useState(0);
    const siguienteF = () => setFotoA((fotoA + 1) % producto.imagenes.length);
    const fAnterior = () => setFotoA((fotoA - 1 + producto.imagenes.length) % producto.imagenes.length);
    
    // en la linea 24 se le cambio object-cover a object contain para una mejor visualizacion de las imagenes
    //en la linea 21 se le cambia a relative group para que le diga al navegador basicamente que es el punto de referencia
    return (
      <div className="bg bg-surface border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
        <div className="relative group">
        <img
          src={producto.imagenes[fotoA]}
          alt={producto.nombre}
          className="w-full h-48 object-contain"
        />
        <button onClick={fAnterior}
          className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition text-black text-4xl font-light scale-y-150">
          {"<"}</button>
        <button onClick={siguienteF}
          className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition text-black text-4xl font-light scale-y-150">
          {">"}</button>
        </div>
        <div className="p-4"> 
          <h3 className="font-semibold text-lg">{producto.nombre}</h3>
          <p className="text-slate-600 text-sm mt-1">{producto.descripcion}</p>
          <p className="text-slate-600 text-sm mt-1">{producto.descripcion2}</p>
          <Button onClick={() => setExpandido(!expandido)} className="mt-3">
            {expandido ? "Ver menos" : "Ver mas"}
          </Button>
        </div>
        {/*En la linea 43 se ocupa la funcion: Object.entries el cual convierte un objeto en un arreglo de pares*/}
        {expandido && (
          <div className="p-4">
            {Object.entries(producto.especificaciones).map(([llave, valor]) => (
              <p key={llave}>
                {llave}: {valor}
              </p>
            ))}
          </div>
        )}
      </div>
      
    )
  }

  export default ProductCard

  //se le modifica de producto.imagen a producto.imagenes[0] ya que en el JSON se declaro y uso como array
  // se ocupo operador ternario en la linea 24 para validar la condicion
