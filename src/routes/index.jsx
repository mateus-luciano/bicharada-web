import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './RouterWrapper';

import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Adoption from '../pages/Adoption';
import AddAdoption from '../pages/AddAdoption';
import Contact from '../pages/Contact';
import Contribute from '../pages/Contribute';
import AdoptionSlug from '../pages/Adoptions[slug]';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/adoptions" exact component={Adoption} />
      <Route
        path="/adoptions/add"
        exact
        isPrivate
        component={AddAdoption}
      />
      <Route path="/adoptions/:slug" exact component={AdoptionSlug} />
      <Route path="/contact" component={Contact} />
      <Route path="/contribute" component={Contribute} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
