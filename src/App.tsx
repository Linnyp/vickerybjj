import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { Schedule } from "./pages/schedule";
import Location from "./pages/location";
import Navbar from "./components/Navbar";
import Contact from "./pages/contact";
import Slideshow from "./pages/slideshow";
import Instructors from "./pages/instructors";
import Gallery from "./pages/gallery";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/instructors" element={<Gallery />} />
          <Route path="/gallery" element={<Slideshow />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
