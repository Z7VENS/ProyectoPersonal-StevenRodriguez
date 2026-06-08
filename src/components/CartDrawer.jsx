import React from 'react';

const CartDrawer = ({ isOpen, onClose, items, onRemove }) => {
  const calcularTotal = () => {
    const total = items.reduce((acc, item) => {
      // Limpiamos el precio de símbolos para el cálculo
      const precioNum = parseInt(item.precio.replace(/[^0-9]/g, ''));
      return acc + (precioNum * item.cantidad);
    }, 0);
    return total;
  };

  const enviarPedidoWhatsApp = () => {
    const telefono = "506XXXXXXXX"; // Reemplaza con tu número real
    
    // Formatear lista de productos
    const listaProductos = items.map(item => 
      `• ${item.titulo} (Cant: ${item.cantidad}) - ${item.precio}`
    ).join('\n');

    const mensaje = encodeURIComponent(
      `🔥 *NUEVA ORDEN - WAREHOUSE CR*\n\n` +
      `Hola! Me interesa el siguiente equipo:\n\n` +
      `${listaProductos}\n\n` +
      `*Inversión Total: ₡${calcularTotal().toLocaleString()}*\n\n` +
      `¿Me pueden confirmar la disponibilidad?`
    );

    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-[150] transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed right-0 top-0 h-full w-full md:w-[480px] bg-zinc-950 z-[160] transition-transform duration-500 border-l border-zinc-900 flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* HEADER */}
        <div className="p-8 flex justify-between items-center border-b border-zinc-900 bg-black">
          <div>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">Tu Arsenal</h2>
            <p className="text-xs font-bold text-red-600 uppercase tracking-[0.3em] mt-1">Listo para el combate</p>
          </div>
          <button 
            onClick={onClose} 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-red-600 transition-all font-bold"
          >
            ✕
          </button>
        </div>

        {/* PRODUCTOS */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
              <p className="font-black uppercase tracking-widest text-sm text-white">Arsenal Vacío</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-5 bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800 group transition-all">
                <div className="w-20 h-20 overflow-hidden rounded-lg bg-black border border-zinc-800">
                  <img src={item.imagen} className="w-full h-full object-cover" alt={item.titulo} />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-black text-sm uppercase text-white tracking-tight leading-none">{item.titulo}</h4>
                    <button onClick={() => onRemove(item.id)} className="text-zinc-500 hover:text-red-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-xs font-bold text-zinc-100 uppercase">Cantidad: {item.cantidad}</div>
                    <p className="text-red-500 font-black text-base italic">{item.precio}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER - INTEGRACIÓN WHATSAPP */}
        <div className="p-8 bg-black border-t border-zinc-900">
          <div className="flex justify-between items-center mb-6">
            <span className="text-zinc-400 font-bold uppercase text-xs tracking-widest">Inversión Total</span>
            <span className="text-4xl font-black text-white italic tracking-tighter">
              ₡{calcularTotal().toLocaleString()}
            </span>
          </div>
          
          <button 
            onClick={enviarPedidoWhatsApp}
            disabled={items.length === 0}
            className="w-full bg-[#25D366] text-white font-black py-5 rounded-xl uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-[#25D366] transition-all disabled:opacity-20 shadow-[0_15px_30px_rgba(37,211,102,0.2)] active:scale-[0.98] flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.661 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Finalizar en WhatsApp
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;