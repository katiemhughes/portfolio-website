import React from "react";
import "../App.css";
import "./Sidebar.css";
import {SocialMediaIconsReact} from 'social-media-icons-react';

const Sidebar = () => {
    return (
        <div className="sideBar">
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.16)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,0.75)" backgroundColor="rgba(0,0,0,0.24)" iconSize="9" roundness="50%" url="https://github.com/katiemhughes" size="40" />
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,123,182,0.29)" iconSize="5" roundness="50%" url="http://www.linkedin.com/in/katiemhughes95" size="40" />
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,0.38)" iconSize="5" roundness="50%" url="https://twitter.com/katiemhughes_" size="39" />
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(29,112,182,0.34)" iconSize="5" roundness="50%" url="mailto:katie.m.hughes@hotmail.co.uk" size="40" />
        </div>
    );
};

export default Sidebar;