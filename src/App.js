import logo from './logo.svg';
import './App.css';

function App() {

  function sum(a,b){
    return a+b
  }

  const url = 'https://images.pexels.com/photos/32140540/pexels-photo-32140540.jpeg'

  const name = "Lou Junior"
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá {name}</p>
      <p>{sum(10,15)}</p>
      <img src={url} alt='Imagem' width="150" height="150"/>


    </div>
  );
}

export default App;
