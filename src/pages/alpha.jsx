import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./alpha.scss";
import Article, { LoremIpsumArticles, ContactArticles } from "../components/articles";

function AlphaLayout() {
  const [ layout, setLayout ] = useState("right");
  const [ theme, setTheme ] = useState("light");
  const [ language, setLanguage ] = useState("eng");

  return (
    <div className={`alpha ${layout} ${theme}`}>
      <aside>
        <h1 className="header">Layout α</h1>
        <div className="sticky">
          <Link to=".">Home</Link>
          <Link to="./contact">Contact</Link>

          <hr />

          <select defaultValue={layout} onChange={(e) => setLayout(e.target.value)}>
            <option value="right">Right layout</option>
            <option value="left">Left layout</option>
          </select>
          <select defaultValue={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light theme</option>
            <option value="dark">Dark theme</option>
          </select>
          <select defaultValue={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="eng">English</option>
            <option value="swe">Swedish</option>
            <option value="tok">Toki pona</option>
          </select>
        </div>
      </aside>

      <main>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer>
        <h5>Parslie © 2022 | <a href="mailto:viktor.holta@outlook.com">viktor.holta@outlook.com</a></h5>
      </footer>
    </div>
  );
}

function Index() {
  return (
    <React.Fragment>
      <Article title="About">
        <p>
          This is a wikipedia-esque layout. 
          I decided to create this, because it's different from every other site I've ever created.
          The plan is to adapt the wikipedia layout for general purposes, instead of strictly informative purposes.
        </p>
      </Article>
      <LoremIpsumArticles />
    </React.Fragment>
  );
}

function Contact() {
  return (
    <React.Fragment>
      <ContactArticles />
    </React.Fragment>
  );
}

export default AlphaLayout;