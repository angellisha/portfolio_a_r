import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Landing from './Pages/Landing';

function Layout() {
  return (
    <div className="App">
      <main className="mainContainer">
        <Routes>
          <Route path="/" element={<Landing />} />
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