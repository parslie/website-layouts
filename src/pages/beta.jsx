import React from "react";
import { Route, Routes } from "react-router-dom";
import "./beta.scss";

function BetaLayout() {
  return (
    <div className="beta">
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
      
    </React.Fragment>
  );
}

export default BetaLayout;