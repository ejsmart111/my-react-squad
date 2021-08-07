import React from "react";
import SquadMain from './Components/SquadMain'
import Home from "./Components/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
    
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/squad-select' component={SquadMain}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
