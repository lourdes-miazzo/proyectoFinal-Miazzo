import './App.css';
import ItemListContainer from './components/container/ItemListContainer';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Hola, bienvenido a mi e-commerce"/>
    </>
  );
}

export default App;
