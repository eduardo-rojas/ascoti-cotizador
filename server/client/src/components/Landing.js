import React, { Component } from "react";
import Navbar from "components/Navbar";
import DarkFooter from "./Footers/DarkFooter";

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div
          className="section "
          style={{
            backgroundPosition: "top center",
            minHeight: "600px"
          }}
        >
          <div className="container">
            <div className="jumbotron mt-5">
              <div className="col-sm-8 mx-auto">
                <h1 className="text-center">Bienvenido</h1>
              </div>
            </div>
          </div>
        </div>
        <DarkFooter />
      </div>
    );
  }
}

export default Landing;
