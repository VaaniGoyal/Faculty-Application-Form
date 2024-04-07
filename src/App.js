//App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import { Footer } from "./template";
import Login_Page from "./Login_Page";
import Create_Account from "./Create_Account";
import "./App.css";

function App() {
  return (
    <Router>
      <Footer />
      <div>
        <Routes>
          <Route path="/" element={<Login_Page />} />
          <Route path="/Create_Account" element={<Create_Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
