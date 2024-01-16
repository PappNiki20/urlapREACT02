import logo from './logo.svg';
import './App.css';
import FromKomponens from './komponens/FromKomponens';

function App() {
  function adatKuld(adatObj){
    console.log(adatObj)
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>Űrlap react</h1>
      </header>
      <FromKomponens adatKuld={adatKuld}/>
    </div>
  );
}

export default App;
