import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o3o2tsk",   // 🔹 tu Service ID
        "template_ya4c61e",  // 🔹 tu Template ID
        form.current,
        "NBKcJaw_TB_V0l5kn"     // 🔹 tu Public Key
      )
      .then(
        (result) => {
          alert("✅ Mensaje enviado correctamente");
          form.current.reset();
        },
        (error) => {
          alert("❌ Error al enviar el mensaje, intenta de nuevo");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-16   text-white dark:bg-gray-100 dark:text-gray-900 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-400 dark:text-blue-600">Contacto</h2>
        <p className="text-sm text-gray-300 dark:text-gray-700 mb-6">
          Estoy disponible para nuevos proyectos y colaboraciones.
        </p>

        <form ref={form} onSubmit={sendEmail} className="grid gap-3">
          <input
            className="p-3 rounded bg-gray-800 dark:bg-gray-200 dark:text-gray-900"
            type="text"
            name="user_name"
            placeholder="Tu nombre"
            required
          />
          <input
            className="p-3 rounded bg-gray-800 dark:bg-gray-200 dark:text-gray-900"
            type="email"
            name="user_email"
            placeholder="Tu email"
            required
          />
          <textarea
            className="p-3 rounded bg-gray-800 dark:bg-gray-200 dark:text-gray-900"
            name="message"
            rows="5"
            placeholder="Mensaje"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 rounded bg-[var(--accent)] text-black font-semibold w-max hover:bg-yellow-400 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
