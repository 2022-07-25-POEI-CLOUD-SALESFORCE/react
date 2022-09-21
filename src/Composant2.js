/* composant React sous forme de fonction */

export default function Composant2() {
  let variable = 'Hello M2I !';
  // une fonction pour traiter un évènement par ex
  
  //toujours retourner quelque chose pour le navigateur
  return (
    <div>
      <div>Hello React Fonction !</div>
      <div>{ variable }</div>
    </div>
  )
}