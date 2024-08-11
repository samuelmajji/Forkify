import React from "react";
import ReactDOM from "react-dom/client"; // Note the new import path
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import SimpleForm from "./Components/Form";

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} /> {/* Home route */}
      <Route path="/form" element={<SimpleForm />} /> {/* Form route */}
      {/* Add more routes here */}
    </Routes>
  </Router>
);
