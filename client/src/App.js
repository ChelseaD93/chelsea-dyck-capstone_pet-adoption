import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import AdoptableAnimals from './components/AdoptableAnimals/AdoptableAnimals';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact render={(routeProps) => <Home {...routeProps} />} />
          <Route path='/about' exact render={(routeProps) => <About {...routeProps} />} />
          <Route path='/adoptable-animals' exact render={(routeProps) => <AdoptableAnimals {...routeProps} />} />
          <Route path='/login' exact render={(routeProps) => <Login {...routeProps} />} />
          <Route path='/profile' exact render={(routeProps) => <Profile {...routeProps} />} />
          <Route path='/not-found' exact render={(routeProps) => <NotFound {...routeProps} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
