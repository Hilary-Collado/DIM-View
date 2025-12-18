import { Activity, Microscope, Heart, Baby, Stethoscope, Radio, Eye, Scan } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-gradient-to-r from-[#002B5C] to-[#003D7A] text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/dim-logo.jpg" alt="DIM Logo" className="h-12 w-12 rounded-full" />
              <span className="text-2xl font-bold">DIM</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-[#B8D430] transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="hover:text-[#B8D430] transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('especialidades')} className="hover:text-[#B8D430] transition-colors">
                Especialidades
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="hover:text-[#B8D430] transition-colors">
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="bg-[#B8D430] text-[#002B5C] px-6 py-2 rounded-full font-semibold hover:bg-[#A4D233] transition-colors"
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="inicio" className="min-h-screen bg-gradient-to-br from-[#001A3D] via-[#002B5C] to-[#003D7A] text-white pt-24 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 border-2 border-[#B8D430] rounded-full mb-6">
              <span className="text-[#B8D430] font-medium">Diagnóstico Médico de Precisión</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Tecnología Avanzada en
              <span className="text-[#B8D430]"> Imágenes Médicas</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              DIM ofrece servicios de diagnóstico por imágenes con equipamiento de última generación y profesionales altamente calificados para el cuidado de tu salud.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('servicios')}
                className="bg-[#B8D430] text-[#002B5C] px-8 py-4 rounded-full font-semibold hover:bg-[#A4D233] transition-all transform hover:scale-105 shadow-lg"
              >
                Ver Servicios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="border-2 border-[#B8D430] text-[#B8D430] px-8 py-4 rounded-full font-semibold hover:bg-[#B8D430] hover:text-[#002B5C] transition-all"
              >
                Agendar Cita
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-8">
              +15 años de experiencia en diagnóstico por imágenes médicas
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#B8D430]/20 to-transparent rounded-3xl p-8 backdrop-blur-sm border border-[#B8D430]/30">
              <img
                src="/dim-logo.jpg"
                alt="DIM - Diagnósticos e Imágenes Médicas"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 bg-gradient-to-br from-[#B8D430] to-[#A4D233]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002B5C] mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-[#002B5C]/80 max-w-3xl mx-auto">
              Ofrecemos un amplio rango de estudios diagnósticos con tecnología de vanguardia y atención personalizada
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Baby className="w-12 h-12" />}
              title="Sonografías"
              description="Estudios obstétricos, ginecológicos, de mamas, abdominales y más con equipos de alta resolución."
            />
            <ServiceCard
              icon={<Microscope className="w-12 h-12" />}
              title="Biopsias"
              description="Biopsias guiadas por ultrasonido de tiroides y mamas realizadas por especialistas."
            />
            <ServiceCard
              icon={<Activity className="w-12 h-12" />}
              title="Densitometría Ósea"
              description="Evaluación precisa de la densidad mineral ósea para diagnóstico de osteoporosis."
            />
            <ServiceCard
              icon={<Scan className="w-12 h-12" />}
              title="Mamografía Digital"
              description="Detección temprana de patologías mamarias con tecnología digital de última generación."
            />
            <ServiceCard
              icon={<Heart className="w-12 h-12" />}
              title="Estudios de Gestación"
              description="Ecografías genéticas, morfológicas y seguimiento completo del embarazo."
            />
            <ServiceCard
              icon={<Radio className="w-12 h-12" />}
              title="Doppler"
              description="Estudios doppler carotídeo y periférico para evaluación del flujo sanguíneo."
            />
          </div>
        </div>
      </section>

      <section id="especialidades" className="py-20 bg-gradient-to-br from-[#001A3D] to-[#002B5C] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Especialidades Médicas</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Áreas especializadas con profesionales expertos dedicados a tu salud
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpecialtyCard
              icon={<Baby className="w-16 h-16" />}
              title="Obstetricia"
              description="Seguimiento integral del embarazo con ecografías 2D, 3D y 4D."
            />
            <SpecialtyCard
              icon={<Heart className="w-16 h-16" />}
              title="Ginecología"
              description="Estudios especializados para la salud de la mujer."
            />
            <SpecialtyCard
              icon={<Eye className="w-16 h-16" />}
              title="Diagnóstico por Imágenes"
              description="Tecnología de punta para diagnósticos precisos."
            />
            <SpecialtyCard
              icon={<Stethoscope className="w-16 h-16" />}
              title="Medicina Preventiva"
              description="Detección temprana y prevención de enfermedades."
            />
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002B5C] mb-6">¿Por qué elegir DIM?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Somos un centro de diagnóstico por imágenes comprometido con la excelencia médica, utilizando tecnología de última generación y contando con un equipo de profesionales altamente capacitados.
              </p>
              <div className="space-y-4">
                <FeatureItem text="Equipos de última generación con tecnología digital" />
                <FeatureItem text="Médicos especialistas certificados" />
                <FeatureItem text="Resultados rápidos y precisos" />
                <FeatureItem text="Atención personalizada y cálida" />
                <FeatureItem text="Amplio horario de atención" />
                <FeatureItem text="Convenios con principales obras sociales" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatCard number="15+" label="Años de Experiencia" />
              <StatCard number="50K+" label="Pacientes Atendidos" />
              <StatCard number="100%" label="Equipos Digitales" />
              <StatCard number="24/7" label="Resultados Online" />
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 bg-gradient-to-br from-[#B8D430] to-[#A4D233]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002B5C] mb-4">Contactanos</h2>
            <p className="text-xl text-[#002B5C]/80">
              Estamos aquí para atenderte. Agenda tu cita hoy mismo.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#002B5C] mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <ContactItem
                    icon={<Activity className="w-6 h-6" />}
                    title="Teléfono"
                    info="+54 11 1234-5678"
                  />
                  <ContactItem
                    icon={<Microscope className="w-6 h-6" />}
                    title="Email"
                    info="info@dim-medica.com"
                  />
                  <ContactItem
                    icon={<Heart className="w-6 h-6" />}
                    title="Horarios"
                    info="Lun-Vie: 8:00-20:00 | Sáb: 9:00-13:00"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#002B5C] mb-6">Solicitar Información</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#B8D430] focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#B8D430] focus:outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Mensaje o consulta"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#B8D430] focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#002B5C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#001A3D] transition-colors shadow-lg"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#001A3D] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/dim-logo.jpg" alt="DIM" className="h-12 w-12 rounded-full" />
                <span className="text-2xl font-bold">DIM</span>
              </div>
              <p className="text-gray-400">
                Diagnósticos e Imágenes Médicas. Tecnología y profesionalismo al servicio de tu salud.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#B8D430]">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sonografías</li>
                <li>Biopsias</li>
                <li>Densitometría</li>
                <li>Mamografía</li>
                <li>Doppler</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#B8D430]">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tel: +54 11 1234-5678</li>
                <li>Email: info@dim-medica.com</li>
                <li>Lun-Vie: 8:00-20:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DIM - Diagnósticos e Imágenes Médicas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-[#002B5C] text-white p-8 rounded-2xl shadow-xl hover:transform hover:scale-105 transition-all duration-300">
      <div className="text-[#B8D430] mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

function SpecialtyCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gradient-to-br from-[#B8D430]/20 to-transparent backdrop-blur-sm border-2 border-[#B8D430]/30 p-6 rounded-2xl hover:border-[#B8D430] transition-all duration-300">
      <div className="text-[#B8D430] mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-300 text-sm text-center leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="bg-[#B8D430] rounded-full p-1 mt-1">
        <Activity className="w-4 h-4 text-[#002B5C]" />
      </div>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-gradient-to-br from-[#002B5C] to-[#003D7A] p-6 rounded-2xl text-center shadow-xl">
      <div className="text-4xl font-bold text-[#B8D430] mb-2">{number}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}

function ContactItem({ icon, title, info }: { icon: React.ReactNode; title: string; info: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="bg-[#B8D430] text-[#002B5C] p-2 rounded-lg">{icon}</div>
      <div>
        <h4 className="font-semibold text-[#002B5C]">{title}</h4>
        <p className="text-gray-600">{info}</p>
      </div>
    </div>
  );
}

export default App;
