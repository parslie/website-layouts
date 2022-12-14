import React from "react";

import johnSmithImage from "../images/johnsmith.jpg";

function Article({ children, title }) {
  return (
    <article>
      <h2>{title}</h2>
      {children}
    </article>
  );
}

function LoremIpsumArticles() {
  return (
    <React.Fragment>
      <Article title="Lorem Ipsum (1/5)">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper finibus imperdiet. Vestibulum vehicula, mauris id pulvinar tempor, justo felis mattis velit, a iaculis neque metus sit amet ipsum. Praesent egestas fermentum odio at placerat. Mauris egestas odio ut augue scelerisque aliquam. Morbi iaculis ullamcorper mi eget tempor. Nunc vel quam sem. In urna ligula, consequat et posuere non, lacinia vel justo. Sed nec sapien sapien. Ut elementum odio in est pretium, id tincidunt tellus tristique. Proin lobortis felis erat, eu egestas ex aliquet malesuada. Aenean et erat nec velit egestas feugiat. Donec at justo magna. Duis at feugiat nibh. Duis tincidunt sit amet ligula eu sagittis. 
        </p>
      </Article>
      <Article title="Lorem Ipsum (2/5)">
        <p>
        Proin in eleifend purus, consectetur eleifend lectus. In nec erat gravida, tincidunt justo non, iaculis ligula. Fusce erat arcu, porttitor quis ullamcorper porttitor, dignissim vitae elit. Praesent viverra lacinia lectus a elementum. Sed nisi augue, eleifend in volutpat quis, malesuada vel nunc. Morbi hendrerit at arcu vitae cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sed tortor scelerisque, lobortis mauris at, aliquam lectus. 
        </p>
      </Article>
      <Article title="Lorem Ipsum (3/5)">
        <p>
        Ut laoreet fermentum velit. Nulla ut dapibus nisi, venenatis bibendum nunc. Phasellus non placerat velit, ac eleifend nibh. Nunc aliquam massa vitae sapien luctus, ac pharetra libero cursus. Duis eu fringilla nisi. Ut cursus tristique finibus. Suspendisse convallis at enim eu suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas turpis lectus, rhoncus sit amet ultricies vel, blandit non quam. Morbi vitae placerat nisi. Fusce et eleifend neque. Nullam scelerisque non sem ac dignissim. Aenean id odio et nulla tempus ullamcorper in vitae quam. Nunc placerat ex sed augue convallis, a gravida velit malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        </p>
      </Article>
      <Article title="Lorem Ipsum (4/5)">
        <p>
        Sed gravida commodo est, vitae mollis ex blandit non. Phasellus laoreet luctus sagittis. Nulla at fringilla mauris, ac rutrum nulla. Nam sodales augue eros, nec dignissim lacus laoreet eu. Nunc rhoncus imperdiet urna eu tempor. Morbi sed vulputate velit, eu hendrerit tortor. Pellentesque non varius neque. Ut ac mi quis lacus faucibus volutpat. Mauris ultricies eleifend augue non vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc facilisis ante lectus, egestas suscipit sem posuere in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas dictum placerat accumsan. Integer a fringilla ex, sed placerat urna. 
        </p>
      </Article>
      <Article title="Lorem Ipsum (5/5)">
        <p>
        Aliquam erat volutpat. Ut et ligula eros. Mauris a pharetra tortor. Nam ultrices nulla orci, ut commodo quam pharetra non. Quisque rhoncus aliquet ultrices. Cras non posuere tellus. Nam pellentesque odio id erat scelerisque, mattis aliquet magna fermentum. Duis in fringilla justo. Etiam feugiat diam velit, vitae interdum lectus molestie a. Praesent id egestas nunc. Mauris porttitor ex elementum mattis fermentum. Ut consequat ligula sed nisi malesuada laoreet. 
        </p>
      </Article>
    </React.Fragment>
  );
}

function ContactArticles() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export { LoremIpsumArticles, ContactArticles };
export default Article;
