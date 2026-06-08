import React from 'react';

const Navbar = ({ cartCount, onOpenCart }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[140] bg-black/90 backdrop-blur-xl border-b border-zinc-900 px-6 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="w-10 h-10 bg-red-600 rounded-xl rotate-45 flex items-center justify-center shadow-[0_0_20px_#ff000088]">
            <span className="text-white font-black -rotate-45 text-2xl">W</span>
          </div>
          <span className="text-2xl font-black italic tracking-tighter uppercase text-white">
            Warehouse <span className="text-red-600">CR</span>
          </span>
        </div>

        {/* Navegación Refactorizada */}
        <div className="flex items-center gap-10">
          <ul className="hidden md:flex gap-10 text-sm font-semibold uppercase tracking-widest text-zinc-100">
            {[
              { name: 'Inicio', id: 'home' },
              { name: 'Arsenal', id: 'arsenal' },
              { name: 'Nosotros', id: 'nosotros' } // Cambio aquí
            ].map(item => (
              <li 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className="hover:text-red-500 cursor-pointer transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 border-l border-zinc-800 pl-10">
            {/* CARRITO */}
            <button onClick={onOpenCart} className="relative group p-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-100 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[11px] font-black w-6 h-6 flex items-center justify-center rounded-full animate-pulse shadow-[0_0_15px_#ff0000]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* BOTÓN CONTACTO (Nuevo nombre para acción directa) */}
            <button 
              onClick={() => scrollToSection('contacto-directo')}
              className="bg-white text-black px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-md active:scale-95"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;