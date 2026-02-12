const cleanPhone = (phone: String) => String(phone || "").replace(/[^\d]/g, "");

const AgendarCita = () => {
    const phone = "+18493583133"; 
    const message = "Hola, quisiera obtener informacion...";
    // position = "right",
    const bottom = 24;

    const p = cleanPhone(phone);
    const text = encodeURIComponent(message || "");
    const url = `https://wa.me/${p}?text=${text}`;

    return (
        <>
            <button
                className="border-2 border-[#B8D430] text-[#B8D430] px-8 py-4 rounded-full font-semibold hover:bg-[#B8D430] hover:text-[#002B5C] transition-all"
            >
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ bottom }}
                    aria-label="WhatsApp"
                    title="WhatsApp"
                >
                    Agendar Cita
                </a>
            </button>
        </>
    )
}

export default AgendarCita