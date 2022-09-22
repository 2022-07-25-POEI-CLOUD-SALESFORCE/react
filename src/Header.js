//on importe le hook pour pouvoir l'utiliser
import React, { useState } from 'react';

/* header sous forme de fonction */
export default function Header(props) {
  // un hook useState permet de gérer un state dans une fonction
  let nom = 'TAVERNIER';
  let prenom = 'Bruno';
  let ville = 'Montpellier';
  // déclaration du state et de la fonction de mise à jour
  // count représente le state
  // setcount est la fonction pour le mettre à jour
  // 0 est la valeur par défaut
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  return (
    <header>
      <img src="logo192.png" alt="logo" />
      <div>
        <h1>{prenom} {nom}</h1>
        <h2>{ ville }</h2>
        <h3>{ count }</h3>
        <h4>{ props.msg }</h4>
        <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
      </div>
    </header>
  )
}