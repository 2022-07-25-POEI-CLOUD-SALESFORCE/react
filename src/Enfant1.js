/* composant enfant version classe */
import React from 'react';
/* on peut exporter directement la classe à la création pour être 
  surs de ne pas oublier ensuite */
export default class Enfant1 extends React.Component {
  // le texte sur le bouton vient des propriétés
  // l'action du bouton passe par les propriétés aussi
  constructor(props) {
    super(props);
  }

  // la méthode render permet l'affichage du composant
  render() {
    //il faut obligatoirement quelque chose sur la même ligne que le return
    return (
      <button onClick={ this.props.clickHandler }>{ this.props.txt }</button>
    )
  }

}