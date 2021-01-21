import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from './components/CartContext';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ItemListContainer}/>
          <Route exact path="/category/:categoryId" component={ItemListContainer}/>
          <Route exact path="/item/:id" component={ItemDetailContainer}/>
          <Route exact path="/cart" component={Cart}/>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
 
}

export default App;
