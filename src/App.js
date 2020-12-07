import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import RightNav from "./components/Nav/RightNav";
import Hero from "./components/Hero/Hero";
import DetailsItem from "./components/DetailsItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductosState } from "./Context/Productos/ProductosState";
import { UsuariosState } from "./Context/Usuarios/UsuariosState";
import { CarritoState } from "./Context/Carrito/CarritoState";
import Carrito from "./components/Carrito/Carrito";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <ProductosState>
      <UsuariosState>
        <CarritoState>
          <Router>
            <div className='App'>
              <Navbar open={open} setOpen={setOpen} />
              <RightNav open={open} setOpen={setOpen} />
              <Switch>
                <Route exact path='/' component={Hero} />
                <Route exact path='/product/:id?' component={DetailsItem} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/cart' component={Carrito} />
                <Route exact path='/checkout' component={Checkout} />
              </Switch>
            </div>
          </Router>
        </CarritoState>
      </UsuariosState>
    </ProductosState>
  );
}

export default App;
