import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import DarkFooter from "./Footers/DarkFooter";
import Navbar from "components/Navbar";

class Catalogos extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">Catalogos</h1>
            </div>
            <table className="table col-md-6 mx-auto">
              <tbody>
                <tr>
                  <Link to="/bisagras/agregar">
                    <Button className="btn-round" color="primary" size="lg">
                      Bisagras
                    </Button>
                  </Link>
                </tr>
                <tr>
                  <Link to="/bisagras/index">
                    <Button className="btn-round" color="primary" size="lg">
                      Accesorios
                    </Button>
                  </Link>
                </tr>
                <tr>
                  <Button className="btn-round" color="primary" size="lg">
                    Correderas
                  </Button>
                </tr>
                <tr>
                  <Button className="btn-round" color="primary" size="lg">
                    Jaladeras
                  </Button>
                </tr>
                <tr>
                  <Button className="btn-round" color="primary" size="lg">
                    Tipos de muebles
                  </Button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <DarkFooter />
      </div>
    );
  }
}

export default Catalogos;
