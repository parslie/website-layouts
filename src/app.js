import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import "./app.scss";
import Index from "./pages";

function App() {
  return (
    <div className="app">
      <PageMenu />
      
      <Routes>
        <Route index element={<Index />} />
      </Routes>
    </div>
  );
}

function PageMenu() {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className={isOpen ? "page-menu open" : "page-menu closed"}>
      <FiMenu className="menu-toggler" onClick={() => setIsOpen(!isOpen)} />
      <PageButton to="/" label="Index" />
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
