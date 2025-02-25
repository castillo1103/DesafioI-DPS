import Asiento from "./Asientos";

const SalaCine = ({ asientos, toggleAsiento }) => {
  return (
    <div className="sala-cine">
      {asientos.map((ocupado, index) => (
        <Asiento key={index} index={index} ocupado={ocupado} toggleAsiento={toggleAsiento} />
      ))}
    </div>
  );
};

export default SalaCine;
