"use client";

import { useState } from "react";

export const useCineState = () => {
  const [salaSeleccionada, setSalaSeleccionada] = useState("sala1");
  const [asientos, setAsientos] = useState(Array(40).fill(false));

  const seleccionarSala = (sala) => {
    setSalaSeleccionada(sala);
    setAsientos(Array(40).fill(false)); // Reiniciar asientos al cambiar de sala
  };

  const toggleAsiento = (index) => {
    setAsientos((prevAsientos) => {
      const nuevosAsientos = [...prevAsientos];
      nuevosAsientos[index] = !nuevosAsientos[index];
      return nuevosAsientos;
    });
  };

  const resetAsientos = () => {
    setAsientos(Array(40).fill(false));
  };

  const total = asientos.filter((ocupado) => ocupado).length * 10; // Precio fijo de $10 por asiento

  return { salaSeleccionada, seleccionarSala, asientos, toggleAsiento, total, resetAsientos };
};
