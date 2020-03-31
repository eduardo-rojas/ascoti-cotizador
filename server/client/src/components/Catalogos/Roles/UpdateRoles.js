import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateRol, getRol } from "../../../actions/rolesAction";
import Navbar from "components/Navbar";
import DarkFooter from "../../Footers/DarkFooter";
import { Link } from "react-router-dom";

import { Form, Input, Button, Row, Layout, Menu, Breadcrumb } from 'antd';

const { Content } = Layout;


class UpdateRol extends Component {
  constructor() {
    super();
    this.state = {
      Id: "",
      Rol: "",
      Descripcion: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps.rol);
    const {
      Id,
      Rol,
      Descripcion
    } = nextProps.rol.roles;
    this.setState({
      Id: Id,
      Rol: Rol,
      Descripcion: Descripcion
    });
  }

  componentDidMount() {
    //console.log(this.props.match.params);
    const { Id } = this.props.match.params;
    this.props.getRol(Id, this.props.history);
    console.log(Id);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const updateRol = {
      Id: this.state.Id,
      Rol: this.state.Rol,
      Descripcion: this.state.Descripcion
    };

    this.props.updateRol(updateRol, this.props.history);
  }

  render() {
            console.log(this.state.Rol);

    return (
      <div>
        <Navbar />
        <div id="wrap" className="content">
          <div id="main">
            <div
              className="section section-signup"
              style={{
                backgroundPosition: "top center",
                minHeight: "700px"
              }}
            >
               <Content style={{ padding: '0 100px' }}>
               <h3 className="text-left">Edita Rol</h3>
                <Row>  
                <Form name="edita" 
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 100 }}
                    onSubmit={this.onSubmit}>
                <Form.Item
                    label="Id"
                    name="Id"
                    
                    rules={[
                    {
                        required: true,
                        message: '!',
                    },
                    ]}
                >
                <Input disable/>
                </Form.Item>

                <Form.Item
                    label="Rol"
                    name="Rol"
                    rules={[
                    {
                        required: true,
                        message: 'Proporcione nombre del Rol',
                    },
                    ]}
                >
                <Input type="text" name="Rol" placeholder="Nombre del Rol" value={this.state.Rol} onChange={this.onChange} />
                </Form.Item>
                <Form.Item
                    label="Descripción"
                    name="Descripcion"
                    value={this.state.Descripcion}
                    rules={[
                    {
                        message: 'Proporcione la Descripcion',
                    },
                    ]}
                >
                <input placeholder="Descripcion" name="Descripcion" value={this.state.Descripcion} onChange={this.onChange}/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Guardar
                    </Button>
                    {'   '   }
                    <Link to={`/roles/index`}>
                    <Button htmlType="button">
                        Cancelar
                    </Button>
                    </Link>
                
                </Form.Item>
                </Form>

                </Row>
                </Content>
            </div>
          </div>
        </div>
        <DarkFooter />
      </div>
    );
  }
}

UpdateRol.propTypes = {
  getRol: PropTypes.func.isRequired,
  updateRol: PropTypes.func.isRequired,
  rol: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  rol: state.rol.rol
});

export default connect(mapStateToProps, { getRol, updateRol })(
  UpdateRol
);
