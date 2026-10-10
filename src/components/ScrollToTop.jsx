import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente utilitario invisible que vigila los cambios de URL.
 * Cada vez que la ruta (pathname) cambia, mueve el scroll al tope (0, 0).
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Resetea suavemente la ventana arriba en cada cambio de pantalla
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'instant' para evitar parpadeos visuales al navegar
    });
  }, [pathname]);

  // No renderiza ningún elemento visual en el DOM
  return null;
};

export default ScrollToTop;