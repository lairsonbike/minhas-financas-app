import React from "react";
import Card from '../components/card'
import FormGroup from "../components/form-group";


class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        console.log('Email:', this.state.email)
        console.log('Senha:', this.state.senha)
    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300ox' }}>
                        <div className="bs-docs-section">
                            <Card title="Login">

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">

                                            <fieldset>

                                                <FormGroup Label="Email: *" htmlFor="exampleInputEmail1">
                                                    <input type="email"
                                                        value={this.state.email}
                                                        onChange={e => this.setState({ email: e.target.value })}
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Digite o Email" />
                                                </FormGroup>
                                                <FormGroup Label="Senha: *" htmlFor="exampleInputPassword1">
                                                    <input type="password"
                                                        value={this.state.senha}
                                                        onChange={e => this.setState({ senha: e.target.value })}
                                                        className="form-control"
                                                        id="exampleInputPassword1"
                                                        placeholder="Password" />
                                                </FormGroup>

                                                <button onClick={this.entrar} className="btn btn-success" type="button" >Entrar</button>
                                                <button className="btn btn-danger" type="button" >Cadastrar</button>


                                            </fieldset>

                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Login