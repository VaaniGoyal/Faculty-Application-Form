//App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import { Header, Footer } from "./template";
import Login_Page from "./Login_Page";
import Create_Account from "./Create_Account";
import Personal_Details from "./Personal_Details";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Footer />
      <div>
        <Routes>
          <Route path="/" element={<Login_Page />} />
          <Route path="/Create_Account" element={<Create_Account />} />
          <Route path="/Personal_Details" element={<Personal_Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
