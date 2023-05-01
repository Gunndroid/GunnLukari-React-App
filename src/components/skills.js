import vscodeIcon from "../media/icons/vscode.png";
import htmlIcon from "../media/icons/html3.png";
import cssIcon from "../media/icons/css4.png";
import tailwindIcon from "../media/icons/Tailwind.svg";
import sassIcon from "../media/icons/sass2.png";
import jsIcon from "../media/icons/js.png";
import reactIcon from "../media/icons/react.png";
import nodeIcon from "../media/icons/node.png";
import gitIcon from "../media/icons/git.png";
import githubIcon from "../media/icons/github.png";
import solidity from "../media/icons/Solidity-Logo2.png";
import wordpress from "../media/icons/WordPress.com-Logo2.png";

function Skills() {
  return (
    <section className="m-20 mb-40">
      <h3 className="text-white text-2xl font-bold text-center m-14">
        <span className=" px-10 py-2 bg-stone-700 rounded-md">Skills</span>
      </h3>
      <div className="grid grid-cols-3 gap-8 md:grid-cols-12 md:gap-4 mx-auto my-20">
        <img
          className="w-16 mx-auto transform-gpu transition-transform duration-300 hover:scale-125"
          src={vscodeIcon}
          alt="Visual Studio code icon"
        />
        <img
          className="w-16 mx-auto transform-gpu transition-transform duration-300 hover:scale-125"
          src={htmlIcon}
          alt="html icon"
        />
        <img
          className="w-16 mx-auto transform-gpu transition-transform duration-300 hover:scale-125"
          src={cssIcon}
          alt="css icon"
        />
        <img
          className="w-16 mx-auto transform-gpu transition-transform duration-300 hover:scale-125"
          src={tailwindIcon}
          alt="tailwind icon"
        />
        <img
          className="w-16 mx-auto transform-gpu transition-transform duration-300 hover:scale-125"
          src={sassIcon}
          alt="sass icon"
        />
        <img
          className="w-16 mx-auto transform-gpu transition-transform duration-300 hover:scale-125"
          src={jsIcon}
          alt="javascript icon"
        />
        <img
          className="w-16 mx-auto transform-gpu transition-transform duration-300 hover:scale-125"
          src={reactIcon}
          alt="react icon"
        />
        <img
          className="w-16 mx-auto transform-gpu transition-transform duration-300 hover:scale-125"
          src={wordpress}
          alt="wordpress icon"
        />
        <img
          className="w-16 mx-auto transform-gpu transition-transform duration-300 hover:scale-125"
          src={solidity}
          alt="solidity icon"
        />
        <img
          className="w-16 mx-auto transform-gpu transition-transform duration-300 hover:scale-125"
          src={nodeIcon}
          alt="node.js icon"
        />
        <img
          className="w-16 mx-auto transform-gpu transition-transform duration-300 hover:scale-125"
          src={gitIcon}
          alt="git icon"
        />
        <img
          className="w-16 mx-auto transform-gpu transition-transform duration-300 hover:scale-125"
          src={githubIcon}
          alt="github icon"
        />
      </div>
    </section>
  );
}

export default Skills;
