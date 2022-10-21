import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./beta.scss";

function BetaLayout() {
  return (
    <div className="beta right">
      <aside>
        <h1 className="header">Layout β</h1>
        <div className="sticky">
          <Link to=".">Home</Link>
          <Link to="./contact">Contact</Link>
        </div>
      </aside>

      <main>
        <Routes>
          <Route index element={<Index />} />
        </Routes>
      </main>

      <footer>
        <p>Parslie © 2022 | <a href="mailto:viktor.holta@outlook.com">viktor.holta@outlook.com</a></p>
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
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
      <article>
        <h1>About</h1>
        <p>Wikipedia-esque with Modifications</p>
      </article>
    </React.Fragment>
  );
}

export default BetaLayout;