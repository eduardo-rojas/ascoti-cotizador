import React, { Component } from "react";
import { login } from "./UserFunctions";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import {
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";
import { Card } from "antd";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      Usuario: "",
      UsuarioPassword: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      Usuario: this.state.Usuario,
      UsuarioPassword: this.state.UsuarioPassword
    };

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/inicio`);
      }
    });
  }

  render() {
    return (
      <>
        <div className="page-header clear-filter" filter-color="white">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "linear-gradient( to bottom, rgba(35, 37, 38, 0.7), rgba(65, 67, 69, 0.7)), url(" +
                require("assets/img/Abitalia.jpg") +
                ")"
            }}
          ></div>

          <div className="content">
            <Container>
              <Col className="ml-auto mr-auto" md="4">
                <div>
                  <Card title="Login" bordered={false} style={{ width: 300 }}>
                    <Form noValidate onSubmit={this.onSubmit}>
                      {/* <div className="logo-container">
                        <img
                          alt="..."
                          src={require("assets/img/Abitalia_Logo.png")}
                        ></img>
                      </div> */}
                      <p>Usuario: </p>
                      <InputGroup
                        className={"no-border input-lg input-group-focus  "}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>

                        <Input
                          type="text"
                          className="form-control"
                          name="Usuario"
                          value={this.state.Usuario}
                          onChange={this.onChange}
                          autocomplete="off"
                        ></Input>
                      </InputGroup>
                      <p>Contraseña: </p>
                      <InputGroup
                        className={"no-border input-lg input-group-focus "}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons text_caps-small"></i>
                          </InputGroupText>
                        </InputGroupAddon>

                        <Input
                          type="password"
                          className="form-control"
                          name="UsuarioPassword"
                          value={this.state.UsuarioPassword}
                          onChange={this.onChange}
                          autocomplete="off"
                        ></Input>
                      </InputGroup>

                      <Button
                        block
                        type="submit"
                        className="btn-round"
                        color="info"
                        size="lg"
                      >
                        Iniciar sesión
                      </Button>

                      {/* opcional solicitar ayuda: */}
                      {/* <div className="pull-right">
                        <h6>
                          <a
                            className="link"
                            href="#"
                            onClick={e => e.preventDefault()}
                          >
                            Necesita ayuda?
                          </a>
                        </h6>
                      </div> */}
                    </Form>
                  </Card>
                </div>
              </Col>
            </Container>
          </div>
          <TransparentFooter />
        </div>
      </>
    );
  }
}

export default Login;
