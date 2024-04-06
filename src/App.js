import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './app/Layout';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout/>} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
