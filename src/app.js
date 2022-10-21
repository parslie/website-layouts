import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import "./app.scss";
import AlphaLayout from "./pages/alpha";
import BetaLayout from "./pages/beta";

function App() {
  return (
    <div className="app">
      <PageMenu />
      
      <Routes>
        <Route path="alpha/*" element={<AlphaLayout />} />
        <Route path="beta/*" element={<BetaLayout />} />
      </Routes>
    </div>
  );
}

function PageMenu() {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className={isOpen ? "page-menu open" : "page-menu closed"}>
      <FiMenu className="menu-toggler" onClick={() => setIsOpen(!isOpen)} />
      <PageButton to="/alpha" label="Layout α" />
      <PageButton to="/beta" label="Layout β" />
    </div>
  );
}

function PageButton({ to, label }) {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div className={location.pathname === to ? "menu-button selected" : "menu-button"} onClick={() => navigate(to)}>
      {label}
    </div>
  );
}

export default App;
