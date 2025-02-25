"use client"
import React from "react";

const ResumenCompra = ({ total, resetAsientos }) => {
  const realizarCompra = () => {
    if (total === 0) {
      alert("No has seleccionado ningún asiento.");
      return;
    }
    
    alert("¡Compra realizada con éxito!");
    resetAsientos(); // Reinicia la selección de asientos
  };

  return (
    <div className="resumen-compra">
      <h2>Resumen de Compra</h2>
      <p>Total: ${total}</p>
      <button onClick={realizarCompra} className="btn-compra">
        Realizar Compra
      </button>
    </div>
  );
};

export default ResumenCompra;
