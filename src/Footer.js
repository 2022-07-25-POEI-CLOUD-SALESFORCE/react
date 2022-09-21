/* composant sous forme de classe */
import React from 'react';
export default class Footer extends React.Component {
  /* constructeur */
  constructor(props) {
    super(props); //passage des propriétés au composant hérité
    this.variable = 'contenu';
    this.state = {statut: false};
    // ou dte = new Date().getFullYear();
    // autobinding
    // this.outputEvent = this.outputEvent.bind(this);
    this.clickHandlerLocal = this.clickHandlerLocal.bind(this);
  }
  dte = new Date().getFullYear();

  //fonction non fléchée car autobinding dans le constructeur
  clickHandlerLocal() {
    console.log('btn local');
    this.setState({statut: !this.state.statut});
    // ou avec une fonction
    //this.setState(state => ({statut: !state.statut}));
  }
  
  /*
  ou sans autobinding dans le constructeur
  clickHandlerLocal = () => {
    console.log('btn local');
    this.setState({statut: !this.state.statut});
  }
  */

  // outputEvent() { console.log(this); }
  // pour éviter l'autobinding on utilise la fonction fléchée
  // outputEvent2 = () => { console.log(this); }
  
  //composant ready (ou affiché)
  componentDidMount() {
    console.log('did mount');
    this.setState({statut: true}); //provoque un réaffichage
  }
  /* déprécié */
  componentWillUpdate() {
    console.log('pret pour la mise à jour');
  }
  componentDidUpdate() {
    console.log('mis à jour');
  }
  componentWillUnmount() {
    console.log('The END !');
  }

  render() {
    console.log('render');
    return (
      <footer>
        <p>Copyright &copy;{ this.dte } - Moi </p>
        <p>{ this.props.msg }</p>
        <button onClick={this.props.clickHandler}>Cliquez ici</button>
        <button onClick={this.props.clickHandler2}>Cliquez ici</button>
        <button onClick={this.clickHandlerLocal}>Local</button>
        <p>{ this.state.statut ? 'oui' : 'non' }</p>
      </footer>
    )
  }
}