import React, { useState, useCallback, useMemo } from 'react';

const GestionNotes = ({ valeursInitiales = [] }) => {
  const [listeNotes, setListeNotes] = useState(valeursInitiales);
  const [nouvelleNote, setNouvelleNote] = useState('');

  // Ajouter une note
  const ajouterNote = useCallback(() => {
    const valeur = parseFloat(nouvelleNote);
    if (valeur >= 0 && valeur <= 20) {
      setListeNotes((prevNotes) => [...prevNotes, valeur]);
      setNouvelleNote('');
    } else {
      alert("La note doit être entre 0 et 20 !");
    }
  }, [nouvelleNote]);

  // Supprimer une note
  const supprimerNote = useCallback((index) => {
    setListeNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  }, []);

  // Calculer la moyenne
  const moyenne = useMemo(() => {
    if (listeNotes.length === 0) return 0;
    const total = listeNotes.reduce((acc, n) => acc + n, 0);
    return (total / listeNotes.length).toFixed(2);
  }, [listeNotes]);

  return (
    <div>
      <h2>Notes des Étudiants</h2>
      <input
        type="number"
        value={nouvelleNote}
        onChange={(e) => setNouvelleNote(e.target.value)}
        placeholder="Ajouter une note"
      />
      <button onClick={ajouterNote}>Ajouter</button>

      <ul>
        {listeNotes.map((note, i) => (
          <li key={i}>
            {note}
            <button onClick={() => supprimerNote(i)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <h3>Moyenne : {moyenne}</h3>
    </div>
  );
};

export default GestionNotes;
