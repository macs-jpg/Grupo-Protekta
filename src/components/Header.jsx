import { Link } from 'react-router-dom'

// reemplazar "LOGO EMPRESA" por el logo real cuando llegue
function Header() {
  return (
    <header className="bg-surface border-b border-border px-6 py-4 flex items-center justify-between">
      <span className="font-bold text-lg text-ink">PROTEKTA</span>
      <nav className="flex gap-6 text-ink font-medium text-ink">
        <Link to="/" className="hover:text-primary transition">Inicio</Link>
        <Link to="/catalogo" className="hover:text-primary transition">Catálogo</Link>
        <Link to="/contacto" className="hover:text-primary transition">Contacto</Link>
      </nav>
    </header>
  )
}

export default Header
