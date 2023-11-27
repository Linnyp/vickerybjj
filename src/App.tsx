import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { Schedule } from "./pages/schedule";
import Location from "./pages/location";
import Navbar from "./components/navbar";
import Contact from "./pages/contact";
import Instructors from "./pages/instructors";
import Footer from "./components/footer";
import ImageGrid from "./components/ImageGrid";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/gallery" element={<ImageGrid />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
