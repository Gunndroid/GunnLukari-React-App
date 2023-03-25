import React from "react";
import portrait from "../media/img/gunnLukariAI.JPG";
import resume from "../media/GunnarCurryResume3.pdf";

function ContactBox() {
  return (
    <section>
      <div className="">
        <img
          className="w-1/2 rounded-lg border-2 border-white mx-auto"
          id="portrait"
          src={portrait}
          alt="This is a portrait of Gunndroid."
        />

        {/* contact email link */}
        <div className="text-white text-center grid grid-cols-3 p-4">
          <div>
            <a
              id="contact"
              className="links"
              href="mailto:glukari@protonmail.com"
            >
              contact
            </a>
          </div>
          <div>
            <a
              id="resume"
              className="links"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
          </div>
          <div>
            <a
              id="github"
              className="links"
              href="https://github.com/Gunndroid?tab=repositories"
              target="_blank"
            >
              github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactBox;
