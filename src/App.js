import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import Contato from './Components/Contato';
import Produto from './Components/Produto';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Produtos} />
            <Route exact path="/produto/:id" component={Produto} />
            <Route path="/contato" component={Contato} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
