/* composant sous forme de classe */

import React from 'react';
export default class Composant1 extends React.Component {
  variable = 'Hello M2I !';
  constructor(props) {
   super(props);
   this.variable2 = 'valeur'; 
  }
  //une méthode pour traiter par ex un évènement
  traitement = () => {
    console.log(this);
  }

  //obligatoirement une méthode render() qui retourne un contenu pour le navigateur
  render() {
    // toujours quelque chose sur la ligne du return sinon erreur
    return (
      <div className="composant1">
        <div>Hello React Classe !</div>
        <div>{ this.variable }</div>
      </div>
    )
  }
}

/*
ou 
class Composant1 extends React.Component {
  ...
}
export default Composant1;*/
