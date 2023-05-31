import logo from './logo.svg';
import './App.css';
import { Navbar } from './components';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutMe, Contact, SpecificWork, Work } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<SpecificWork />} />
      </Routes>

    </div>
  );
}

export default App;
