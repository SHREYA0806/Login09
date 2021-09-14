

import LogIn from './Components/LogIn/LogIn';
import Home from './Components/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  console.log("hi")
  return (
    
    <Provider store= {store}>
    <Router>
     
      <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/">
            
            <LogIn />
           
          </Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
