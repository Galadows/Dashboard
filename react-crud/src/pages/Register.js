import React from 'react';
import { Link } from 'react-router-dom';

function Field({type, name, value, onChange, children}) {
    return (
      <div className="Form-line">
          <label htmlFor={name}>{children}</label>
          <span>
              <input type={type} value={value} onChange={onChange} name={name} id={name} size="30"></input>
              {value}
          </span>
      </div>
    );
}

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "",
            mail: "",
            password : "",
            confirm: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit(e) {
        console.log(e)
    }

    render() {
        return (
            <body className="Connexion-body">
                <h1 className='Connexion-title'>
                    Inscription
                </h1>
                <div className="Connexion-container">
                    <div className="Connexion-form">
                        <Field type="text" name="name" value={this.state.name} onChange={this.handleChange}>Name</Field>
                        <Field type="mail" name="mail" value={this.state.mail} onChange={this.handleChange}>Mail</Field>
                        <Field type="text" name="password" value={this.state.password} onChange={this.handleChange}>Password</Field>
                        <Field type="text" name="confirm" value={this.state.confirm} onChange={this.handleChange}>Confirm Password</Field>
                        <Link to="/dash">
                            <button type="submit" onSubmit={this.handleSubmit} className="btn btn-primary">Send</button>
                        </Link>
                    </div>
                </div>
            </body>
        );
    }
}

export default Register;