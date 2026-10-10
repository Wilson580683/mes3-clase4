import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Inicio from './pages/Inicio';
import Error404 from './pages/Error404';
import Categorias from './pages/Categorias';
import Detalle from './pages/Detalle';
import ScrollToTop from './components/ScrollToTop';


// 🟢 FASE 1: Maqueta base limpia sin dependencias de router. Cero errores.
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
        {/* 1. Barra de navegación fija */}
        <Header />

        {/* 2. Contenido principal: Pantalla de Bienvenida */}
        <main className="flex-grow">

          <Routes>

            <Route path ='/' element={<Inicio/>}  />


             {/* 🚀 RUTA DINÁMICA: Categoría universal */}
            {/* :slug atiende laptops, smartphones, fragrances... ¡sin duplicar archivos! */}
            <Route path="/categoria/:slug" element={<Categorias />} />

            {/* 🚀 NUEVA RUTA DINÁMICA: Ficha de producto individual (:id) */}
            <Route path="/detalle/:id" element={<Detalle />} />
      


            <Route path='*' element={<Error404/>}/>

          </Routes>


        </main>

        {/* 3. Pie de página comercial */}
        <Footer />
      </div>

    </BrowserRouter>
  );
};

export default App;