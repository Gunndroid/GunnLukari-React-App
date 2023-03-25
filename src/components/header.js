import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Services from "./services";
import NotFound from "./notfound";
import Contact from "./contact";
import logo from "../media/img/gunndroidLogo3.png";
import resume from "../media/GunnarCurryResume3.pdf";

const Header = () => (
  <>
    <nav className="h-fit text-white">
      <div className="grid md:grid-cols-2 items-center p-6">
        <Link to="/">
          <img
            className="md:ml-10 md:w-1/4"
            src={logo}
            alt="Gunn Lukari Logo"
          />
        </Link>
        {/* <p className="font-bold">Welcome to My Portfolio</p> */}
        <ul className="p-2">
          <li className="grid grid-cols-4 font-bold mr-8 text-white text-center md:text-right md:pr-4 p-10">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>

            <Link to="https://github.com/Gunndroid" target="_blank">
              GitHub
            </Link>
            <Link to={resume} target="_blank">
              Resume
            </Link>
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
