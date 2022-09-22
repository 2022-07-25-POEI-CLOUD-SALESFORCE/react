/* composant enfant version fonction */
export default function Enfant2(props) {
  // la fonction doit obligatoirement retourner un contenu vers le navigateur
  // toujours quelque chose sur la même ligne que le return
  return (
    <button onClick={ props.clickHandler }>{ props.txt }</button>
  )
}