import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Services from "./services";
import NotFound from "./notfound";
import Contact from "./contact";
// import logo from "../media/img/gunndroidLogo3.png";
// import resume from "../media/GunnarCurryResume3.pdf";
import Resume2 from "./resume";

const Header = () => (
  <>
    <nav className="h-fit text-white">
      <div>
        <div className="grid md:grid-cols-5 font-bold text-white text-center md:pr-4 p-6 gap-4">
          <Link
            to="/"
            className="hover:text-blue-400 w-fit text-center mx-auto"
          >
            Home
          </Link>
          <Link to="/services " className="hover:text-blue-400 w-fit mx-auto">
            Services
          </Link>
          <Link to="/resume" className="hover:text-blue-400 w-fit mx-auto">
            Resume
          </Link>
          <Link
            to="https://github.com/Gunndroid"
            target="_blank"
            className="hover:text-blue-400 w-fit mx-auto"
          >
            GitHub
          </Link>

          <div>
            <a
              id="contact"
              className="hover:text-blue-400 w-fit"
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
        <Route path="/resume" element={<Resume2 />} />
      </Routes>
    </div>
  </>
);

export default Header;
