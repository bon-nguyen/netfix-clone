import './App.css';
import { Home, Signin } from './pages';
import * as ROUTES from './constants/routes';
import {
  BrowserRouter as Switch, Route,

} from "react-router-dom";


function App() {
  return (
    <Switch>
      <Route path={ROUTES.HOME} exact>
        <Home />
      </Route>
      <Route path={ROUTES.SIGN_IN}>
        <Signin/>
      </Route>
      <Route path={ROUTES.SIGN_UP}>
        <p>This is Signup</p>
      </Route>
      <Route path={ROUTES.BROWSE}>
        <p>This is Browse</p>
      </Route>
    </Switch>
  );
}

export default App;
