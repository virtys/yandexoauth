import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Oauth from './pages/Oauth'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/oauth" component={Oauth} />
    </Switch>
  )
}

export default App
