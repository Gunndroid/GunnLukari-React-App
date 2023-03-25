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
      <div>
        <div className="grid md:grid-cols-5 font-bold text-white text-center md:pr-4 p-6 gap-4">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/services " className="hover:text-blue-400">
            Services
          </Link>
          <Link to={resume} target="_blank" className="hover:text-blue-400">
            Resume
          </Link>
          <Link
            to="https://github.com/Gunndroid"
            target="_blank"
            className="hover:text-blue-400"
          >
            GitHub
          </Link>

          <div>
            <a
              id="contact"
              className="hover:text-blue-400"
              href="mailto:glukari@protonmail.com"
            >
              Contact
            </a>
          </div>
        </div>
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
