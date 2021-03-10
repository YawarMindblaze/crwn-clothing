import React from 'react'
import { BrowserRouter, Switch,Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import HomePage from './homepage-component'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/hats" component={HatsPage}></Route>
      </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App
