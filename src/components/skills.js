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
      <h3 className="text-white text-3xl font-bold text-center m-14">
        <span className="border-white border-2 px-10 py-2 bg-indigo-700 rounded-sm">
          Skills
        </span>
      </h3>
      <div className="grid grid-cols-3 gap-8 md:grid-cols-12 md:gap-4 mx-auto  my-20">
        <img
          className="w-16 mx-auto"
          src={vscodeIcon}
          alt="Visual Studio code icon"
        />
        <img className="w-16 mx-auto" src={htmlIcon} alt="html icon" />
        <img className="w-16 mx-auto" src={cssIcon} alt="css icon" />
        <img className="w-16 mx-auto" src={tailwindIcon} alt="tailwind icon" />
        <img className="w-16 mx-auto" src={sassIcon} alt="sass icon" />
        <img className="w-16 mx-auto" src={jsIcon} alt="javascript icon" />
        <img className="w-16 mx-auto" src={reactIcon} alt="react icon" />
        <img className="w-16 mx-auto" src={wordpress} alt="wordpress icon" />
        <img className="w-16 mx-auto" src={solidity} alt="solidity icon" />
        <img className="w-16 mx-auto" src={nodeIcon} alt="node.js icon" />
        <img className="w-16 mx-auto" src={gitIcon} alt="git icon" />
        <img className="w-16 mx-auto" src={githubIcon} alt="github icon" />
      </div>
    </section>
  );
}

export default Skills;
