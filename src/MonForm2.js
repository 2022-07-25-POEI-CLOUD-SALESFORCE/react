import axios from "axios";
import { useState } from "react";
/* version fonction */
export default function MonForm2() {
  // un state pour chaque champs du formulaire (mise à jour DOM)
  const [prenom, setPrenom] = useState('');
  const [nom, setnom] = useState('');
  const [civilite, setcivilite] = useState(0);
  // state pour le résultat de l'API
  const [resultAPI, setResultAPI] = useState('');
  //une fonction "change" pour chaque champs du formulaire (chg state pour réaffichage)
  function chgPrenom(event) {
    //mise à jour du state pour mise à jour affichage
    setPrenom(event.target.value);
  }
  function chgNom(event){
    setnom(event.target.value);
  }
  function chgCivilite(event){
    setcivilite(event.target.value);
  }
  //fonction de traitement du formulaire (avec blocage soumission HTML)
  function submitForm(event) {
    event.preventDefault(); //blocage soumission HTML
    alert('Bonjour ' + civilite + ' ' + prenom + ' ' + nom);
  }
  // appel API (AXIOS) => GET/POST/PUT/DELETE/PATCH
  // axios retourne directement du JSON
  // npm install axios
  function appelAPI() {
    axios.get('https://yesno.wtf/api').then(function(response){
      console.log(response);
      setResultAPI(response.data.answer);
    });
  }

  // return obligatoire (template dans le navigateur)
  return (
    <div>
      <form onSubmit={ submitForm }>
        <p>
          <label>Prénom</label>
          <input type="text" value={ prenom } onChange={ chgPrenom }/>
        </p>
        <p>
          <label>Nom</label>
          <input type="text" value={ nom }  onChange={ chgNom }/>
        </p>
        <p>
          <label>Civilité</label>
          <select value={ civilite } onChange={ chgCivilite }>
            <option selected disabled value="0">Choisissez votre civilité</option>
            <option value="Madame">Madame</option>
            <option value="Monsieur">Monsieur</option>
          </select>
        </p>
        <p>
          <button type="submit">Go</button>
        </p>
      </form>  
      <button onClick={ appelAPI }>Appel API</button>
      <p> { resultAPI }</p>
    </div>
  )
}