import React from 'react'

const Experience = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
               <h1>experience</h1> 
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020-Current Austin, Tx</h3>
                        <p>Currently serving as a software developer with Army Software Factory in Austin, Tx. I have been giving 
                        the opportunity to learn front-end and back-end development. I will be working on a application with three other 
                        Developers, two Designers and two PMs.
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018-2020 Ft. Hood</h3>
                        <p>I was serving as Cyber Network Defender in 57th ESB and 62D ESB under 11th Signal Brigade. While assigned to them I performed
                        network scanning and patching, policy writing, and digital forensics. I acquired experience in
                        Tenable Nessus, Security Onion, Splunk and other security suite softwares just to name a few. 
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2017-2018 Afghanistan</h3>
                        <p>I was deployed to Bagram Air Field in Afghanistan with 25th Signal Battalion as the HelpDesk NCOIC. My duties stretch well
                        past that as I was helped run not only the Desktop Support, but Information Assurance, Network Admins, and System Admins I was
                        able to accomplish many things but the biggest one was the ability to stand up a Pearson Vue testing center so that my Soldiers
                        could obtain industry certifications.
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2015-2017 Ft. Hood</h3>
                        <p>I was assigned to G6 inside of 1st Cavalry Division working the Communication Security, COMSEC, vault. As
                        the higher headquarters we are looked at to be the subject matter experts when dealing with electronic and physical
                        cryptographic keys. This job taught me that attention to details and when I don't understand something to ask question
                        before leaving a meeting.
                        </p>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Experience;
