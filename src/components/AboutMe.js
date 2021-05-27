import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                     <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">about me</h1>
                    <p>
                    Hello! I am Gregory. I have just started down the path of software engineering. I’m a Full-Stack Engineer for 
                    the Army Software Factory. Technologies that I currently use are ReactJS, MySQL, and Java Spring. Before embarking 
                    on the journey of software engineering, I was a Cyber Network Defender for the US Army and stationed at Fort Hood, Tx.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
