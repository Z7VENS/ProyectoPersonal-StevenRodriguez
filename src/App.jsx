import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ServiceCard from './components/ServiceCard.jsx';
import AboutSection from './components/AboutSection.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import ContactForm from './components/ContactForm.jsx';
import Testimonials from './components/Testimonials.jsx';

function App() {
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState('Todos');
  const [loading, setLoading] = useState(true);

  // --- ESTADOS DEL CARRITO ---
  const [carrito, setCarrito] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch('/productos.json')
      .then(res => {
        if (!res.ok) throw new Error("Error al conectar con el inventario");
        return res.json();
      })
      .then(data => {
        setProductos(data.productos || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error en Warehouse CR:", err);
        setLoading(false);
      });
  }, []);

  // --- FUNCIONES DEL CARRITO ---
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item => 
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
    setIsCartOpen(true);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  const productosVisibles = productos.filter(p => 
    filtro === 'Todos' || p.categoria.toLowerCase() === filtro.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-600">
      
      {/* 1. NAVBAR */}
      <Navbar 
        cartCount={carrito.reduce((acc, item) => acc + item.cantidad, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      {/* 2. HERO */}
      <section id="home">
        <Hero />
      </section>
      
      {/* 3. MARCAS (Social Proof) */}
      <section className="py-12 border-y border-zinc-900 bg-black/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
           <span className="text-2xl font-black italic tracking-tighter">MANTO</span>
           <span className="text-2xl font-black italic tracking-tighter">SAFEJAWZ</span>
           <span className="text-2xl font-black italic tracking-tighter">A4F</span>
           <span className="text-2xl font-black italic tracking-tighter">VENUM</span>
        </div>
      </section>

      {/* 4. ARSENAL / PRODUCTOS */}
      <main id="arsenal" className="max-w-7xl mx-auto py-32 px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="animate-reveal">
            <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
              EQUIPO <br/> <span className="text-red-600 underline decoration-red-900/30">DE ÉLITE</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {['Todos', 'Gi', 'No-Gi', 'Accesorios'].map(cat => (
              <button 
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`px-6 py-2 rounded-xl font-black text-[9px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  filtro === cat 
                    ? 'bg-red-600 text-white shadow-[0_0_25px_#ff000066] scale-105' 
                    : 'bg-zinc-900 text-zinc-500 border border-zinc-800 hover:border-red-600/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {productosVisibles.length > 0 ? (
              productosVisibles.map(item => (
                <ServiceCard 
                  key={item.id} 
                  {...item} 
                  onAgregar={agregarAlCarrito} 
                />
              ))
            ) : (
              <div className="col-span-full text-center py-20 border border-dashed border-zinc-800 rounded-3xl">
                <p className="text-zinc-500 uppercase font-black tracking-widest text-xs">
                  No hay stock disponible en esta categoría
                </p>
              </div>
            )}
          </div>
        )}
      </main>

     
      <AboutSection />
      <Testimonials />
      <ContactForm />

      {/* 6. SECCIÓN DE CONTACTO FINAL / FOOTER (ID: contacto-directo) */}
      <footer id="contacto-directo" className="py-24 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-white font-black italic text-4xl uppercase tracking-tighter">¿Dudas Técnicas?</h3>
            <p className="text-zinc-500 text-sm mt-2 font-bold uppercase tracking-widest">
              Liberia, Guanacaste — Soporte 24/7 vía WhatsApp
            </p>
          </div>
          
          <a 
            href="https://wa.me/506XXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black font-black px-12 py-5 rounded-2xl uppercase text-[10px] tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all shadow-[0_20px_40px_rgba(255,255,255,0.05)] active:scale-95"
          >
            Hablar con un experto
          </a>
        </div>
        
        <div className="mt-20 text-center">
           <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.5em]">
              Warehouse CR — Built for the 1%
           </p>
        </div>
      </footer>

      {/* 7. CARRITO (Drawer) */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={carrito}
        onRemove={eliminarDelCarrito}
      />
    </div>
  );
}

export default App;