import { useState, useCallback } from "react";

const Compteur = ({ valeurInitiale = 0, increment = 1 }) => {
  const [valeur, setValeur] = useState(valeurInitiale);

  const augmenter = useCallback(() => {
    setValeur((prevValeur) => prevValeur + increment);
  }, [increment]);

  const diminuer = useCallback(() => {
    setValeur((prevValeur) => prevValeur - increment);
  }, [increment]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Compteur : {valeur}</h2>
      <button onClick={diminuer}>-{increment}</button>
      <button onClick={augmenter}>+{increment}</button>
    </div>
  );
};

export default Compteur;
