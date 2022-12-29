import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar"

function App() { 
  return (
    <>
      <div>
        <NavBar/>
      </div>
      <div>
        <ItemListContainer texto ="HOLA MUNDO!!!"/>
      </div>
    </>
  );
}

export default App;
