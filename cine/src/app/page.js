"use client";

import { useCineState } from "./Hooks/useCineState";
import SalaCine from "./components/SalaCine";
import ResumenCompra from "./components/ResumenCompra";
import SelectorSala from "./components/SelectorSala";
import Footer from "./components/Footer";
import "./styles/Cine.css";

export default function Home() {
  const { salaSeleccionada, seleccionarSala, asientos, toggleAsiento, total, resetAsientos } = useCineState();

  return (
    <div>
      <h1>Cine Astronaut</h1>
      <SelectorSala salaSeleccionada={salaSeleccionada} seleccionarSala={seleccionarSala} />
      <SalaCine asientos={asientos} toggleAsiento={toggleAsiento} />
      <ResumenCompra total={total} resetAsientos={resetAsientos} />

      <a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer" className="corner-image">
        <img src="https://i.pinimg.com/736x/30/44/f2/3044f2b8bc3bd6849e4021bb517f7b4e.jpg" alt="Publicidad" />
      </a>

      <Footer/>

    </div>
    
  );
 
}

