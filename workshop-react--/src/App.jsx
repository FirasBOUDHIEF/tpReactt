import Counter from "./counter";

import GestionListe from "./GestionListe";
import Color from "./Color";
import GestionNotes from "./GestionNotes";
import GestionTaches from "./GestionTaches";





const App = () => {
  const couleursOptions = ['#E91E63', '#4CAF50', '#2196F3', '#FFC107', '#9C27B0']; 
  const valeursInitiales = [14, 19, 10, 16];
  
  const listeInitiale = [
    { titre: 'compte rendu', niveau: 'Haute', terminee: false },
    { titre: 'Faire la musculation', niveau: 'Moyenne', terminee: false },
    { titre: 'Acheter du pain', niveau: 'Basse', terminee: true }
  ];
  


    return (
      <div>
        <div>
            <h1>Exercice du compteur</h1>
            <Counter initialCount={0} step={1} />
        </div>
        <div>
            <h1>Exercice du compteur</h1>
            <Counter initialCount={10} step={5} />
        </div>

        <div>
      <h1>Exercice 2: Gestion d'une liste dynamique</h1>
      <GestionListe initialItems={['React', 'Angular', 'VueJs']} placeholder="Ajouter un élément" />
    </div>

    <div>
      <h1>Exercice 3: Changement de couleur dynamique</h1>
      <Color initialColor="#FF5733" colorOptions={colorOptions} />
    </div>

    <div>
      <h1>Exercice 4: Gestionnaire de notes</h1>
      <GestionNotes initialNotes={initialNotes} />
    </div>

    <div>
      <h1>Exercice 5: Todo List avec priorités</h1>
      <GestionTaches initialTasks={initialTasks} />
    </div>

        </div>
        
        
    );
};



export default App;
