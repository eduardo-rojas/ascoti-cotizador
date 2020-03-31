import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
//import "ant-design-pro/dist/ant-design-pro.css";
import "./App.css";
import { Layout } from "antd";
import "assets/css/bootstrap.min.css";
import "assets/css/now-ui-kit.css";
// import "assets/css/now-ui-kit.min.css";
// import "assets/css/now-ui-kit.css.map";
import "assets/demo/demo.css";
import Catalogos from "./components/Catalogos";
import Bisagras from "./components/Bisagras";
import { Provider } from "react-redux";
import store from "./store";
import AddBisagra from "./components/Catalogos/Bisagras/AddBisagra";
import BisagrasIndex from "./components/Catalogos/Bisagras/BisagrasIndex";
import UpdateBisagra from "./components/Catalogos/Bisagras/UpdateBisagra";
import JaladerasIndex from "./components/Catalogos/Jaladeras/JaladerasIndex";
import AddJaladera from "./components/Catalogos/Jaladeras/AddJaladeras";
import UpdateJaladera from "./components/Catalogos/Jaladeras/UpdateJaladera";
// Correderas
import CorrederasIndex from "./components/Catalogos/Correderas/CorrederasIndex";
import AddCorrederas from "./components/Catalogos/Correderas/AddCorrederas";
import UpdateCorredera from "./components/Catalogos/Correderas/UpdateCorredera";
// Accesorios
import AccesoriosIndex from "./components/Catalogos/Accesorios/AccesoriosIndex";
import AddAccesorio from "./components/Catalogos/Accesorios/AddAccesorio";
import UpdateAccesorio from "./components/Catalogos/Accesorios/UpdateAccesorio";
import MueblesIndex from "./components/Catalogos/Muebles/MueblesIndex";
import UpdateMueble from "./components/Catalogos/Muebles/UpdateMueble";
import AddMueble from "./components/Catalogos/Muebles/AddMueble";
// import FrenteMuebleIndex from "./components/Catalogos/Frente_Muebles/FrenteMuebleIndex";
// import AddFrenteMueble from "./components/Catalogos/Frente_Muebles/AddFrenteMueble";
// import UpdateFrenteMueble from "./components/Catalogos/Frente_Muebles/UpdateFrenteMueble";
import InteriorMuebleIndex from "./components/Catalogos/Interiores_Muebles/InteriorMuebleIndex";
import UpdateInteriorMueble from "./components/Catalogos/Interiores_Muebles/UpdateInteriorMueble";
import AddInteriorMueble from "./components/Catalogos/Interiores_Muebles/AddInteriorMueble";

// Frentes Muebles
import Frentes_mueblesIndex from "./components/Catalogos/Frentes_muebles/Frentes_mueblesIndex";
import UpdateFrentes_Mueble from "./components/Catalogos/Frentes_muebles/UpdateFrentes_Mueble";
import AddFrentes_mueble from "./components/Catalogos/Frentes_muebles/AddFrentes_mueble";

// Familias
import AddFamilia from "./components/Catalogos/Familias/AddFamilias";
import FamiliasIndex from "./components/Catalogos/Familias/FamiliasIndex";
import UpdateFamilia from "./components/Catalogos/Familias/UpdateFamilias";

// Categorias
import AddCategoria from "./components/Catalogos/Categorias/AddCategoria";
import CategoriasIndex from "./components/Catalogos/Categorias/CategoriasIndex";
import UpdateCategoria from "./components/Catalogos/Categorias/UpdateCategoria";

// Roles
import RolesIndex from "./components/Catalogos/Roles/RolesIndex";
import UpdateRol from "./components/Catalogos/Roles/UpdateRoles";
import InteriorMuebleItem from "./components/Catalogos/Interiores_Muebles/InteriorMuebleItem";

// Roles
import CotizacionesIndex from "./components/Catalogos/Cotizaciones/CotizacionesIndex";
//import UpdateRol from "./components/Catalogos/Roles/UpdateRoles";
//import InteriorMuebleItem from "./components/Catalogos/Interiores_Muebles/InteriorMuebleItem";

// Users
import UsersIndex from "./components/Catalogos/Users/UsersIndex";

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <div>
                <Route exact path="/" component={Login} />
                <Route exact path="/inicio" component={Landing} />

                {/* Users */}
                <Route exact path="/registrar" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/perfil" component={Profile} />
                <Route exact path="/users/index" component={UsersIndex} />

                {/* Bisagras */}
                <Route exact path="/bisagras/index" component={BisagrasIndex} />
                <Route exact path="/bisagras/add" component={AddBisagra} />
                <Route
                  exact
                  path="/bisagras/update/:Codigo"
                  component={UpdateBisagra}
                />

                {/* Accesorios */}
                <Route
                  exact
                  path="/accesorios/index"
                  component={AccesoriosIndex}
                />
                <Route exact path="/accesorios/add" component={AddAccesorio} />
                <Route
                  exact
                  path="/accesorios/update/:Codigo"
                  component={UpdateAccesorio}
                />

                {/* Jaladeras */}
                <Route
                  exact
                  path="/jaladeras/index"
                  component={JaladerasIndex}
                />
                <Route exact path="/jaladeras/update/:Codigo" component={UpdateJaladera} />
                <Route exact path="/jaladeras/add" component={AddJaladera} />

                {/* Correderas */}
                <Route
                  exact
                  path="/correderas/index"
                  component={CorrederasIndex}
                />
                <Route exact path="/correderas/add" component={AddCorrederas} />
                <Route
                  exact
                  path="/correderas/update/:Codigo"
                  component={UpdateCorredera}
                />

                {/* Muebles */}
                <Route exact path="/muebles/index" component={MueblesIndex} />
                <Route exact path="/muebles/add" component={AddMueble} />
                <Route
                  exact
                  path="/muebles/update/:Codigo"
                  component={UpdateMueble}
                />

                {/* Familias */}
                <Route exact path="/familias/index" component={FamiliasIndex} />
                <Route exact path="/familias/add" component={AddFamilia} />
                <Route exact path="/familias/update/:Codigo" component={UpdateFamilia}
                />

                {/* Categorias */}
                <Route
                  exact
                  path="/categorias/index"
                  component={CategoriasIndex}
                />
                <Route exact path="/categorias/add" component={AddCategoria} />
                <Route
                  exact
                  path="/categorias/update/:Codigo"
                  component={UpdateCategoria}
                />

                {/* Roles */}
                <Route exact path="/roles/index" component={RolesIndex} />
                <Route exact path="/roles/update/:Id" component={UpdateRol} />

                 {/* Cotizaciones */}
                 <Route exact path="/cotizaciones/index" component={CotizacionesIndex} />
                
                {/* Frentes_muebles */}
                <Route
                  exact
                  path="/frentes_muebles/index"
                  component={Frentes_mueblesIndex}
                />
                <Route
                  exact
                  path="/frentes_muebles/add"
                  component={AddFrentes_mueble}
                />
                <Route
                  exact
                  path="/frentes_muebles/update/:Codigo"
                  component={UpdateFrentes_Mueble}
                />

                {/* Interiores_muebles */}
                <Route
                  exact
                  path="/interiores_muebles/index"
                  component={InteriorMuebleIndex}
                />
                <Route
                  exact
                  path="/interiores_muebles/add"
                  component={AddInteriorMueble}
                />
                <Route
                  exact
                  path="/interiores_muebles/update/:Codigo"
                  component={UpdateInteriorMueble}
                />
              </div>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
