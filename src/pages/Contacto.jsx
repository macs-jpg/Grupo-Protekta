// TODO: conectar este formulario a Formspree o EmailJS
function Contacto() {
  return (
    <section className="px-6 py-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nombre" className="border rounded p-2" />
        <input type="email" placeholder="Correo" className="border rounded p-2" />
        <textarea placeholder="Mensaje" rows="4" className="border rounded p-2" />
        <button type="submit" className="bg-slate-900 text-white rounded p-2">
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contacto
