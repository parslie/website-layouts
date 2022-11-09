import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoremIpsumArticles } from "../components/articles";
import "./beta.scss";

function BetaLayout() {
  return (
    <div className="beta">
      <header>
        <h1>Layout β</h1>
      </header>

      <nav>
        <div className="button-row">
          <button>Home</button>
          <button className="selected">Services</button>
          <button>Contact</button>
        </div>
        <div className="empty-row"></div>
      </nav>

      <main>
        <Routes>
          <Route index element={<Index />} />
        </Routes>
      </main>
    </div>
  );
}

function Index() {
  return (
    <React.Fragment>
      <LoremIpsumArticles />
    </React.Fragment>
  );
}

export default BetaLayout;