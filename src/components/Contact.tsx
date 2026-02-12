import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, type LucideIcon } from "lucide-react";
import clsx from "clsx";
// import "../styles/globals.css";
import { FaWhatsapp, type FaReact } from "react-icons/fa";

function forcePatchEnviarAndPhone(brand = "DIM"): boolean {
  const w = window as any;
  const $ = w.jQuery || w.$;

  if (typeof $ !== "function") return false;
  if (!w.mailGunServices || typeof w.getLocalPartSafe !== "function") return false;

  // guarda el original una vez
  if (!w.__ENVIAR_ORIGINAL__ && typeof w.enviarAndPhone === "function") {
    w.__ENVIAR_ORIGINAL__ = w.enviarAndPhone;
  }

  w.enviarAndPhone = function (sendmail: string) {
    const name = String($("input#name").val() || "").trim();
    const phone = String($("input#phone").val() || "").trim();
    const email = String($("input#email").val() || "").toLowerCase().trim();
    const comment = String($("textarea#comment").val() || "").trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);

    if (!name) { $.notify?.("Agregar nombre", "error"); $("input#name").focus(); return; }
    if (!email || !emailOk) { $.notify?.("Agregar email válido", "error"); $("input#email").focus(); return; }
    if (!phone) { $.notify?.("Agregar Teléfono", "error"); $("input#phone").focus(); return; }
    if (!comment) { $.notify?.("Agregar contenido", "error"); $("textarea#comment").focus(); return; }

    const htmlBody = buildContactEmailHtml({ brand, name, email, phone, message: comment });
    const textBody = buildContactEmailText({ brand, name, email, phone, message: comment });

    $.ajax(w.mailGunServices + "/send", {
      type: "POST",
      data: {
        text: textBody,
        html: htmlBody,
        subject: `${brand} | MENSAJE ENTRANTE`,
        from: w.getLocalPartSafe(sendmail) + "@oscmiapp.com",
        to: sendmail,
      },
      success: function (response: string) {
        if (response === "OK") {
          $.notify?.("Correo enviado", "success");
          $("#name").val("");
          $("#email").val("");
          $("#phone").val("");
          $("#comment").val("");
        } else {
          $.notify?.("No pudo ser enviado", "error");
        }
      },
      error: function () {
        $.notify?.("No pudo ser enviado", "error");
      },
    });
  };

  w.__ENVIAR_PATCHED__ = true;
  return true;
}



/** Extiende el tipo Window para tus scripts externos */
declare global {
  interface Window {
    $?: any;
    jQuery?: any;
    enviarAndPhone?: (destEmail: string) => void;

    // 👇 guarda el original
    __ENVIAR_ORIGINAL__?: (destEmail: string) => void;
    __ENVIAR_PATCHED__?: boolean;
  }
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  noCap?: boolean;
  className?: string;
};

