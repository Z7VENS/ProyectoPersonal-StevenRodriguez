import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // Estado para manejar los errores de validación
  const [errores, setErrores] = useState({});
  
  // Estado para el ciclo de vida del envío
  const [enviado, setEnviado] = useState(false);

  // Lógica de validación pura sin librerías externas
  const validar = () => {
    const nuevosErrores = {};
    
    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'Identifícate. El nombre es obligatorio.';
    }
    
    if (!formData.email.trim()) {
      nuevosErrores.email = 'Necesitamos tu correo para contactarte.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nuevosErrores.email = 'Ingresa un correo electrónico válido.';
    }
    
    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = 'El reporte no puede ir vacío.';
    } else if (formData.mensaje.length < 10) {
      nuevosErrores.mensaje = 'Sé más específico (mínimo 10 caracteres).';
    }

    return nuevosErrores;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpiar el error en tiempo real mientras el usuario escribe
    if (errores[name]) {
      setErrores(prev => ({ ...prev, [name]: null }));
    }
  };

  // Manejo del evento submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validacion = validar();
    
    if (Object.keys(validacion).length > 0) {
      setErrores(validacion);
    } else {
      setErrores({});
      console.log("Datos listos para la base de datos:", formData);
      setEnviado(true);
      
      // Reiniciar formulario después de 3 segundos
      setTimeout(() => {
        setEnviado(false);
        setFormData({ nombre: '', email: '', mensaje: '' });
      }, 3000);
    }
  };

  return (
    <section id="contacto-form" className="py-24 bg-[#050505] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-red-600 font-black text-xs uppercase tracking-[0.6em] block mb-4">
            Comunicación Segura
          </span>
          <h2 className="text-5xl font-black italic uppercase text-white tracking-tighter">
            Únete a la <span className="text-zinc-800">Élite</span>
          </h2>
        </div>

        {enviado ? (
          <div className="bg-green-900/20 border border-green-500/50 p-10 rounded-2xl text-center animate-reveal">
            <h3 className="text-2xl font-black italic uppercase text-green-500 tracking-widest mb-2">Mensaje Recibido</h3>
            <p className="text-zinc-400 font-bold uppercase text-xs tracking-widest">
              Un especialista se pondrá en contacto pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 animate-reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Nombre */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full bg-black border ${errores.nombre ? 'border-red-600 focus:border-red-600' : 'border-zinc-800 focus:border-zinc-500'} text-white rounded-xl p-4 outline-none transition-colors`}
                  placeholder="John Doe"
                />
                {errores.nombre && <p className="text-red-500 text-xs font-bold mt-2">{errores.nombre}</p>}
              </div>

              {/* Input Email */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-black border ${errores.email ? 'border-red-600 focus:border-red-600' : 'border-zinc-800 focus:border-zinc-500'} text-white rounded-xl p-4 outline-none transition-colors`}
                  placeholder="john@elite.com"
                />
                {errores.email && <p className="text-red-500 text-xs font-bold mt-2">{errores.email}</p>}
              </div>
            </div>

            {/* Textarea Mensaje */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">
                Requerimientos
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="4"
                className={`w-full bg-black border ${errores.mensaje ? 'border-red-600 focus:border-red-600' : 'border-zinc-800 focus:border-zinc-500'} text-white rounded-xl p-4 outline-none transition-colors resize-none`}
                placeholder="Detalla tu nivel, peso y requerimientos de equipo..."
              ></textarea>
              {errores.mensaje && <p className="text-red-500 text-xs font-bold mt-2">{errores.mensaje}</p>}
            </div>

            {/* Botón Submit */}
            <button
              type="submit"
              className="w-full bg-zinc-900 text-white border border-zinc-800 font-black py-5 rounded-xl uppercase tracking-[0.2em] text-xs hover:bg-red-600 hover:border-red-600 transition-all active:scale-95"
            >
              Enviar Transmisión
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;