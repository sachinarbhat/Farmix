import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/Login'>
          <Login/>
          </Route>
          <Route exact path='/Signup'>
            <Signup/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
