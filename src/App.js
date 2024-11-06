import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



export default class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<News country="us" category="general" />} />
              <Route path="/business" element={<News country="us" category="business" />} />
              <Route path="/entertainment" element={<News country="us" category="entertainment" />} />
              <Route path="/general" element={<News country="us" category="general" />} />
              <Route path="/health" element={<News country="us" category="health" />} />
              <Route path="/science" element={<News country="us" category="science" />} />
              <Route path="/sports" element={<News country="us" category="sports" />} />
              <Route path="/technology" element={<News country="us" category="technology" />} />
            </Routes>
          </div>
        </>
      </Router>
    );
  }
}
