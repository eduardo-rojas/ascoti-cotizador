import React, { Component } from "react";
import Navbar from "components/Navbar";
import DarkFooter from "./../../Footers/DarkFooter";
import { connect } from "react-redux";
import { getAperturasM } from "../../../actions/aperturasmuebleAction";
import PropTypes from "prop-types";
import AperturaMItem from "./AperturaMItem";

class AperturasMIndex extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetAperturasM();
    console.log(this.props.aperturam);
  }

  render() {
    const aperturasm = this.props.aperturam;

    return (
      <div>
        <Navbar />
        <div
          className="section "
          style={{
            backgroundPosition: "top center",
            minHeight: "700px"
          }}
        >
          <div className="container">
            <div className="jumbotron mt-5">
              <div className="col-sm-12 mx-auto">
                <h1 className="text-left">Aperturas Mueble</h1>
                <div className="container">
                  <div className="card card-body bg-light mb-3">
                    <div className="row">
                      <table className="table">
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Mueble</th>
                            <th scope="col">Apertura</th>
                            <th scope="col">Comentarios</th>
                          </tr>
                        </thead>
                        <tbody>
                           {aperturasm && aperturasm.map(aperturam => (
                            <AperturaMItem
                              key={aperturam.Codigo}
                              aperturam={aperturam}
                            />
                          ))} 
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DarkFooter />
      </div>
    );
  }
}

AperturasMIndex.propTypes = {
  aperturam: PropTypes.object.isRequired,
  getAperturasM: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAperturasM: () => dispatch(getAperturasM())
  };
}

const mapStateToProps = state => ({
  aperturam: state.aperturam.aperturasm
});

export default connect(mapStateToProps, mapDispatchToProps)(AperturasMIndex);
