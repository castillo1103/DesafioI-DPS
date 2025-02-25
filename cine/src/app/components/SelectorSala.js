const SelectorSala = ({ salaSeleccionada, seleccionarSala }) => {
    return (
      <div className="selector-sala">
        <button onClick={() => seleccionarSala("sala1")} className={salaSeleccionada === "sala1" ? "activo" : ""}>Sala 1</button>
        <button onClick={() => seleccionarSala("sala2")} className={salaSeleccionada === "sala2" ? "activo" : ""}>Sala 2</button>
      </div>
    );
  };
  
  export default SelectorSala;