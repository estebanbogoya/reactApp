import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar"

function App() {
  const miEstilo = {
    textAlign: "center",
    backgroundColor: "blue",
    margin: "30px",
    padding: "50px"
  }
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
