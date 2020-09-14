import React from 'react';
import "./Home.css";
import Typical from "react-typical";
import Portrait from "../images/alexsolmanportrait.jpg";
import ExpressLogo from "../images/expressjs.png";
import NodejsLogo from "../images/nodejs.png";
import JSLogo from "../images/js.png";
import ReactLogo from "../images/reactjs.png"
import MongodbLogo from "../images/mongodb.png";
import PythonLogo from "../images/python.png";

function Home() {
    return (
        <div className="homeContainer">
            <div className="intro">
                <h1>Hello<span className="purpleCharacters">,</span> I'm Katie<span className="purpleCharacters">.</span></h1>
                    <p className="typicalText">
                    I'm {" "}

                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            "a full stack developer",
                            2000,
                            "an accessibility advocate",
                            2000,
                            "a feminist",
                            2000,
                            "a CSS enthusiast",
                            2000,
                            "a trilinguist",
                            2000,
                            "a music lover",
                            2000
                        ]}
                    />
                    <span className="purpleCharacters">.</span>
                    </p>
                    <img src={Portrait} className="portrait" alt="Illustration of me by Alex Solman" />
            </div>
            <div className="logos-container">
                <img src={JSLogo} className="js-logo" alt="Javascript logo" />
                <img src={NodejsLogo} className="nodejs-logo" alt="Node.js logo" />
                <img src={ExpressLogo} className="express-logo" alt="ExpressJS logo" />
                <img src={ReactLogo} className="react-logo" alt="React JS logo" />
                <img src={MongodbLogo} className="mongodb-logo" alt="MongoDB logo" />
                <img src={PythonLogo} className="python-logo" alt="Python logo" />                     
            </div>
        </div>
    )
}

export default Home;