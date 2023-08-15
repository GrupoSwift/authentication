import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import CadastroScreen from './CadastroScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginScreen} />
        <Route path="/cadastro" component={CadastroScreen} />
      </Switch>
    </Router>
  );
}

export default App;
