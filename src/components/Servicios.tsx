import { Activity, Baby, Heart, Microscope, Radio, Scan } from "lucide-react";

const Servicios = () => {
    function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
        return (
            <div className="bg-[#002B5C] text-white p-8 rounded-2xl shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-[#B8D430] mb-4">{icon}</div>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
        );
    }

    return (
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
                        description="Estudios obstétricos, ginecológicos, de mamas, de tiroides, pelvicos, de escroto, partes blancas y hombro-cuello-rodilla."
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
    ) 
}

export default Servicios 