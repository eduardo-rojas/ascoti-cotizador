import React, { Component } from "react";
import Navbar from "components/Navbar";
import DarkFooter from "./../../Footers/DarkFooter";
import { connect } from "react-redux";
import { getInteriorMuebles } from "../../../actions/interiorMuebleAction";
import PropTypes from "prop-types";
import InteriorMuebleItem from "./InteriorMuebleItem";
//import { Button } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { Table, Button } from "antd";

class InteriorMuebleIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetInteriorMuebles();
  }

  render() {
    const { interiorMuebles } = this.props.interiorMueble;

    console.log(interiorMuebles);

    const { Column } = Table;
    const data =
    interiorMuebles &&
    interiorMuebles.map(interiorMueble => (
      <InteriorMuebleIndex key={interiorMueble.Codigo} interiorMueble={interiorMueble} />
    ));

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
                <h3 className="text-left"><b>Interior Muebles</b></h3>
                <div className="container">
                  <div className="card card-body bg-light mb-3">
                    <div className="row">

                    <Link to="/interioresindex_muebles/add" className="nav-link">
                        <Button type="primary" >
                          Agregar Interior
                        </Button>
                      </Link>
                    </div>
                    <div className="row">
                      <Table dataSource={interiorMuebles} size="middle" width="auto" pagination={{ pageSize: 50 }}>
                        <Column
                          
                          key="acciones"
                          width= "140px"
                          align="center"
                          render={(text, record) => (
                            <span>
                              <Link to={`/frentes_muebles/update/${record.Codigo}`}>
                              <Button type="default" size="small">
                                Editar
                              </Button>
                              </Link>{" "}
                              <Link to={`/frentes_muebles/update/${record.Codigo}`}>
                              <Button type="default" size="small">
                                Borrar
                              </Button>
                              </Link>
                              
                            </span>
                          )}
                        />
                        <Column
                          title="Código"
                          dataIndex="Codigo"
                          key="Codigo"
                          width= "150px"
                        />
                        <Column title="Mueble" dataIndex="Mueble_FK" width= "150px"/>
                        <Column title="Frente" dataIndex="Interior_FK" width= "150px"/>
                        </Table>

                      
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

InteriorMuebleIndex.propTypes = {
  interiorMueble: PropTypes.object.isRequired,
  getInteriorMuebles: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onGetInteriorMuebles: () => dispatch(getInteriorMuebles())
  };
};

const mapStateToProps = state => ({
  interiorMueble: state.interiorMueble.interiorMuebles
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InteriorMuebleIndex);
