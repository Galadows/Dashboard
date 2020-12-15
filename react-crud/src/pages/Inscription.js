import React from 'react';

function Field({name, value, onChange, children}) {
    return <div className="Form-line">
        <label htmlFor={name}>{children}</label>
        <input type="text" value={value} onChange={onChange} name={name} id={name}></input>
        {value}
    </div>
}function MailField({name, value, onChange, children}) {
    return <div className="Form-line">
        <label htmlFor={name}>{children}</label>
        <input type="mail" value={value} onChange={onChange} name={name} id={name}></input>
        {value}
    </div>
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
            <div className="Connexion">
                <header>
                    <h1 className='Header-title'>
                        Dashboard
                    </h1>
                </header>
                <body className="Connexion-body">
                    <h1 className='Connexion-title'>
                        Inscription
                    </h1>
                    <div className="Connexion-container">
                        <div className="Connexion-form">
                            <Field name="name" value={this.state.name} onChange={this.handleChange}>Name</Field>
                            <MailField name="mail" value={this.state.mail} onChange={this.handleChange}>Mail</MailField>
                            <Field name="password" value={this.state.password} onChange={this.handleChange}>Password</Field>
                            <Field name="confirm" value={this.state.confirm} onChange={this.handleChange}>Confirm Password</Field>
                            <button type="submit" onSubmit={this.handleSubmit}>Send</button>
                        </div>
                        <div className="Connexion-register">
                            <p>Pas encore inscrit ?  C'est par ici que ca se passe : <a href='./Connexion.js' className='hlink'>inscription</a>.</p>
                        </div>
                    </div>
                </body>
            </div>
        );
    }
}

export default Inscription;