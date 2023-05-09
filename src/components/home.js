import "../index.css";
import ContactBox from "./contactBox";
import Projects from "./projects";
import Skills from "./skills";

const Home = () => (
  <main>
    {/* Main Landing Content */}
    <p className="text-black text-4xl text-center pt-14 p-10 md:p-20 font-bold">
      Who is Gunnar Lukari?
    </p>
    <div className="grid md:grid-cols-2">
      <p className="text-black text-xl md:w-full mx-auto px-12 py-6 md:px-20 text-justify md:text-left order-2 md:order-1">
        Gunnar is a dedicated full-stack developer based in the United States,
        with a passion for programming ignited by an early interest in Smart
        Contracts. He excels in frontend technologies like HTML, CSS, Tailwind,
        JavaScript, and React, creating visually appealing and responsive user
        interfaces. In backend development, Gunnar is proficient with tools like
        Git and WordPress, ensuring robust and well-integrated functionality for
        his projects.
        <br />
        <br />
        Committed to staying current with the ever-changing tech landscape,
        Gunnar actively engages in ongoing learning by completing a variety of
        online courses. This dedication to continuous growth keeps him at the
        forefront of emerging trends and best practices in both frontend and
        backend development.
        <br />
        <br />
        Gunnar takes pride in contributing to the programming community and is
        eager to make a positive impact within the industry. He approaches each
        new challenge with enthusiasm and a problem-solving mindset, delivering
        innovative solutions and top-notch programming expertise to every
        project he undertakes.
        <br />
        <br />
      </p>
      <div className="order-1 md:order-2">
        <ContactBox />
      </div>
    </div>
    <Skills />
    <Projects />
  </main>
);

export default Home;
