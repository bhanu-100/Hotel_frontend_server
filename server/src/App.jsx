import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Home from './pages/home/home.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx'
import AppRoutes from "./routes/AppRoutes";
function App() {
  

  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  )
}

export default App
