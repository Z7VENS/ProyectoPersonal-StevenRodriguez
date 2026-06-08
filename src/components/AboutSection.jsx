import React from 'react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-black border-t border-zinc-900 relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Lado Izquierdo: Título Impactante */}
          <div className="w-full md:w-1/2">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.6em] mb-4 block">
              The Warehouse Ethos
            </span>
            <h2 className="text-6xl md:text-7xl font-black italic uppercase text-white leading-[0.9] tracking-tighter mb-8">
              CURATED <br /> 
              <span className="text-zinc-800">FOR THE</span> <br /> 
              ELITE 1%
            </h2>
          </div>

          {/* Lado Derecho: Manifiesto */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-zinc-400 text-lg leading-relaxed font-medium">
              En <span className="text-white font-bold">Warehouse CR</span>, nuestra misión trasciende la simple venta de equipo. Somos un puente entre la ingeniería técnica y el rendimiento humano.
            </p>
            
            <p className="text-zinc-500 text-base leading-relaxed">
              Nacidos en Liberia, Guanacaste, seleccionamos cada pieza de nuestro arsenal bajo tres pilares innegociables: <span className="text-zinc-200">durabilidad absoluta</span>, <span className="text-zinc-200">estética minimalista</span> y <span className="text-zinc-200">funcionalidad probada</span> en combate.
            </p>

            <div className="pt-8 flex gap-10 border-t border-zinc-900">
              <div>
                <p className="text-white font-black text-2xl italic tracking-tighter">LIB</p>
                <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Base de Ops</p>
              </div>
              <div>
                <p className="text-white font-black text-2xl italic tracking-tighter">2026</p>
                <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Establecido</p>
              </div>
              <div>
                <p className="text-white font-black text-2xl italic tracking-tighter">BJJ/TECH</p>
                <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Especialidad</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;