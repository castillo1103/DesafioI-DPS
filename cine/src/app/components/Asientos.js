const Asiento = ({ index, ocupado, toggleAsiento }) => {
    return (
      <button className={`asiento ${ocupado ? "ocupado" : "disponible"}`} onClick={() => toggleAsiento(index)}>
        {index + 1}
      </button>
    );
  };
  
  export default Asiento;