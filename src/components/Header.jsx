import { Link } from 'react-router-dom'

// TODO (Persona A): reemplazar "LOGO EMPRESA" por el logo real cuando llegue
function Header() {
  return (
    <header className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
      <span className="font-bold text-lg">LOGO EMPRESA</span>
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-slate-300">Inicio</Link>
        <Link to="/catalogo" className="hover:text-slate-300">Catálogo</Link>
        <Link to="/contacto" className="hover:text-slate-300">Contacto</Link>
      </nav>
    </header>
  )
}

export default Header
