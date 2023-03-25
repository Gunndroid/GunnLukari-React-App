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

function Skills() {
  return (
    <section className="m-20 mb-40">
      <h3 className="text-white text-2xl font-bold text-center m-8">
        · Skills ·
      </h3>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-10 md:gap-4 mx-auto px-14">
        <img className="w-16" src={vscodeIcon} alt="Visual Studio code icon" />
        <img className="w-16" src={htmlIcon} alt="html icon" />
        <img className="w-16" src={cssIcon} alt="css icon" />
        <img className="w-16" src={tailwindIcon} alt="tailwind icon" />
        <img className="w-16" src={sassIcon} alt="sass icon" />
        <img className="w-16" src={jsIcon} alt="javascript icon" />
        <img className="w-16" src={reactIcon} alt="react icon" />
        <img className="w-16" src={nodeIcon} alt="node.js icon" />
        <img className="w-16" src={gitIcon} alt="git icon" />
        <img className="w-16" src={githubIcon} alt="github icon" />
      </div>
    </section>
  );
}

export default Skills;
