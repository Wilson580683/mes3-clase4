import React from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

const Carrito = () => {

    
    const {
        carrito,
        eliminarDelCarrito,
        actualizarCantidad,
        vaciarCarrito,
        totalArticulos,
        totalPrecio,
       
    } = useCarrito();


    // La confirmación vive en el Contexto (eliminarDelCarrito y vaciarCarrito),
    // por eso aquí llamamos a los métodos directamente.

    // Estado vacío 
    if (carrito.length === 0) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-20 text-center">
                <div className="text-6xl mb-4">🛒</div>
                <h1 className="text-2xl font-black text-white mb-2">Tu carrito está vacío</h1>
                <p className="text-slate-400 text-sm mb-8">
                    Explora el catálogo y agrega tus productos favoritos.
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all no-underline"
                >
                    Explorar catálogo
                </Link>
            </div>
        );
    }

    
    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-2xl md:text-3xl font-black text-white mb-8">
                Carrito de Compras ({totalArticulos} {totalArticulos === 1 ? 'artículo' : 'artículos'})
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Lista de productos */}
                <div className="lg:col-span-2 space-y-3">
                    {carrito.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-20 h-20 object-contain bg-black/40 rounded-xl p-2 border border-slate-800 shrink-0"
                            />

                            <div className="grow min-w-0">
                                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                                    {item.category}
                                </span>
                                <Link
                                    to={`/detalle/${item.id}`}
                                    className="font-bold text-white text-sm hover:text-emerald-400 transition-colors line-clamp-1 no-underline"
                                >
                                    {item.title}

                                </Link>
                                <span className="text-slate-500 text-xs  block">Precio: $ {item.price} c/u</span>
                                <p className="text-slate-500 text-xs  block">Porcentaje de Descuento: $ {item.discountPercentage}% c/u</p>
                                <span className="text-emerald-400 text-s font-bold">
                                    Precio con Descuento: $ {(item.price - (item.price * item.discountPercentage) / 100).toFixed(2)} c/u
                                </span>
                                <div>
                                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block">Existencia: {item.stock} c/u</span>
                                </div>

                            </div>

                            {/* Controles de cantidad */}
                            <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1 shrink-0">
                                <button
                                    type="button"
                                    onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                                    className="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg font-bold transition-all cursor-pointer"
                                    title="Disminuir"
                                >
                                    −
                                </button>
                                <span className="w-9 text-center font-bold text-white text-sm">{item.cantidad}</span>
                                <button
                                    type="button"
                                    onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                                    className="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg font-bold transition-all cursor-pointer"
                                    title="Aumentar"
                                >
                                    +
                                </button>
                            </div>

                            {/* Subtotal + eliminar */}
                            <div className="text-right shrink-0">
                                <div className="font-black text-white">$ {(item.price * item.cantidad).toFixed(2)}</div>
                                {/* 👉 AGREGAR ESTA LÍNEA PARA EL SUBTOTAL EN BS */}
                                <div className="text-xs text-slate-400 font-semibold">Bs. {(item.price * item.cantidad * tasaCambio).toFixed(2)}</div>
                                <button
                                    type="button"
                                    onClick={() => eliminarDelCarrito(item.id)}
                                    className="text-rose-400 hover:text-rose-300 text-[11px] font-bold cursor-pointer mt-1"
                                >
                                    🗑️ Eliminar
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className='flex justify-end'>
                        <button
                            type="button"
                            onClick={vaciarCarrito}
                             className="p-3.5 bg-gray-600 hover:bg-red-900 text-white font-bold rounded-2xl transition-all cursor-pointer"
                        >
                            Vaciar todo el carrito
                        </button>
                    </div>
                </div>

                {/* Resumen del pedido */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 lg:sticky lg:top-24">
                    <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                        Resumen del pedido
                    </h2>
                    <div className="flex justify-between text-sm text-slate-400">
                        <span>Artículos</span>
                        <span className="font-semibold text-white">{totalArticulos}</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400">
                        <span>Envío</span>
                        <span className="font-semibold text-emerald-400">Gratis</span>
                    </div>
                    <div className="border-t border-slate-800 pt-4 flex justify-between items-baseline">
                        <span className="font-bold text-white">Total</span>
                        <span className="text-3xl font-black text-emerald-400">$ {totalPrecio.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-slate-800 pt-4 space-y-2">


                        {/* 👉 AGREGAR BLOQUE DE TOTAL EN BS */}
                        <div className="flex justify-between items-baseline pt-2 border-t border-slate-800/60">
                            <span className="font-bold text-slate-300 text-sm">Total VES</span>
                            <span className="text-xl font-bold text-white">Bs. {totalPrecioVES.toFixed(2)}</span>
                        </div>

                        {/* 👉 AGREGAR REFERENCIA DE LA TASA */}
                        <p className="text-[11px] text-slate-500 text-right pt-1">
                            Tasa BCV ref: <span className="font-semibold text-slate-400">Bs. {tasaCambio.toFixed(2)} / $</span>
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => alert('¡Compra simulada! Cerraremos el flujo completo en la próxima clase.')}
                        className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all cursor-pointer"
                    >
                        Finalizar compra
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carrito;