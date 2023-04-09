import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Store from './pages/Store';


function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout   />}>
            <Route index element={<Home />} />
            <Route path="about/" element={<About /> } />
            <Route path="blog/" element={<Blog /> } />
            <Route path="store/" element={<Store /> } />
            <Route path="contact/" element={<Contact /> } />
          </Route>
        </Routes>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
