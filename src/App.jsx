import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error from './components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart';
import Checkout from './components/Checkout';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Siempre Argenta" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria " />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error />} />

        </Routes>
      </CartProvider>

    </BrowserRouter>
  )
}

export default App
