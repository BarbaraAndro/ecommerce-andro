import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error from './components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi ecommerce de productos argentinos!!" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria " />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='*' element={<Error />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
