import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./alpha.scss";
import johnSmithImage from "../images/johnsmith.jpg";

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
      <article>
        <h2>About</h2>
        <p>
          This is a wikipedia-esque layout. 
          I decided to create this, because it's different from every other site I've ever created.
          The plan is to adapt the wikipedia layout for general purposes, instead of strictly informative purposes.
        </p>
      </article>
      <article>
        <h2>Lorem Ipsum (1/5)</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper finibus imperdiet. Vestibulum vehicula, mauris id pulvinar tempor, justo felis mattis velit, a iaculis neque metus sit amet ipsum. Praesent egestas fermentum odio at placerat. Mauris egestas odio ut augue scelerisque aliquam. Morbi iaculis ullamcorper mi eget tempor. Nunc vel quam sem. In urna ligula, consequat et posuere non, lacinia vel justo. Sed nec sapien sapien. Ut elementum odio in est pretium, id tincidunt tellus tristique. Proin lobortis felis erat, eu egestas ex aliquet malesuada. Aenean et erat nec velit egestas feugiat. Donec at justo magna. Duis at feugiat nibh. Duis tincidunt sit amet ligula eu sagittis. 
        </p>
      </article>
      <article>
        <h2>Lorem Ipsum (2/5)</h2>
        <p>
          Proin in eleifend purus, consectetur eleifend lectus. In nec erat gravida, tincidunt justo non, iaculis ligula. Fusce erat arcu, porttitor quis ullamcorper porttitor, dignissim vitae elit. Praesent viverra lacinia lectus a elementum. Sed nisi augue, eleifend in volutpat quis, malesuada vel nunc. Morbi hendrerit at arcu vitae cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sed tortor scelerisque, lobortis mauris at, aliquam lectus. 
        </p>
      </article>
      <article>
        <h2>Lorem Ipsum (3/5)</h2>
        <p>
          Ut laoreet fermentum velit. Nulla ut dapibus nisi, venenatis bibendum nunc. Phasellus non placerat velit, ac eleifend nibh. Nunc aliquam massa vitae sapien luctus, ac pharetra libero cursus. Duis eu fringilla nisi. Ut cursus tristique finibus. Suspendisse convallis at enim eu suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas turpis lectus, rhoncus sit amet ultricies vel, blandit non quam. Morbi vitae placerat nisi. Fusce et eleifend neque. Nullam scelerisque non sem ac dignissim. Aenean id odio et nulla tempus ullamcorper in vitae quam. Nunc placerat ex sed augue convallis, a gravida velit malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        </p>
      </article>
      <article>
        <h2>Lorem Ipsum (4/5)</h2>
        <p>
          Sed gravida commodo est, vitae mollis ex blandit non. Phasellus laoreet luctus sagittis. Nulla at fringilla mauris, ac rutrum nulla. Nam sodales augue eros, nec dignissim lacus laoreet eu. Nunc rhoncus imperdiet urna eu tempor. Morbi sed vulputate velit, eu hendrerit tortor. Pellentesque non varius neque. Ut ac mi quis lacus faucibus volutpat. Mauris ultricies eleifend augue non vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc facilisis ante lectus, egestas suscipit sem posuere in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas dictum placerat accumsan. Integer a fringilla ex, sed placerat urna. 
        </p>
      </article>
      <article>
        <h2>Lorem Ipsum (5/5)</h2>
        <p>
          Aliquam erat volutpat. Ut et ligula eros. Mauris a pharetra tortor. Nam ultrices nulla orci, ut commodo quam pharetra non. Quisque rhoncus aliquet ultrices. Cras non posuere tellus. Nam pellentesque odio id erat scelerisque, mattis aliquet magna fermentum. Duis in fringilla justo. Etiam feugiat diam velit, vitae interdum lectus molestie a. Praesent id egestas nunc. Mauris porttitor ex elementum mattis fermentum. Ut consequat ligula sed nisi malesuada laoreet. 
        </p>
      </article>
    </React.Fragment>
  );
}

function Contact() {
  return (
    <React.Fragment>
      <article>
        <h2>Contact</h2>
        <div className="contact-grid">
          <section>
            <img alt="John Smith" src={johnSmithImage} />
            <div>
              <h3 className="name">John Smith</h3>
              <h5 className="email"><a href="mailto:none">john.smith@gmail.com</a></h5>
              <p>This is John Smith.</p>
            </div>
          </section>
          <section>
            <img alt="John Smith" src={johnSmithImage} />
            <div>
              <h3 className="name">John Smith</h3>
              <h5 className="email"><a href="mailto:none">also.john.smith@gmail.com</a></h5>
              <p>This is also John Smith.</p>
            </div>
          </section>
          <section>
            <img alt="John Smith" src={johnSmithImage} />
            <div>
              <h3 className="name">John Smith</h3>
              <h5 className="email"><a href="mailto:none">also.john.smith.but.with.a.way.longer.address@gmail.com</a></h5>
              <p>This is also John Smith.</p>
            </div>
          </section>
        </div>
      </article>
    </React.Fragment>
  );
}

export default AlphaLayout;