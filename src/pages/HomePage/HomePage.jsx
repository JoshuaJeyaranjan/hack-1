import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.scss";
import Video from "../../assets/videos/home-video.mp4"; // Import your video file

const HomePage = () => {
    return (
        <div className="HomePage">
            <div className="background">
                {/* Video Background */}
                <div className="video-container">
                    <video autoPlay loop muted className="video">
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>

                {/* Overlay */}
                <div className="overlay"></div>
                <p className="HomePage__header">Super App</p>
                <p className="HomePage__slogan">
                    "With Great Power Comes Great Responsibility" - Uncle Ben
                </p>
                <Link className="HomePage__link" to="/battle">
                    <div className="HomePage__button">
                        <p className="HomePage__button__text">Let's Go!</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
