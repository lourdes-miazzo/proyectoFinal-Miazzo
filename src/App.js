import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer'
import Error404 from './components/container/error404/Error404';
import Bio from './components/container/bio/Bio';
import NavBar from './components/navBar/NavBar';
import Cart from './components/container/cart/Cart';
import CartProvider from './context/CartContext';



const App = ()=> {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <div className='background'>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting='Bienvenido a mi e-commerce'/>}/>
      <Route exact path="/category/:categoryid" element={<ItemListContainer/>}/>
      <Route exact path="/item/:id" element={<ItemDetailContainer />}/> 
      <Route path="/cart" element={<Cart/>}/>
      <Route path='/*' element={<Error404/>}/>
      <Route path="/bio" element={<Bio/>} />
    </Routes>
    </div>
    </CartProvider>
    </BrowserRouter> 
    </>   
  );
}

export default App;
