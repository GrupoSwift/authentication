import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import CadastroScreen from './CadastroScreen';
import LoginSuccess from './LoginSucess';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={CadastroScreen} />
        <Route exact path="/login-success" component={LoginSuccess} />
      </Switch>
    </Router>
  );
}

export default App;
