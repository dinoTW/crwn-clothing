import './App.css';

import { Route } from 'react-router-dom'

import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shop/ShopPage'


function App() {
  return (
    <div>
      <Route exact path="/" component={ HomePage } />
      <Route path="/shop" component={ ShopPage } />     
    </div>
  );
}

export default App;
