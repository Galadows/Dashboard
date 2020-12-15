import React from 'react';

function Connexion() {
        return (
            <div className="Connexion">
                <body className="Connexion-body">
                    <h1 className='Connexion-title'>
                        Connexion
                    </h1>
                    <div className="Connexion-container">
                        <div className="Connexion-form">
                            <div className='Form-line'>
                                <label>Identifiant</label>
                                <input type='Text'></input>
                            </div>
                            <div className='Form-line'>
                                <label>Mot de passe</label>
                                <input type='Text'></input>
                            </div>
                        </div>
                        <div className="Connexion-register">
                            <p>Pas encore inscrit ?  C'est par ici que ca se passe : <a href='blank' className='hlink'>inscription</a>.</p>
                        </div>
                    </div>
                </body>
            </div>
        );
    }

export default Connexion;