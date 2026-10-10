import React from 'react';

const Inicio = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-center">
      {/* Insignia superior */}
      <span className="px-3.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-4">
        Proyecto ARSISTEMA
      </span>

      {/* Título principal */}
      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
        Bienvenidos a <span className="text-emerald-400">Todo en repuestos</span>
      </h1>

      {/* Subtítulo / Descripción */}
      <p className="text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Tu catálogo en línea de componentes automotrices, partes de motor y soluciones mecánicas de alta calidad.
      </p>

      {/* Tarjetas de acceso rápido (Grid de 6 opciones) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto text-left">
        
        {/* Tarjeta 1: Componentes de Motor */}
        <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-emerald-500/40 transition-all cursor-pointer group">
          <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-200">
            ⚙️
          </span>
          <h3 className="text-white font-bold text-base mb-1 group-hover:text-emerald-400 transition-colors">
            Partes de Motor
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Pistones, empaquetaduras, válvulas y kits de tiempo de alto rendimiento.
          </p>
        </div>

        {/* Tarjeta 2: Sistema Eléctrico */}
        <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-emerald-500/40 transition-all cursor-pointer group">
          <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-200">
            ⚡
          </span>
          <h3 className="text-white font-bold text-base mb-1 group-hover:text-emerald-400 transition-colors">
            Sistema Eléctrico
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Alternadores, arranques, bobinas, bujías y baterías de alto consumo.
          </p>
        </div>

        {/* Tarjeta 3: Frenos y Seguridad */}
        <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-emerald-500/40 transition-all cursor-pointer group">
          <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-200">
            🛑
          </span>
          <h3 className="text-white font-bold text-base mb-1 group-hover:text-emerald-400 transition-colors">
            Sistema de Frenos
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Pastillas, discos, tambores, cilindros y líquidos de freno especificados.
          </p>
        </div>

        {/* Tarjeta 4: Suspensión y Dirección */}
        <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-emerald-500/40 transition-all cursor-pointer group">
          <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-200">
            🛠️
          </span>
          <h3 className="text-white font-bold text-base mb-1 group-hover:text-emerald-400 transition-colors">
            Suspensión y Tren
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Amortiguadores, bujes, rótulas, muñones y terminales de dirección.
          </p>
        </div>

        {/* Tarjeta 5: Filtros y Fluidos */}
        <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-emerald-500/40 transition-all cursor-pointer group">
          <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-200">
            🛢️
          </span>
          <h3 className="text-white font-bold text-base mb-1 group-hover:text-emerald-400 transition-colors">
            Filtros y Lubros
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Aceites sintéticos, filtros de aire, aceite, combustible y refrigerantes.
          </p>
        </div>

        {/* Tarjeta 6: Transmisión y Embriague */}
        <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-emerald-500/40 transition-all cursor-pointer group">
          <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-200">
            🔧
          </span>
          <h3 className="text-white font-bold text-base mb-1 group-hover:text-emerald-400 transition-colors">
            Transmisión
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Kits de croché/embrague, tripoides, manguetas y componentes de caja.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Inicio;