import React, { useState, useRef, useEffect } from 'react';

const testimoniosData = [
  {
    id: 1,
    nombre: "Carlos Rivera",
    rango: "Cinturón Negro BJJ",
    texto: "El equipo de Warehouse CR aguantó los campamentos más duros en Guanacaste. La calidad de la tela gi es de otro nivel. Cero rasgaduras tras meses de sparring pesado.",
    audioSrc: "/assets/audio/testimonio1.mp4", 
  },
  {
    id: 2,
    nombre: "Alan Fallas",
    rango: "Peleador Pro MMA",
    texto: "Los rashguards de aquí son como una segunda piel. Y el servicio en Liberia es rápido y directo. Si compites en serio, este es tu arsenal definitivo.",
    audioSrc: "/assets/audio/testimonio2.mp4", 
  }
];

// Sub-componente para cada Tarjeta de Testimonio
const TestimonialCard = ({ testimonio, isPlaying, onTogglePlay }) => {
  const audioRef = useRef(null);

  // Efecto reactivo: Si 'isPlaying' cambia, reproducimos o pausamos
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(e => console.log("Error al reproducir:", e));
    } else {
      audioRef.current.pause();
      // audioRef.current.currentTime = 0; 
    }
  }, [isPlaying]);

  return (
    <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-3xl hover:border-red-600/50 transition-colors flex flex-col justify-between">
      <p className="text-zinc-400 italic mb-8 leading-relaxed">"{testimonio.texto}"</p>
      
      <div className="flex items-center justify-between border-t border-zinc-900 pt-6">
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-sm">{testimonio.nombre}</h4>
          <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.2em]">{testimonio.rango}</span>
        </div>
        
        {/* Botón Play/Pause */}
        <button 
          onClick={() => onTogglePlay(testimonio.id)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
            isPlaying 
              ? 'bg-red-600 text-white shadow-[0_0_15px_#ff0000]' 
              : 'bg-zinc-800 text-zinc-400 hover:bg-white hover:text-black'
          }`}
        >
          {isPlaying ? (
            // Icono de Pausa
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            // Icono de Play
            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Elemento de audio oculto - Al terminar de sonar, reseteamos el estado */}
      <audio 
        ref={audioRef} 
        src={testimonio.audioSrc} 
        onEnded={() => onTogglePlay(testimonio.id)} 
        className="hidden"
      />
    </div>
  );
};

// Componente Principal de Testimonios
const Testimonials = () => {
  // Estado para controlar qué audio está sonando. null = ninguno.
  const [activeAudioId, setActiveAudioId] = useState(null);

  const handleTogglePlay = (id) => {
    // Si clickeamos el que ya está sonando, lo pausamos. Si no, activamos el nuevo.
    if (activeAudioId === id) {
      setActiveAudioId(null);
    } else {
      setActiveAudioId(id);
    }
  };

  return (
    <section className="py-24 bg-black border-t border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.6em] block mb-4">
              Reportes de Campo
            </span>
            <h2 className="text-5xl font-black italic uppercase text-white tracking-tighter">
              Aprobado en <br/><span className="text-zinc-800">Combate</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-reveal">
          {testimoniosData.map(testimonio => (
            <TestimonialCard 
              key={testimonio.id} 
              testimonio={testimonio}
              isPlaying={activeAudioId === testimonio.id}
              onTogglePlay={handleTogglePlay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;