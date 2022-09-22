import { useState } from "react";
import Enfant2 from "./Enfant2";

/* composant parent version fonction */
export default function Parent2() {
  //hook pour le state
  //count est la valeur du state
  //setCount est la fonction qui permet de modifier le state
  // le 0 dans les parenthèses est la valeur initiale du state
  // le rôle du state est de provoquer une mise à jour de l'affichage dès qu'il est modifié
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // fonction de traitement du premier bouton
  function outputEvent(){
    // setCount est la fonction qui permet de modifier le state pour "count"
    setCount(count + 1);
  }
  function outputEvent2(){
    setCount2(count2 + 1);
  }
  function outputEvent3(){
    setCount3(count3 + 1);
  }

  return (
    <div>
      <p>{ count }</p>
      <Enfant2 txt='cliquez ici' clickHandler={ outputEvent } />
      <p>{ count2 }</p>
      <Enfant2 txt='click here' clickHandler={ outputEvent2 } />
      <p>{ count3 }</p>
      <Enfant2 txt='Go' clickHandler={ outputEvent3 } />
    </div>
  )
}