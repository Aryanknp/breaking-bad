
import './App.css';
import Characters from './components/Characters';


import Header from './components/Header'

import { Route,HashRouter } from 'react-router-dom';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <Header/>
      <HashRouter>
      <Route exact path="/" component={Characters}/>
            <Route path="/Details/:id" component={Details}/>
            

      </HashRouter>

      
      
      
    </div>
  );
}

export default App;
