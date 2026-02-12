import { Activity, Baby, Eye, Heart, Microscope, Radio, Scan, Stethoscope } from "lucide-react";

const Especialidades = () => {
    function SpecialtyCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
        return (
            <div className="bg-gradient-to-br from-[#B8D430]/20 to-transparent backdrop-blur-sm border-2 border-[#B8D430]/30 p-6 rounded-2xl hover:border-[#B8D430] transition-all duration-300">
                <div className="text-[#B8D430] mb-4 flex justify-center">{icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
                <p className="text-gray-300 text-sm text-center leading-relaxed">{description}</p>
            </div>
        );
    }


    return (
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

    )
}

export default Especialidades 