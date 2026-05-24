import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  function sum(a,b){
    return a+b
  }

  const url = 'https://images.pexels.com/photos/32140540/pexels-photo-32140540.jpeg'

  const name = "Lou Junior"
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Form />
    </div>
  );
}

export default App;
