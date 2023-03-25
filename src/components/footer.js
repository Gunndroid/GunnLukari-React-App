import { Link, Route, Routes } from "react-router-dom";

const Footer = () => (
  <>
    <footer className="text-center h-28 grid grid-cols-2 items-center font-bold text-white text-md px-10">
      {/* <Link to="/contact">Contact</Link> */}
      <div>
        <a id="contact" className="links" href="mailto:glukari@protonmail.com">
          Contact
        </a>
      </div>
      {/* <i>"quote"</i> */}
      <p className="cursor-default">©GunnLukari2023</p>
    </footer>
  </>
);

export default Footer;
