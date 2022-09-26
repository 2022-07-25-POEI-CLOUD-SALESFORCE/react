/* formulaire version fonction */

import { useState } from "react"

export default function MonForm(props) {

  // un state pour le champs nom. Permet de rafraichir l'affichage au cours de la saisie
  const [nom, setNom] = useState('');
  // fonction de gestion du change nom (reçoit un event "e")
  function traitementNom(e) {
    //console.log(e.target.value);
    //mise à jour du state pour forcer le réaffichage 
    setNom(e.target.value);
  }
  //traitement du formulaire (avec blocage soumission HTML)
  function valideForm(event) {
    alert('formulaire soumis: ' + nom);
    //pour éviter la soumission "HTML" du formulaire par le navigateur
    event.preventDefault();
    // appel à une API en AJAX
    // fetch().then().then();
  }

  //return obligatoire => template vers le navigateur
  return (
    <form onSubmit={ valideForm }>
      <p>
        <label>Nom</label>
        <input type="text" value={ nom } onChange={ traitementNom } />
      </p>
      <p>
        <button type="submit">Go</button>
      </p>
    </form>
  )
}