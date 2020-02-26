import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import City from './pages/City';
import Weather from './pages/Wheather';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={City} />
        <Route path="/previsao_do_tempo/:id" component={Weather} />
      </Switch>
    </BrowserRouter>
  );
}
