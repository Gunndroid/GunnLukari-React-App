import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Services from "./services";
import NotFound from "./notfound";
import Contact from "./contact";
// import logo from "";

const Header = () => (
  <>
    <nav className="h-24 text-white">
      <div className="text-center grid grid-cols-2 items-center p-8">
        <Link to="/">
          {/* <img src={logo} alt="logo" className="ml-10 w-28" /> */}
        </Link>
        <ul>
          <li className="grid grid-cols-3 mr-8 text-white ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </>
);

export default Header;
