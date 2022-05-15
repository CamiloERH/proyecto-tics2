import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import RutaPrivada from './components/rutas/RutaPrivada';

import AuthState from './context/autenticacion/authState';
import AlertaState from './context/alertas/alertaState';

import tokenAuth from './config/tokenAuth';

const token = localStorage.getItem('token');

if( token ){
  tokenAuth(token);
}

const App = () => {
  return (
    <AlertaState>
      <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
              </Switch>
            </Router>
      </AuthState>
    </AlertaState>
  );
}

export default App;
