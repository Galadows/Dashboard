import './App.css';
import React from 'react';
import Main from './Main';
import { Link } from 'react-router-dom';

function App() {

  function Header() {
      return (
          <header>
              <Link to="/">
                <h1 className='Header-title'>
                    Dashboard
                </h1>
              </Link>
          </header>
      );
  }

  return (
    <div>
        <Header/>
        <Main/>
  </div>
  );
}

export default App;
