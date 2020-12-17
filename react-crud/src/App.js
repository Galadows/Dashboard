import logo from './logo.svg';
import './App.css';
import React from 'react'
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';

function App() {
  var page = "Inscription";

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

  function Header() {
      return (
          <header>
              <h1 className='Header-title'>
                  Dashboard
              </h1>
          </header>
      );
  }

  class Inscription extends React.Component {
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
                          <button type="submit" onSubmit={this.handleSubmit} className="btn btn-primary" onClick="page='Main'">Send</button>
                      </div>
                      {/* <div className="Connexion-register">
                          <p>Pas encore inscrit ?  C'est par ici que ca se passe : <a href='./Connexion.js' className='hlink'>inscription</a>.</p>
                      </div> */}
                  </div>
              </body>
          );
      }
  }

  class Main extends React.Component {
      render() {
          return(
              <body className="Connexion-body">
                  <h1 className='Connexion-title'>
                      Main
                  </h1>
                  <div className="Connexion-container">
                      Container
                  </div>
              </body>
          );
      }
  }

  function setPage() {
      if (page === "Inscription") {
          return (
            <div>
              <Header/>
              <Inscription/>
            </div>
          );
      } else if (page === "Main") {
          return (
            <div>
              <Header/>
              <Main/>
            </div>
          );
      }
  }

  return (
    setPage(page)
  );
}

export default App;
