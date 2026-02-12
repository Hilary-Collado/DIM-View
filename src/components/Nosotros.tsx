import { Activity  } from "lucide-react";

const Nosotros = () => {


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


    return (

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
                        {/* <StatCard number="15+" label="Años de Experiencia" /> */}
                        <StatCard number="100%" label="Equipos Digitales" />
                        <StatCard number="24/7" label="Resultados Online" />
                        <StatCard number="50K+" label="Pacientes Atendidos" />
                    </div>
                </div>
            </div>


        </section>


    )
}

export default Nosotros 
