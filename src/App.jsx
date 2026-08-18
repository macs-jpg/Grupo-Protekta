import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Contacto from "./pages/Contacto.jsx";
import ProductoDetalle from "./pages/ProductoDetalle.jsx";
//import Noticias from './pages/Noticias.jsx'
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/catalogo/:id" element={<ProductoDetalle />} />
          {/* <Route path="/noticias" element={<Noticias />} /> */}
        </Routes>
      </main>
      <Footer />

      <a
        href="https://wa.me/522204290450?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20productos%20y%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition"
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
      </a>
    </div>
  );
}

export default App;
