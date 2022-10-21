import React from "react";
import { Route, Routes } from "react-router-dom";

import "./beta.scss";

function BetaLayout() {
  return (
    <div className="beta right">
      <aside>
        <h1>Layout β</h1>
      </aside>

      <main>
        <Routes>
          <Route index element={<Index />} />
        </Routes>
      </main>

      <footer>
        <h4>Parslie © 2022 | <a href="mailto:viktor.holta@outlook.com">viktor.holta@outlook.com</a></h4>
      </footer>
    </div>
  );
}

function Index() {
  return (
    <React.Fragment>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
    </React.Fragment>
  );
}

export default BetaLayout;