import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We Work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your dreams</h2>
                    </Hide>
                    <Hide>
                        <h2>come true.</h2>
                    </Hide>
                </div>
                <p>Contact Us for any photography</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="Home" />
            </Image>
        </About>
    );
};

export default AboutSection;
