import React from 'react';
import Tabs from './Tabs';
import Accordion from './Accordion';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Checklist from './Checklist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <main className="App">
        <section className='section wrapper'>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Info" element={<Tabs />} />
            <Route path="/Resources" element={<Accordion />} />
            <Route path="/Checklist" element={<Checklist />} />
          </Routes>
          <Footer />
        </section>
      </main>
    </Router>
  );
}

export default App;
