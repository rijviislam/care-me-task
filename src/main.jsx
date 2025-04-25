import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Footer from "./share/Footer.jsx";
import Navbar from "./share/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>
);
