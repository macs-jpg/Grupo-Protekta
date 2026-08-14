import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";

// reemplazar "protekta" por el logo real cuando llegue
function Header() {
  return (
    <header className="bg-surface border-b border-border px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link to= "/"
             className="font-bold text-lg text-ink">PROTEKTA</Link>
      <Navbar></Navbar>
    </header>
  );
}

export default Header;
