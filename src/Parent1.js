/* composant parent version classe */ 
import React from 'react';
import Enfant1 from './Enfant1';
// on peut créer une classe "normale". Il faudra obligatoirement penser à l'exporter ensuite
// pour qu'elle puisse être importée dans un autre composant
class Parent1 extends React.Component {
  constructor(props) {
    super(props);
    //pour que l'affichage soit gré à chaque mise à jour il faut définir un "state"
    this.state = {count: 0, count2: 0, count3: 0};
    //autobinding si fonction 'traditionnelle'
    //on passe l'objet 'this' à la fonction pour pouvoir l'utiliser à l'intérieur (contexte)
    this.outputEvent = this.outputEvent.bind(this);
  }

  outputEvent() {
    // modification du state pour le premier compteur
    //this est accessible car elle a été "autobindé" dans le constructeur
    this.setState({count: this.state.count + 1});
  }
  // fonction fléchée, autobinding inutile
  outputEvent2 = () => {
    //on peut modifier le state sous forme de fonction
    this.setState(function(state) {return {count2: ++state.count2 }});
  }
  // fonction fléchée => pas d'autobinding
  outputEvent3 = () => {
    //modification du state avec fonction fléchée
    // pas d'accolades après la flèche équivaut à un 'return'
    this.setState((state) => ({count3 : ++state.count3}));
  }
  //render obligatoire (affichage dans le navigateur)
  render() {
    return (
      <div>
        <p>Compteur 1: {this.state.count} </p>
        <Enfant1 txt='Cliquez ici' clickHandler={ this.outputEvent }/>
        <p>Compteur 2: {this.state.count2 }</p>
        <Enfant1 txt='Zyva' clickHandler={ this.outputEvent2 } />
        <p>Compteur 3: {this.state.count3 }</p>
        <Enfant1 txt='Click Here' clickHandler={ this.outputEvent3 } />
      </div>
    )
  }
}
//export de la classe pour qu'elle puisse être importée
export default Parent1;