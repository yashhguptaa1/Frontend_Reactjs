import React from 'react';
import Contacts from './components/crud_linkedin/ReadContacts';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">Contacts</a>
        </div>
      </nav>
      <div className="row">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
