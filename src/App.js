import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';

const App = ()=> {
  return (
    <>
   <BrowserRouter>
    <NavBar/>
    <div className='background'>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting="Hola, bienvenido a mi e-commerce" />}/>
      <Route exact path="/category/:categoryid" element={<ItemListContainer/>}/>
      <Route exact path="/detail/:id" element={<ItemDetailContainer />}/> 
    </Routes>
    </div>
    </BrowserRouter> 
    </>
    
  );
}

export default App;
