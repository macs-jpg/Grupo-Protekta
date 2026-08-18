import Button from "../components/ui/Button";
import { useState } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});
  const [estadoEnvio, setEstadoEnvio] = useState(null);

  const validar = () => {
    const nuevosErrores = {};

    if (nombre.trim() === "") {
      nuevosErrores.nombre = "El nombre es obligatorio";
    } else if (/\d/.test(nombre)) {
      nuevosErrores.nombre = "El nombre no debe contener números";
    }

    if (correo.trim() === "") {
      nuevosErrores.correo = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      nuevosErrores.correo = "El correo no tiene un formato válido";
    }

    if (mensaje.trim() === "") {
      nuevosErrores.mensaje = "El mensaje es obligatorio";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    const esValido = validar();
    if (esValido) {
      const respuesta = await fetch("https://formspree.io/f/mzepveql", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({ nombre, correo, mensaje }),
      });
      if (respuesta.ok) {
        setNombre("");
        setCorreo("");
        setMensaje("");
        setEstadoEnvio("exito");
      } else {
        setEstadoEnvio("error");
      }

      setTimeout(() => {
        setEstadoEnvio(null);
      }, 3000);
    }
  };

  return (
    <section className="px-6 py-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
      <form onSubmit={manejarEnvio} className="flex flex-col gap-1">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          className="border rounded p-2"
        />
        {errores.nombre && (
          <p className="text-sm text-primary">{errores.nombre}</p>
        )}

        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Correo"
          className="border rounded p-2 mt-3"
        />
        {errores.correo && (
          <p className="text-sm text-primary">{errores.correo}</p>
        )}

        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Mensaje"
          rows="4"
          className="border rounded p-2 mt-3"
        />
        {errores.mensaje && (
          <p className="text-sm text-primary">{errores.mensaje}</p>
        )}

        <Button type="submit" className="mt-4">
          Enviar
        </Button>
        {estadoEnvio === "exito" && (
          <div className="fixed bottom-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2  rounded-md text-sm ">
            Enviado
          </div>
        )}
        {estadoEnvio === "error" && (
          <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md text-sm ">
            Error, consulte con el proveedor
          </div>
        )}
      </form>
    </section>
  );
}

export default Contacto;
