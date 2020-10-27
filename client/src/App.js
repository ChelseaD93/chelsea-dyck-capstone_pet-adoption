import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import AdoptableAnimals from './components/AdoptableAnimals/AdoptableAnimals';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
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
          <Route path='/sign-up' exact render={(routeProps) => <Login {...routeProps} />} />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
