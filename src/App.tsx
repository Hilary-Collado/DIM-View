import { Activity, Microscope, Heart, Baby, Stethoscope, Radio, Eye, Scan } from 'lucide-react';
import Contact from "./components/Contact.js";
import Servicios from './components/Servicios.js';
import Especialidades from './components/Especialidades.js';
import Nosotros from './components/Nosotros.js';
import AgendarCita from './components/Button.js';

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
              <AgendarCita 
                />
            </div>
            
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

      <Servicios />

      <Especialidades />

      <Nosotros />


      <Contact />

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
                <li>Tel: +1 (809) 685-0579</li>
                <li>Email: dimgazcue@gmail.com</li>
                <li>Lunes - Viernes: 8:00 - 06:00</li>
                <li>Sábados: 8:00 - 12:00</li>
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
