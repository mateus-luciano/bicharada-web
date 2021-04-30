import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './RouterWrapper';

import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Adoption from '../pages/Adoption';
import Contact from '../pages/Contact';
import Contribute from '../pages/Contribute';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/adoptions" component={Adoption} />
      <Route path="/contact" component={Contact} />
      <Route path="/contribute" component={Contribute} />
      <Route path="/notfound" component={NotFound} />
    </Switch>
  </BrowserRouter>
);