const Input: React.FC<InputProps> = ({ label, noCap, className, ...props }) => (
  <label className="block">
    <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>
    <input
      {...props}
      className={clsx(
        className,
        !noCap && "perfil",
        "w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      )}
    />
  </label>
);

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  noCap?: boolean;
  className?: string;
};

const Textarea: React.FC<TextareaProps> = ({ label, noCap, className, ...props }) => (
  <label className="block">
    <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>
    <textarea
      {...props}
      className={clsx(
        className,
        !noCap &&
        "w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      )}
    />
  </label>
);

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = {
  email: string;
  phone: string;
};

type ContactInfoItem = {
  icon: LucideIcon;
  title: string;
  details: string[];
};

const isValidEmail = (email: string): boolean => {
  // validación razonable (no perfecta) para UI
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
};

const SUBJECT_FIXED = "DIM | Este contacto necesita información";

type EmailPayload = {
  brand: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

function escapeHtml(s: string = ""): string {
  return String(s).replace(/[&<>"']/g, (c) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[c] ?? c;
  });
}

function buildContactEmailHtml(payload: EmailPayload): string {
  const { brand, name, email, phone, message } = payload;
  const msg = escapeHtml(message || "-").replace(/\n/g, "<br>");
  const now = new Date().toLocaleString("es-DO");

  return `
  <div style="font-family:Arial,sans-serif; line-height:1.55; color:#111; max-width:640px">
    <h2 style="margin:0 0 10px; font-size:18px">
      ${escapeHtml(brand)} | Este contacto necesita información
    </h2>

    <div style="background:#f5f7fb; border:1px solid #e5e7eb; border-radius:12px; padding:14px">
      <p style="margin:0 0 6px"><b>Nombre:</b> ${escapeHtml(name || "-")}</p>
      <p style="margin:0 0 6px"><b>Email:</b> ${escapeHtml(email || "-")}</p>
      <p style="margin:0"><b>Teléfono:</b> ${escapeHtml(phone || "-")}</p>
    </div>

    <div style="margin-top:14px; border-top:1px solid #e5e7eb; padding-top:12px">
      <p style="margin:0 0 6px"><b>Mensaje:</b></p>
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:14px">
        ${msg || "-"}
      </div>
    </div>

    <p style="margin:14px 0 0; font-size:12px; color:#6b7280">
      Enviado desde el formulario web • ${escapeHtml(now)}
    </p>
  </div>
  `.trim();
}

function buildContactEmailText(payload: EmailPayload): string {
  const { brand, name, email, phone, message } = payload;
  const cleanMsg = (message || "-").trim();

  return `${brand} | Este contacto necesita información
Nombre: ${name || "-"}
Email: ${email || "-"}
Teléfono: ${phone || "-"}

Mensaje:
${cleanMsg}
`.trim();
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // lo tenías declarado pero no lo estabas usando en UI; lo mantengo por compatibilidad
  const [errors, setErrors] = useState<Errors>({
    email: "",
    phone: "",
  });

  // const DEST_EMAIL = "hilarycollado001@gmail.com";
  const DEST_EMAIL = "dimgazcue@gmail.com";
  
  const [scriptsReady, setScriptsReady] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    const load = (src: string): Promise<void> =>
      new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null;

        if (existing) {
          // si ya cargó, resuelve; si no, espera el load
          if ((existing as any).dataset.loaded === "1") return resolve();
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener("error", () => reject(new Error(`No se pudo cargar: ${src}`)), { once: true });
          return;
        }

        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => {
          (s as any).dataset.loaded = "1";
          resolve();
        };
        s.onerror = () => reject(new Error(`No se pudo cargar: ${src}`));
        document.body.appendChild(s);
      });



    (async () => {
      try {
        await load("https://code.jquery.com/jquery-3.6.0.min.js");

        // fuerza alias en window (muchas veces viene como window.$ y no window.jQuery)
        if (!(window as any).jQuery && (window as any).$) (window as any).jQuery = (window as any).$;
        if (!(window as any).$ && (window as any).jQuery) (window as any).$ = (window as any).jQuery;

        // luego los scripts del backend (en orden)
        await load("https://oscmiapp.com/js/jsDialog/notify.js");
        await load("https://oscmiapp.com/js/jsSentMenssage.js");

        forcePatchEnviarAndPhone("DIM");
        setTimeout(() => forcePatchEnviarAndPhone("DIM"), 100);
        setTimeout(() => forcePatchEnviarAndPhone("DIM"), 500);
        setTimeout(() => forcePatchEnviarAndPhone("DIM"), 1500);

        // scriptsReady true si existe mailGunServices y jQuery
        if (mounted) setScriptsReady(true);

      } catch {
        if (mounted) setScriptsReady(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Por favor completa nombre, email y mensaje.");
      return;
    }

    console.log("[CONTACT] scriptsReady:", scriptsReady);
    console.log("[CONTACT] window.jQuery:", typeof (window as any).jQuery);
    console.log("[CONTACT] window.$:", typeof (window as any).$);
    console.log("[CONTACT] window.enviarAndPhone:", typeof (window as any).enviarAndPhone);
    console.log("[CONTACT] mailGunServices:", (window as any).mailGunServices);

    const readyNow = typeof (window as any).enviarAndPhone === "function";
    if (!readyNow) {
      alert("No se pudo enviar el mensaje en este momento. Intenta más tarde.");
      return;
    }

    try {
      const backendComment = document.getElementById("comment") as HTMLTextAreaElement | null;
      if (backendComment) backendComment.value = formData.message;

      // 🔥 esto es lo que te faltaba: forzar el parche aquí
      forcePatchEnviarAndPhone("DIM");

      // verifica que el parche está activo
      const fnStr = window.enviarAndPhone?.toString() || "";
      console.log("[PATCH CHECK html:]", fnStr.includes("html:"));

      const sendFn = window.enviarAndPhone;
      if (typeof sendFn !== "function") {
        alert("No se pudo enviar el mensaje en este momento. Intenta más tarde.");
        return;
      }

      sendFn(DEST_EMAIL);
    } catch (err) {
      console.error(err);
      alert("No se pudo enviar el mensaje.");
    }


  };

  const contactInfo: ContactInfoItem[] = [
    {
      icon: MapPin,
      title: "Dirección",
      details: [
        "Calle Lea de Castro 55, Santo Domingo, R.D.",
      ],
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+1 (809) 685-0579"],
    },
    {
      icon: Phone,
      title: "Whatsapp",
      details: ["+1 (849) 358-3133"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["dimgazcue@gmail.com"],
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 8:00 - 06:00", "Sáb: 8:00 - 12:00"],
    },
  ];

  const sanitizeText = (value: string): string =>
    value
      .normalize("NFD")
      .replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚüÜ._\s-]/g, "");

  const sanitizeEmail = (value = ""): string => {
    let v = value.toLowerCase();
    v = v.replace(/\s+/g, "");
    v = v.replace(/[^a-z0-9@._-]/gi, "");

    const firstAt = v.indexOf("@");
    if (firstAt !== -1) {
      const before = v.slice(0, firstAt + 1);
      const after = v.slice(firstAt + 1).replace(/@/g, "");
      v = before + after;
    }
    return v;
  };

  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
    }
  };

  return (
    <div id="contacto" className="py-20 bg-gradient-to-br from-[#B8D430] to-[#A4D233]">
      <div className="min-h-screen pt-32 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Contáctanos</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg"
                  >
                    <div className="w-12 h-12 aboutMe rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 aboutMe" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    label="Nombre"
                    id="name"
                    placeholder="Nombre Apellido"
                    value={formData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const cleaned = sanitizeText(e.target.value);
                      setFormData((prev) => ({ ...prev, name: cleaned }));
                    }}
                    required
                  />

                  <Input
                    label="Email"
                    type="email"
                    noCap
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onKeyDown={handleEmailKeyDown}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const cleaned = sanitizeEmail(e.target.value);

                      setFormData((prev) => ({ ...prev, email: cleaned }));

                      // si quieres mostrar error visual, ya queda listo en state
                      const emailError =
                        cleaned && !isValidEmail(cleaned) ? "Email inválido" : "";

                      setErrors((prev) => ({ ...prev, email: emailError }));
                    }}
                    required
                  />
                </div>

                <Input
                  label="Telefono"
                  type="tel"
                  id="phone"
                  placeholder="809-000-0000"
                  inputMode="numeric"
                  maxLength={12}
                  value={formData.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const raw = e.target.value.replace(/\D/g, "");
                    const limited = raw.slice(0, 10);

                    let formatted = limited;
                    if (limited.length > 3 && limited.length <= 6) {
                      formatted = `${limited.slice(0, 3)}-${limited.slice(3)}`;
                    } else if (limited.length > 6) {
                      formatted = `${limited.slice(0, 3)}-${limited.slice(
                        3,
                        6
                      )}-${limited.slice(6)}`;
                    }

                    setFormData((prev) => ({ ...prev, phone: formatted }));
                  }}
                />

                <Textarea
                  label="Mensaje"
                  placeholder="Mensaje"
                  id="comment_ui"
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  rows={6}
                  required
                />
                <textarea id="comment" className="hidden" aria-hidden="true" tabIndex={-1} />


                <button
                  type="submit"
                  className="w-full colorDist py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </button>

                {errors.email ? (
                  <p className="text-sm text-red-600">{errors.email}</p>
                ) : null}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
