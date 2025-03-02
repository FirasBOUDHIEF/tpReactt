import React, { useState, useCallback, useRef } from "react";

const GestionListe = ({ valeursInitiales = [], placeholder = "Ajouter un élément..." }) => {
  const [elements, setElements] = useState(valeursInitiales);
  const [nouveauElement, setNouveauElement] = useState('');
  const inputRef = useRef(null);

  const ajouterElement = useCallback((e) => {
    e.preventDefault();
    if (nouveauElement.trim()) {
      setElements((prevElements) => [...prevElements, nouveauElement]);
      setNouveauElement('');
      inputRef.current.focus(); // Remettre le focus après l'ajout
    }
  }, [nouveauElement]);

  const gererChangement = useCallback((e) => {
    setNouveauElement(e.target.value);
  }, []);

  return (
    <div>
      <h2>Liste Dynamique</h2>
      <form onSubmit={ajouterElement}>
        <input
          ref={inputRef}
          type="text"
          value={nouveauElement}
          onChange={gererChangement}
          placeholder={placeholder}
        />
        <button type="submit">Ajouter</button>
      </form>
      
      <ul>
        {elements.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default GestionListe;
