import './App.css';
import Composant1 from './Composant1';
import Composant2 from './Composant2';
import Footer from './Footer';
import Header from './Header';
//import MonForm from './MonForm';
import MonForm2 from './MonForm2';
import Parent1 from './Parent1';
import Parent2 from './Parent2';

function App() {
  let msg = 'hello';
  // fonction de gestion du clic btn 1
  function outputEvent() {
    console.log('btn 1');
  }
  //fonction de gestion du clic btn 2
  function outputEvent2() {
    console.log('btn 2');
  }

  return (
    <div className="App">
      <Header msg="Hello" />
      <Composant1 />
      <Composant2 />
      <Parent1 />
      <Parent2 />
      <MonForm2 />
      <Footer msg={msg} clickHandler={outputEvent} clickHandler2={outputEvent2} />
    </div>
  );
}

export default App;
