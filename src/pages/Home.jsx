import Carousel from "../components/Carousel"

const valores  = [
  {
    // aquí va una imagen que represente el valor
    imagen: 'x',
    titulo: 'Experiencia comprobada',
    descripcion: 'Años brindando soluciones de seguridad confiables en puebla'
  },

  {
    imagen: 'x',
    titulo: 'Atencion personalizada',
    descripcion: 'Brindamos una atención personalizada a tus necesidades '
  },

  {
    imagen: 'x',
    titulo: 'Equipo certificado',
    descripcion: 'Productos y personal capacitado bajo estandares de calidad'
  },

  {
    imagen: 'x',
    titulo: 'Confianza',
    descripcion: 'Evidencia de nuestro trabajo con resultados reales'
  }
]

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

    {/* valores */}
    <section className = "px-6  py-16 max-w-5x1 mx-auto">
      <div className = "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6">
        {valores.map((valor) => (
          <div key={valor.titulo} className="bg-surface border border-border rounded-lg p-6 text-center">
            <span className="text-4xl">
              {valor.imagen}
            </span>
            <h3 className="font-semibold text ink mt-2">
              {valor.titulo}
            </h3>
            <p className="text-muted text-sm mt-2">
              {valor.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  </>
  )
}

export default Home
