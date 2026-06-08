import React, { useState, useRef } from 'react';

const ServiceCard = ({ id, titulo, precio, imagen, descripcion, galeria, especificaciones, audio, onAgregar }) => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [imagenEnZoom, setImagenEnZoom] = useState(imagen);
  const [isZoomed, setIsZoomed] = useState(false); // Estado para el zoom
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const abrirModal = () => {
    setImagenEnZoom(imagen);
    setIsZoomed(false);
    setModalAbierto(true);
  };

  return (
    <>
      {/* CARD PRINCIPAL */}
      <div 
        onClick={abrirModal}
        className="group relative bg-zinc-900/30 border border-zinc-800 rounded-3xl overflow-hidden cursor-pointer hover:border-red-600/50 transition-all duration-500 hover:-translate-y-2"
      >
        <div className="aspect-square overflow-hidden bg-black">
          <img 
            src={imagen} 
            alt={titulo} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          />
        </div>
        <div className="p-6 text-center md:text-left">
          <h3 className="text-lg font-black uppercase italic tracking-tighter text-white mb-1">{titulo}</h3>
          <span className="text-red-600 font-black text-sm italic">{precio}</span>
        </div>
      </div>

      {/* MODAL COMPLETO */}
      {modalAbierto && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setModalAbierto(false)}></div>
          
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden flex flex-col md:flex-row animate-reveal">
            
            <button 
              onClick={() => setModalAbierto(false)}
              className="absolute top-5 right-5 z-[210] bg-zinc-900/90 hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all border border-zinc-800 shadow-xl"
            >
              <span className="text-2xl font-light">✕</span>
            </button>

            {/* IZQUIERDA: VISOR CON ZOOM */}
            <div className="w-full md:w-1/2 h-[45%] md:h-full bg-black flex items-center justify-center p-4 md:p-10 border-b md:border-b-0 md:border-r border-zinc-900 relative overflow-hidden">
              {imagenEnZoom?.includes('getAttachmentp') ? (
                <video src={imagenEnZoom} autoPlay loop muted playsInline className="max-w-full max-h-full object-contain" />
              ) : (
                <img 
                  src={imagenEnZoom} 
                  onClick={() => setIsZoomed(!isZoomed)}
                  className={`max-w-full max-h-full object-contain transition-transform duration-500 cursor-zoom-in ${
                    isZoomed ? 'scale-[1.8] cursor-zoom-out' : 'scale-100'
                  }`}
                  style={{ transformOrigin: 'center' }}
                  alt="Detalle" 
                />
              )}
              
              {!imagenEnZoom?.includes('getAttachmentp') && (
                <div className="absolute bottom-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 text-[8px] font-black uppercase tracking-[0.3em] text-zinc-400">
                  {isZoomed ? "Click para alejar" : "Click para ampliar detalle"}
                </div>
              )}
            </div>

            {/* DERECHA: INFO */}
            <div className="w-full md:w-1/2 h-[55%] md:h-full overflow-y-auto p-8 md:p-12 flex flex-col">
              <div className="mb-8">
                <span className="text-red-600 font-black text-[11px] uppercase tracking-[0.5em] mb-3 block">Arsenal Tecnológico</span>
                <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white leading-none tracking-tighter">{titulo}</h2>
              </div>

              <p className="text-zinc-300 text-base leading-relaxed mb-10">{descripcion}</p>

              {/* MINIATURAS */}
              <div className="mb-10">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">Vistas Disponibles</p>
                <div className="flex gap-4 overflow-x-auto pb-4">
                  {galeria?.map((item, idx) => (
                    <button 
                      key={idx}
                      onClick={() => { setImagenEnZoom(item); setIsZoomed(false); }}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        imagenEnZoom === item ? 'border-red-600 bg-zinc-900 scale-105' : 'border-zinc-800'
                      }`}
                    >
                      {item.includes('getAttachmentp') ? (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-[8px] font-black text-red-600 uppercase">Video</div>
                      ) : (
                        <img src={item} className="w-full h-full object-cover" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* SPECS */}
              <div className="space-y-4 mb-10 flex-1">
                {especificaciones?.map((spec, i) => (
                  <div key={i} className="flex items-center gap-4 text-white text-[11px] font-bold uppercase tracking-wider border-b border-zinc-900/50 pb-3">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    {spec}
                  </div>
                ))}
              </div>

              {/* FOOTER ACCIÓN */}
              <div className="mt-auto pt-8 border-t border-zinc-900">
                <div className="flex justify-between items-center mb-6">
                   <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest text-white/50">Valor del equipo</span>
                   <span className="text-4xl font-black text-white italic tracking-tighter">{precio}</span>
                </div>
                <button 
                  onClick={() => { onAgregar?.({ id, titulo, precio, imagen }); setModalAbierto(false); }}
                  className="w-full bg-red-600 text-white font-black py-6 rounded-2xl uppercase tracking-[0.4em] text-xs hover:bg-white hover:text-black transition-all active:scale-95"
                >
                  Añadir al Arsenal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;