import { Link, Route, Routes } from "react-router-dom";

const Footer = () => (
  <>
    <footer className="text-center h-28 grid grid-cols-3 items-center font-bold text-white text-md">
      <Link to="/contact">Contact Us</Link>
      <i>"quote"</i>
      <p className="cursor-default">©GunnLukari2023</p>
    </footer>
  </>
);

export default Footer;
