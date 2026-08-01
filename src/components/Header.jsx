import { Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'


// reemplazar "LOGO EMPRESA" por el logo real cuando llegue
function Header() {
  return (
    <header className="bg-surface border-b border-border px-6 py-4 flex items-center justify-between">
      <span className="font-bold text-lg text-ink">PROTEKTA</span>
      <Navbar></Navbar>
    </header>
  )
}

export default Header
