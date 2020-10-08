import React from "react";
import "./Footer.css";
// import {SocialMediaIconsReact} from 'social-media-icons-react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <div className="footerContainer">
            <div className="socialIcons">
                <SocialIcon network="twitter" bgColor="#00000" />
                <SocialIcon network="github" bgColor="#00000" />
                <SocialIcon network="linkedin" bgColor="#00000" />
                <SocialIcon network="email" bgColor="#00000" />
                {/* <SocialMediaIconsReact className="social-icon-link" aria-label="Github" borderColor="rgba(0,0,0,1)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="9" roundness="50%" url="https://github.com/katiemhughes" size="40" />
                <SocialMediaIconsReact className="social-icon-link" aria-label="LinkedIn" borderColor="rgba(0,0,0,0.4)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,123,182,1)" iconSize="5" roundness="50%" url="http://www.linkedin.com/in/katiemhughes95" size="40" />
                <SocialMediaIconsReact className="social-icon-link" aria-label="Twitter"  borderColor="rgba(0,0,0,0.3)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="5" roundness="50%" url="https://twitter.com/katiemhughes_" size="39" />
                <SocialMediaIconsReact className="social-icon-link" aria-label="Email" borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(29,112,182,1)" iconSize="5" roundness="50%" url="mailto:katie.m.hughes@hotmail.co.uk" size="40" /> */}
            </div>
        </div>

    );
};

export default Footer;