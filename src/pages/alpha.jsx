import { Route, Routes, NavLink } from "react-router-dom";
import { FiMoon } from "react-icons/fi";

import "./alpha.scss";

function IconButton({ Icon, onClick }) {
  return (
    <button className="icon-button" onClick={onClick}>
      <Icon className="icon" />
    </button>
  )
}

function AlphaLayout() {
  return (
    <div className="alpha red">
      <header>
        <div className="left"></div>
        <h1>Layout α</h1>
        <div className="right">
          <IconButton Icon={FiMoon} onClick={() => alert("You clicked the dark theme button!")} />
        </div>
      </header>

      <nav>
        <NavLink end to="." className={({ isActive }) => isActive ? "selected" : undefined}>Home</NavLink>
        <NavLink end to="./services" className={({ isActive }) => isActive ? "selected" : undefined}>Services</NavLink>
        <NavLink end to="./events" className={({ isActive }) => isActive ? "selected" : undefined}>Events</NavLink>
      </nav>

      <main>
        <Routes>
          <Route index element={<AlphaIndex />} />
        </Routes>
      </main>

      <footer>
        <h4>Parslie {/*©*/} 2022 | <a href="mailto:viktor.holta@outlook.com">viktor.holta@outlook.com</a></h4>
      </footer>
    </div>
  );
}

function AlphaIndex() {
  return (
    <>
      <h1>About</h1>
      <hr />
      <p>
        This layout is the same the layout of <a href="https://www.webbu.se/">webbu.se</a>.
        I'm part of the group that made that site, so I wanted to try and expand/modify it.
        Though, I don't know what to add/change at the moment. I wan
      </p>

      <h1>Lorem Ipsum (1/2)</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lorem fringilla velit dictum, ac tincidunt lectus egestas. In hac habitasse platea dictumst. Suspendisse scelerisque eget dui vel semper. Aliquam condimentum augue eget odio sagittis, eget molestie nunc porttitor. Duis vitae lorem convallis, condimentum nisl vitae, elementum odio. Praesent eget venenatis enim. Mauris placerat, ex a rutrum molestie, nulla nulla tincidunt nisl, id mattis lectus elit sit amet risus. Cras mollis ex vitae sapien consequat, sed ullamcorper enim consectetur. Aliquam elementum pretium arcu ac finibus. Morbi quis velit quis lectus suscipit sollicitudin.
      </p>
      <p>
        Mauris at pretium lectus. Integer bibendum cursus turpis non auctor. Duis tellus tortor, mattis sed finibus vel, lobortis non metus. Proin a porttitor mauris. Nulla tempus, erat porttitor imperdiet laoreet, leo sapien feugiat leo, ullamcorper interdum nibh augue sit amet purus. Etiam rutrum facilisis consectetur. Duis mollis fringilla nibh, at iaculis risus elementum id. Morbi sagittis, lacus nec hendrerit pulvinar, nisl nunc molestie velit, non facilisis turpis orci sed metus. Phasellus ipsum urna, pellentesque hendrerit vehicula ut, aliquam eu lectus. Mauris id porta ipsum. Nam consequat vestibulum arcu. Suspendisse vel nulla luctus nibh malesuada consequat. Nullam rhoncus leo erat, eget ultricies magna congue sit amet. Curabitur sagittis risus et augue consectetur lobortis. 
      </p>

      <h1>Lorem Ipsum (2/2)</h1>
      <hr />
      <p>
        Morbi vitae venenatis est. Nullam ut mauris ac libero pulvinar aliquam in ultrices ipsum. Aliquam neque sapien, auctor ut feugiat nec, sagittis id arcu. Nunc imperdiet ut augue gravida gravida. Nullam pellentesque nisl vitae erat tincidunt, ut scelerisque nisl pellentesque. Nulla pretium mi luctus iaculis sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce condimentum porta leo vel hendrerit. Integer semper sollicitudin eros, ac consectetur orci malesuada ac.
      </p>
      <p>
        In sagittis ipsum vehicula, tincidunt ante sit amet, tempus nunc. Cras pellentesque feugiat mollis. Nam id tempor arcu. Quisque malesuada leo purus, nec pretium lacus malesuada quis. Cras dapibus diam lectus, finibus consectetur nibh sagittis ac. Nam lorem arcu, porta eu ipsum at, euismod consectetur magna. Nunc at quam urna. Sed risus risus, convallis a elit ut, tincidunt fermentum arcu. Aenean quis felis a metus tempus sollicitudin nec vel orci. Aenean libero eros, venenatis tincidunt laoreet vitae, gravida at libero. Duis rutrum metus ut ullamcorper faucibus. Mauris iaculis ante at lorem efficitur, quis aliquet ligula vehicula. Praesent faucibus nunc neque, in egestas augue ultricies vitae.
      </p>
      <p>
        Mauris posuere eu turpis non commodo. Vestibulum vel efficitur augue, porta posuere magna. Quisque pulvinar neque dui. Aliquam eu varius arcu, eu iaculis massa. In volutpat justo nec lectus ultricies rutrum. Praesent sed finibus magna, ut mattis metus. Aenean quis aliquam lectus, sed tempor massa. 
      </p>
    </>
  );
}

export default AlphaLayout;