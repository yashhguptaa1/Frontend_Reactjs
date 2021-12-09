import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Create from "./CreateDetail";
import Read from "./ReadDetails";
import Update from "./UpdateDetails";
import Delete from "./DeleteDetail";

import NavBar from "./Navbar";

class App extends Component {
    render() {
      return (
        <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Routes>
            <Route path="/" element={<HomePage />} />
              <Route path="/add-new" element={<Create/>} />
              <Route path="/get/:id" element={<Read />} />
              <Route path="/update" element={<Update/>} />
              <Route path="/delete" element={<Delete/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

