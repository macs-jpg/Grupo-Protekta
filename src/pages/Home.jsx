import Carousel from "../components/Carousel"

function Home() {
  return (
  <>
    {/* hero */}
    <section className="  relative overflow-hidden aspect-video">
      <Carousel 
      imagenes={[
        'https://placehold.co/1600x900/1A1A1A/FFFFFF?text=Foto+1',
        'https://placehold.co/1600x900/1A1A1A/FFFFFF?text=Foto+2',
        'https://placehold.co/1600x900/1A1A1A/FFFFFF?text=Foto+3',
      ]}
      className="w-full h-full "
      />
    </section>
    
    {/* Quienes somos*/}
    <section className="px-6 py-16 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-ink">Quiénes somos</h2>
      <p className="text-muted leading-relaxed mt-4">
          En Protekta contamos con más de X años de experiencia brindando soluciones
          integrales de seguridad: cámaras, uniformes, equipo antimotín y
          equipamiento para vehículos, con la confianza de nuestros clientes en Puebla.
      </p>
    </section>
  </>
  )
}

export default Home
