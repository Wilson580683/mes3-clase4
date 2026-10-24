import { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();


export const CarritoProvider = ({ children }) => {
  // El carrito es un arreglo de productos; cada producto lleva su 'cantidad'.
  const [carrito, setCarrito] = useState([]);

  const [modalConfirmacion, setModalConfirmacion] = useState({
    abierto: false,
    titulo: '',
    mensaje: '',
    onConfirmar: null,
  });

  // 1) AGREGAR: si el producto ya existe, solo sube la cantidad.
  const agregarAlCarrito = (producto, cantidad = 1) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);

      if (existe) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }

      return [...prev, { ...producto, cantidad }];
    });
  };

  // 2) ELIMINAR: saca el producto por completo del carrito (pide confirmación).
 const eliminarDelCarrito = (id) => {
    const producto = carrito.find((item) => item.id === id);
    const nombre = producto ? `"${producto.title}"` : 'este producto';

    setModalConfirmacion({
      abierto: true,
      titulo: '¿Eliminar producto?',
      mensaje: `¿Seguro que deseas eliminar ${nombre} del carrito?`,
      onConfirmar: () => {
        setCarrito((prev) => prev.filter((item) => item.id !== id));
        setModalConfirmacion((prev) => ({ ...prev, abierto: false }));
      },
    });
  };

  // 3) ACTUALIZAR CANTIDAD: cambia el número exacto. Si llega a 0, elimina.
  const actualizarCantidad = (id, cantidad) => {
    if (cantidad <= 0) {
      eliminarDelCarrito(id);
      return;
    }
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad } : item
      )
    );
  };

  // 4) VACIAR: deja el carrito en cero (pide confirmación).
  const vaciarCarrito = () => {
   setModalConfirmacion({
      abierto: true,
      titulo: '¿Vaciar carrito?',
      mensaje: '¿Seguro que deseas vaciar todo el carrito?',
      onConfirmar: () => {
        setCarrito([]);
        setModalConfirmacion((prev) => ({ ...prev, abierto: false }));
},
    });
  };

  const [tasaCambio, setTasaCambio] = useState(36.5);

  // VALORES DERIVADOS: se recalculan solos cuando el carrito cambia.
 const totalArticulos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );

  // 👉 AGREGAR ESTO:
  const totalPrecioVES = totalPrecio * tasaCambio;

  
  return (
  <CarritoContext.Provider
     value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        actualizarCantidad,
        vaciarCarrito,
        totalArticulos,
        totalPrecio,
        totalPrecioVES,
        tasaCambio,
        setTasaCambio,
      }}
    >
      {children}
    {/* MODAL DE CONFIRMACIÓN GLOBAL */}
      {modalConfirmacion.abierto && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-sm w-full shadow-2xl space-y-4 text-center animate-in fade-in zoom-in duration-200">
            <div className="text-4xl">⚠️</div>
            <h3 className="text-lg font-bold text-white">{modalConfirmacion.titulo}</h3>
            <p className="text-slate-400 text-sm">{modalConfirmacion.mensaje}</p>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setModalConfirmacion((prev) => ({ ...prev, abierto: false }))}
                className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-all cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={modalConfirmacion.onConfirmar}
                className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs transition-all cursor-pointer"
              >
                Sí, aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe usarse dentro de un <CarritoProvider>');
  }
  return context;
};