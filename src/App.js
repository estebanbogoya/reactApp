import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './components/Pages/PageNotFound';
import Button from './components/Button/Button';

function App() {
  function logOutSession() {
    console.log("Log out");
  }
  function logInSession(userName) {
    console.log(userName);
    alert(`Bienvenido Usuario: ${userName}`)
  }
  return (
    <>
      <BrowserRouter>
        <NavBar onLogin={logInSession} onLogOut={logOutSession} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:itemid" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
