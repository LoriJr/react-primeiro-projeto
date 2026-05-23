import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Frase from './components/Frase';
import Pessoa from './components/Pessoa';

function App() {

  function sum(a,b){
    return a+b
  }

  const url = 'https://images.pexels.com/photos/32140540/pexels-photo-32140540.jpeg'

  const name = "Lou Junior"
  return (
    <div className="App">
      <h1>Texto em CSS</h1>
      <Frase />
      <SayMyName />
      <Pessoa 
        nome="Lourival Junior"
        idade="41"
        foto="https://images.pexels.com/photos/32140540/pexels-photo-32140540.jpeg"
        />

    </div>
  );
}

export default App;
