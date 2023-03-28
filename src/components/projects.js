import React from "react";

import commandcenter from "../media/img/commandcenter.png";
import puffwizz from "../media/img/puffwizz.png";
import neckBackWordpress from "../media/img/neckBackWordpress.png";
import whale from "../media/img/whale.png";
import sleep from "../media/img/sleep.png";
import random_color from "../media/img/random_color.png";
import f1 from "../media/img/f1TeamDarkRed.jpg";

const Projects = () => {
  return (
    <section id="projects-box">
      <h3 className="text-white text-3xl text-center font-bold m-5 ">
        <span className="border-white border-2 px-10 py-2 bg-indigo-700 rounded-sm">
          Projects
        </span>
      </h3>

      <div className="grid md:grid-cols-3 grid-rows-2 gap-14 text-white text-center text-lg m-14">
        <div>
          <p className="font-bold">F1 Cuts</p>
          <a href="https://f1-cuts.vercel.app/" target="_blank">
            <img
              className="rounded-lg border-white border-2 w-5/6 mx-auto m-4"
              src={f1}
              alt="Command Center project"
            />
          </a>
          <p>
            This app is a video marketing agency.
            <br />
            <i>(React, Tailwind CSS)</i>
          </p>
        </div>

        <div id="randomColor">
          <p className="font-bold">Command Center</p>
          <a href="https://cmdcntr.io/" target="_blank">
            <img
              className="rounded-lg border-white border-2 w-5/6 mx-auto m-4"
              src={commandcenter}
              alt="Command Center project"
            />
          </a>

          <p>
            This app manages tickets for web development.
            <br />
            <i>(React, Tailwind CSS)</i>
          </p>
        </div>

        <div id="puffwizz">
          <p className="font-bold">PuffWizz NFT</p>
          <a
            style={{ pointerEvents: "none" }}
            href="https://gunndroid.github.io/puffwizz/"
            target="_blank"
          >
            <img
              className="rounded-lg border-white border-2 w-5/6 mx-auto m-4"
              src={puffwizz}
              alt="Puffwizz NFT project"
            />
          </a>
          <p>
            My Puffwizz NFT project.
            <br />
            <i>(React, Solidity)</i>
          </p>
        </div>

        {/* <div id="neckBackWordpress">
          <p>Chiropractic Office</p>
          <img
            className="rounded-lg border-white border-2 w-5/6 mx-auto m-4"
            src={neckBackWordpress}
            alt="Neck and Back Pain Relief project"
          />
          <p>
            Neck and Back Pain Relief
            <br />
            <i>(Wordpress, Elemetor)</i>
          </p>
        </div> */}

        <div id="whale">
          <p className="font-bold">Human to Whale Speech</p>
          <a
            href="https://gunndroid.github.io/Human-to-Whale-Talk/"
            target="_blank"
          >
            <img
              className="rounded-lg border-white border-2 w-5/6 mx-auto m-4"
              src={whale}
              alt="Human to Whale Speech project"
            />
          </a>
          <p>
            This app will translate English into Whale Speech.
            <br />
            <i>(Javascript)</i>
          </p>
        </div>

        <div id="sleep">
          <p className="font-bold">Sleep Debt Calculator</p>
          <a
            href="https://gunndroid.github.io/sleepDebtCalculator/"
            target="_blank"
          >
            <img
              className="rounded-lg border-white border-2 w-5/6 mx-auto m-4"
              src={sleep}
              alt="Sleep Debt Calculator project"
            />
          </a>
          <p>
            This will calculate if you need more sleep each week.
            <br />
            <i>(Javascript)</i>
          </p>
        </div>

        <div id="randomColor">
          <p className="font-bold">Color Randomizer</p>
          <a href="https://gunndroid.github.io/random_color/" target="_blank">
            <img
              className="rounded-lg border-white border-2 w-5/6 mx-auto m-4"
              src={random_color}
              alt="Color Randomizer app"
            />
          </a>
          <p>
            This app generates a random RGB color.
            <br />
            <i>(React)</i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
