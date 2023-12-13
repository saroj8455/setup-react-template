import * as React from 'react';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar />
      {/* <Welcome /> */}

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
