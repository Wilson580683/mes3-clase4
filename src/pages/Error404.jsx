import React from 'react';

const Error404 = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-center flex flex-col items-center justify-center min-h-[70vh]">
      {/* Insignia superior */}
      <span className="px-3.5 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-6">
        Proyecto ARSISTEMA
      </span>

      {/* Ícono temático */}
      <div className="relative mb-6">
        <span className="text-7xl md:text-8xl block select-none animate-bounce">
          ⚠️
        </span>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-emerald-500/20 rounded-full blur-sm"></div>
      </div>

      {/* Título principal */}
      <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
        Error <span className="text-emerald-400">404</span>
      </h1>

      {/* Descripción */}
      <p className="text-base text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
        La página o el recurso que buscas no está disponible en el catálogo de <strong className="text-slate-200">Todo en repuestos</strong>.
      </p>

      {/* Botones de navegación */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm">
        <a
          href="/"
          className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/10 text-sm text-center"
        >
          Volver al Inicio
        </a>
        <button
          onClick={() => window.history.back()}
          className="w-full sm:w-auto px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-semibold rounded-xl transition-all text-sm"
        >
          Página Anterior
        </button>
      </div>
    </div>
  );
};

export default Error404;