import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './RouterWrapper';

import Home from '../pages/Home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);
