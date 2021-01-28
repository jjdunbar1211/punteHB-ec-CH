import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from './components/CartContext';
import {firestore} from "./firebase"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from "./components/Cart";
import { useState, useEffect } from "react";

function App() {

  const [fireItems, setFireItems] = useState([])
  
  useEffect(() => {
    const db = firestore
    const collection = db.collection('products')
    const query = collection.get()
    query
      .then(result => {
        setFireItems(result.docs.map( p => ({id: p.id, pictureUrl: `/products-images/${p.pictureUrl}`, ...p.data()})))
      })
      .catch(error => {
        console.log(`[App - falla trayendo data de Firebase].  ${error}`)
      })
  }, [])

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer  products={fireItems} />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer  products={fireItems} />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
 
}

export default App;
