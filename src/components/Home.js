import React from 'react';
import "./Home.css";
import Typical from "react-typical";
import Portrait from "../images/alexsolmanportrait.jpg";

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
        </div>
    )
}

export default Home;