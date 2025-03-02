import React, { useState, useCallback, useMemo } from 'react';

const GestionTaches = ({ tachesInitiales = [] }) => {
  const [listeTaches, setListeTaches] = useState(tachesInitiales);
  const [nouvelleTache, setNouvelleTache] = useState('');
  const [priorite, setPriorite] = useState('Basse');
  const [recherche, setRecherche] = useState('');

  // Ajouter une tâche
  const ajouterTache = useCallback(() => {
    if (nouvelleTache.trim()) {
      const tache = {
        titre: nouvelleTache,
        niveau: priorite,
        terminee: false,
      };
      setListeTaches((prev) => [...prev, tache]);
      setNouvelleTache('');
    }
  }, [nouvelleTache, priorite]);

  // Marquer une tâche comme terminée
  const basculerEtat = useCallback((index) => {
    setListeTaches((prev) =>
      prev.map((tache, i) =>
        i === index ? { ...tache, terminee: !tache.terminee } : tache
      )
    );
  }, []);

  // Filtrer les tâches
  const tachesFiltrees = useMemo(() => {
    return listeTaches.filter((tache) =>
      tache.titre.toLowerCase().includes(recherche.toLowerCase())
    );
  }, [listeTaches, recherche]);

  // Calculer le nombre de tâches terminées
  const tachesTerminees = useMemo(() => {
    return listeTaches.filter((t) => t.terminee).length;
  }, [listeTaches]);

  return (
    <div>
      <h2>Gestionnaire de Tâches</h2>

      <input
        type="text"
        placeholder="Nom de la tâche"
        value={nouvelleTache}
        onChange={(e) => setNouvelleTache(e.target.value)}
      />
      <select value={priorite} onChange={(e) => setPriorite(e.target.value)}>
        <option>Basse</option>
        <option>Moyenne</option>
        <option>Haute</option>
      </select>
      <button onClick={ajouterTache}>Ajouter</button>

      <input
        type="text"
        placeholder="Rechercher..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />

      <h3>Total : {listeTaches.length}</h3>
      <h3>Terminées : {tachesTerminees}</h3>

      <ul>
        {tachesFiltrees.map((tache, index) => (
          <li key={index} style={{ textDecoration: tache.terminee ? 'line-through' : 'none' }}>
            {tache.titre} - {tache.niveau}
            <button onClick={() => basculerEtat(index)}>
              {tache.terminee ? 'Annuler' : 'Terminer'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionTaches;
