import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false)

    return(
        <nav>
            <div className= "hidden md:flex gap-6 text-ink font-medium ">
                <Link to="/" className="hover:text-primary transition">Inicio</Link>
                <Link to="/catalogo" className="hover:text-primary transition">Catálogo</Link>
                <Link to="/contacto" className="hover:text-primary transition">Contacto</Link>
            </div>

            {/* Botón que abre menú desplegable */}
            <button className="md:hidden text-ink text-2xl" onClick={() => setMenuAbierto(!menuAbierto)}>
              Menú
            </button>

            {/* oscurece el fondo al abrir menú desplegable */}
            <div 
                className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity 
                ${menuAbierto ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setMenuAbierto(false)}
            />

            {/* Menú lateral desplegable */}
            <div className={`fixed top-0 right-0 h-screen w-64 bg-surface z-50 p-6 flex flex-col gap-6 md:hidden transition-transform duration-300 ${menuAbierto ? 'translate-x-0' : 'translate-x-full'}`}>
                <Link to="/" onClick={() => setMenuAbierto(false)} className="hover:text-primary transition">Inicio</Link>
                <Link to="/catalogo" onClick={() => setMenuAbierto(false)} className="hover:text-primary transition">Catálogo</Link>
                <Link to="/contacto" onClick={() => setMenuAbierto(false)} className="hover:text-primary transition">Contacto</Link>
            </div>
        </nav>
    )
}

export default Navbar