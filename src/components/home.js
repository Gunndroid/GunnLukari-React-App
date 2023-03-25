import "../index.css";
import ContactBox from "./contactBox";
import Projects from "./projects";
import Skills from "./skills";

const Home = () => (
  <main>
    {/* Main Landing Content */}
    <p className="text-white text-3xl text-center p-20">Who is Gunn Lukari?</p>
    <div className="grid grid-cols-2">
      <p className="text-white text-xl w-5/6 mx-auto px-20">
        Gunnar is a skilled programmer from the United States. He discovered a
        passion for programming through his interest in Smart Contracts. With a
        strong desire to understand the intricacies of code, he set out on a
        journey to master the craft.
        <br />
        <br />
        Over the years, Gunnar diligently climbed the programming mountain,
        mastering the fundamental building blocks of HTML, CSS, Tailwind,
        Javascript, React, GIT, Wordpress and other essential technologies. He
        completed several intermediate-level online courses to further enhance
        his skills and knowledge.
        <br />
        <br />
        Gunnar is happy to contribute to the programming community and make a
        meaningful impact in the field. He is well-prepared and ready to meet
        the challenges that lie ahead.
        <br />
        <br />
      </p>
      <ContactBox />
    </div>
    <Skills />
    <Projects />
  </main>
);

export default Home;
