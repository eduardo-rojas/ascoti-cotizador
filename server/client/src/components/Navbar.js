import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// reactstrap components
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

class Landing extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/login`);
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/registrar" className="nav-link">
            Registrar
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/inicio" className="nav-link">
            Inicio
          </Link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Cotizaciones
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/cotizaciones/index">
              Cotizaciones
            </a>
          </div>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Catálogos
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/accesorios/index">
              Accesorios
            </a>
            <a class="dropdown-item" href="/bisagras/index">
              Bisagras
            </a>
            <a class="dropdown-item" href="/correderas/index">
              Correderas
            </a>
            <a class="dropdown-item" href="/jaladeras/index">
              Jaladeras
            </a>
            <a class="dropdown-item" href="/muebles/index">
              Muebles
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/categorias/index">
              Categorías
            </a>
            <a class="dropdown-item" href="/familias/index">
              Familias
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/aperturasm/index">
              Aperturas Mueble
            </a>
            <a class="dropdown-item" href="/frentes_muebles/index">
              Frentes Mueble
            </a>
            <a class="dropdown-item" href="/interiores_muebles/index">
              Interiores Mueble
            </a>
          </div>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Usuarios
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/users/index">
              Usuarios
            </a>
            <a class="dropdown-item" href="/roles/index">
              Roles
            </a>
            <a class="dropdown-item" href="/registrar">
              Registrar
            </a>
          </div>
        </li>

        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Salir
          </a>
        </li>
      </ul>
    );

    return (
      <>
        <Navbar className="fixed-top " expand="lg" color="info">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="/" target="_blank" id="navbar-brand">
                Cotizadora | Allsoft
              </NavbarBrand>
            </div>
            <Collapse className="justify-content-end" navbar>
              <Nav navbar>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample10"
                  aria-controls="navbarsExample10"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div
                  className="collapse navbar-collapse justify-content-md-center"
                  id="navbarsExample10"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item"></li>
                  </ul>
                  {localStorage.usertoken ? userLink : loginRegLink}
                </div>

                {/* Opciones adicionales para la barra de navegacion */}
                {/* <NavItem>
                  <NavLink href="/">
                    <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                    <p>Inicio</p>
                  </NavLink>
                  {localStorage.usertoken ? userLink : loginRegLink}
                </NavItem>

                <NavItem>
                  <NavLink href="#">
                    <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                    <p>Download</p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#">
                    <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                    <p>Download</p>
                  </NavLink>
                </NavItem>

                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" href="#">
                    <i className="now-ui-icons design_app mr-1"></i>
                    <p>Components</p>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/" tag={Link}>
                      <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                      Componente 1
                    </DropdownItem>
                    <DropdownItem href="/" target="_blank">
                      <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                      Componente 1
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Button
                    className="nav-link btn-neutral"
                    color="info"
                    href="#"
                    id=""
                  >
                    <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                    <p>Prueba</p>
                  </Button>
                  <UncontrolledTooltip target="">Buscar</UncontrolledTooltip>
                </NavItem> */}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withRouter(Landing);
