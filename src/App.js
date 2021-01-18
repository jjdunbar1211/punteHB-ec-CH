import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ItemListContainer}/>
        <Route exact path="/category/:categoryId" component={ItemListContainer}/>
        <Route exact path="/item/:id" component={ItemDetailContainer}/>
      </Switch>
    </BrowserRouter>
  );
 
}

export default App;
