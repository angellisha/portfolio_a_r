import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function Layout() {
  return (
    <div className="App">
      <main className="mainContainer">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/designsart" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;