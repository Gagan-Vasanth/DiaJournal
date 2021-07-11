import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Journal from './components/Journal/Journal';
import JournalLandingPage from './components/JournalLandingPage/JournalLandingPage';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Updates from './components/Updates/Updates';
import Error from './reuseables/Error/Error';
import PrivateRoute from './reuseables/PrivateRoute/PrivateRoute';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signup} />
        <PrivateRoute path="/moveon" component={JournalLandingPage} />
        <PrivateRoute path="/journal" component={Journal} />
        <PrivateRoute path="/updates" component={Updates} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
