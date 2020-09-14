import React from 'react';
import "./About.css";
import AboutMePic from "../images/aboutmepic.jpg";

function About() {
  return (
    <div className="aboutContainer">
      <div className="row">
        <div className="column">
          <div className="columnOne">
            <img src={AboutMePic} className="aboutMePic" alt="Photograph of me" />
          </div>
        </div>
        <div className="column">
          <div className="columnTwo">
            <p>
              I'm a junior full stack developer who has just graduated from <a target="_blank" href="https://wearecodenation.com/" className="aboutLinks"> Code Nation</a> - one of the UK's leading coding schools. I was awarded the <a target="_blank" href="https://digitalher.co.uk/digital-her-scholarship/" className="aboutLinks">Digital Her</a> scholarship, which I am very proud of.
            </p>
            <p>
              At the beginning of the COVID-19 lockdown, I lost my job in HR. Instead of letting this get me down, I decided this was the perfect opportunity for a career change.
            </p>
            <p>
              I had recently taken up music production as a hobby, live coding music on <a target="_blank" href="https://sonic-pi.net/" className="aboutLinks">Sonic Pi</a>, so I decided to put this skill to good use. I did some FreeCodeCamp courses and completed a three week course at Code Nation before starting the 12 week bootcamp.
            </p>
            <p>
              My degree in French and Spanish is helpful too - they do call Javascript a programming language, after all!
            </p>
            <p>
              If you want to find out more about me, check out my socials below!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;