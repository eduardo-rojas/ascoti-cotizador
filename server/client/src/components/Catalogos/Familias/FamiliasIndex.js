import React, { Component } from "react";
import Navbar from "components/Navbar";
import DarkFooter from "./../../Footers/DarkFooter";
import { connect } from "react-redux";
import { getFamilias, deleteFamilia } from "../../../actions/familiasAction";
import PropTypes from "prop-types";
import FamiliaItem from "./FamiliaItem";
//import { Button } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { Table, Button } from "antd";


class FamiliasIndex extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetFamilias();
  }

  onDeleteClick = Codigo => {
    this.props.deleteFamilia(Codigo);
    window.location.reload(false);
  };

  render() {
    const familias = this.props.familia.familias;

    const { Column } = Table;
    console.log(familias);
    

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
                <h3 className="text-left"><b>Familias</b></h3>
                <div className="container">
                  <div className="card card-body  mb-3">
                    <div className="row">
                    <Link to="/familias/add" className="nav-link">
                        <Button type="primary">
                          Agregar Familia
                        </Button>
                      </Link>
                    <div className="col-sm-12 mx-auto">
                    <Table dataSource={familias} size="middle" width="auto" pagination={{ pageSize: 50 }}>
                        <Column
                          
                          key="acciones"
                          width= "140px"
                          align="center"
                          render={(text, record) => (
                            <span>
                              <Link to={`/familias/update/${record.Codigo}`}>
                              <Button type="default" size="small">
                                Editar
                              </Button>
                              </Link>{" "}
                              <Link to={`/familias/delete/${record.Codigo}`}>
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
                        <Column title="Familia" dataIndex="Familia" width= "450px"/>
                        </Table>
                        </div>
                      
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

FamiliasIndex.propTypes = {
  familia: PropTypes.object.isRequired,
  getFamilias: PropTypes.func.isRequired,
  deleteFamilia: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetFamilias: () => dispatch(getFamilias()),
    onDeleteClick: () => dispatch(deleteFamilia())
  };
}

const mapStateToProps = state => ({
  familia: state.familia.familias
});

export default connect(mapStateToProps, mapDispatchToProps)(FamiliasIndex);
