import './App.css';
import { Home } from './pages';
import * as ROUTES from './constants/routes';
import {
  BrowserRouter as Router, Route,

} from "react-router-dom";


function App() {
  return (
    <Router>
      <Route path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path={ROUTES.SIGN_IN}>
        <p>This is Signin</p>
      </Route>
      <Route path={ROUTES.SIGN_UP}>
        <p>This is Signup</p>
      </Route>
      <Route path={ROUTES.BROWSE}>
        <p>This is Browse</p>
      </Route>
    </Router>
  );
}

export default App;
