import React from 'react';

const Hero = ({ titulo, subtitulo }) => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none  object-top opacity-60"
      >
        <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* Overlay de gradiente para estilo Dark Luxury */}
      <div className="absolute z-10 w-full h-full bg-gradient-to-b from-black/20 via-black/40 to-black"></div>

      {/* Contenido Principal */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white uppercase leading-none">
          {titulo || "THE FIGHTERS WAREHOUSE"}
        </h1>
        <p className="mt-8 text-xl md:text-2xl text-zinc-300 font-medium max-w-2xl mx-auto leading-relaxed">
          {subtitulo || "Distribuidor oficial de las mejores marcas de BJJ y MMA en Costa Rica."}
        </p>
        
        
        
      </div>

      {/* Indicador de Scroll Decorativo */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-orange-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;