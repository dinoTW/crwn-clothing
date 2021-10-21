import './App.css';

import { Route } from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage';

const HatPage = () => {
  return (
    <h1>Topic Detail Page</h1>
  );
}


function App() {
  return (
    <div>
      <Route exact path="/" component={ Homepage } />
      <Route path="/shop/hats" component={ HatPage } />     
    </div>
  );
}

export default App;
