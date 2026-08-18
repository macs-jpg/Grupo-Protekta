import Carousel from "../components/Carousel";
import Card from "../components/ui/card";
import { Link } from "react-router-dom";
import { ShieldCheck, Clock, BadgeCheck, Handshake } from "lucide-react";
const valores = [
  {
    Icono: ShieldCheck,
    titulo: "Experiencia comprobada",
    descripcion: "Años brindando soluciones de seguridad confiables en puebla",
  },
  {
    Icono: Clock,
    titulo: "Atencion personalizada",
    descripcion: "Brindamos una atención personalizada a tus necesidades",
  },
  {
    Icono: BadgeCheck,
    titulo: "Equipo certificado",
    descripcion: "Productos y personal capacitado bajo estandares de calidad",
  },
  {
    Icono: Handshake,
    titulo: "Confianza",
    descripcion: "Evidencia de nuestro trabajo con resultados reales",
  },
];

function Home() {
  return (
    <>
      {/* hero */}
      <section className="  relative overflow-hidden aspect-video">
        <Carousel
          imagenes={[
            "/Hero/protekta_1.jpg",
            "/Hero/protekta_2.jpeg",
            "/Hero/protekta_3.png",
          ]}
          className="w-full h-full "
        />
      </section>

      {/* Quienes somos*/}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-ink">Quiénes somos</h2>
        <p className="text-muted leading-relaxed mt-4">
          En Protekta contamos con más de 20 años de experiencia brindando
          soluciones integrales de seguridad: video vigilancia, uniformes,
          equipo antimotín y equipamiento para vehículos, con la confianza de
          nuestros clientes en toda la república.
        </p>
      </section>

      {/* valores */}
      <section className="px-6  py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6">
          {valores.map((valor) => (
            <Card key={valor.titulo} className="text-center">
              <valor.Icono className="w-10 h-10 text-primary mx-auto" />
              <h3 className="font-semibold text-ink mt-2">{valor.titulo}</h3>
              <p className="text-muted text-sm mt-2">{valor.descripcion}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className=" bg-ink  px-6 py-16 text-center">
        <h2 className=" text-3xl font-bold text-white">
          ¿Listo para mejorar tu seguridad/equipo?
        </h2>
        <p className="text-white/70 mt-3">
          Contactanos hoy y cotiza tu equipo de seguridad!
        </p>
        <Link
          to="/contacto"
          className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition"
        >
          Contáctanos
        </Link>
      </section>
    </>
  );
}

export default Home;
