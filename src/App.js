import React from 'react';
// import Places from './Places';
// import Countries from './Countries';
// import Categories from './Categories';
import Tabs from './Tabs';
import Accordion from './Accordion';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
// import { resources } from './data';
// import { useLocation } from 'react-router-dom';
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
            <Route  path="/Resources" element={<Accordion />} />
            {/* <Route  path="/Checklist" element={<Checklist />} />
            <Route  path="/Login" element={<Login />} />    */}
          </Routes>
          <Footer />
        </section>
      </main>
    </Router>
  );
}

export default App;
