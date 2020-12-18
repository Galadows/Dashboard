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

class Connexion extends React.Component {
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
                        Connexion
                    </h1>
                    <div className="Connexion-container">
                        <div className="Connexion-form">
                            <Field type="mail" name="mail" value={this.state.mail} onChange={this.handleChange}>Mail</Field>
                            <Field type="text" name="password" value={this.state.password} onChange={this.handleChange}>Password</Field>
                            <Link to="/dash">
                                <button type="submit" onSubmit={this.handleSubmit} className="btn btn-primary">Send</button>
                            </Link>
                        </div>
                        <div className="Connexion-register">
                            <Link to="/register">
                                <p>Not registered ?  Check out registration page : <a href='/' className='text-decoration-none'>register</a>.</p>
                            </Link>
                        </div>
                        <div className="middle-separator">
                            or
                        </div>
                        <div className="card connexions">
                            <div className="card-body">
                                <a className='text-decoration-none' href="http://localhost:8080/oauth2/authorization/google">Connect with Google</a>
                            </div>
                        </div>
                        <div className="card connexions">
                            <div className="card-body">
                                <a className='text-decoration-none' href="http://localhost:8080/oauth2/authorization/github">Connect with Github</a>
                            </div>
                        </div>
                    </div>
                </body>
          );
      }
  }

export default Connexion;