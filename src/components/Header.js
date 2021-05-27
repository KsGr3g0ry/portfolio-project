import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Greg Brothers Digital portfolio</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Applications", "Full Stack Engineer", "Cyber Security","Soldier"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    />
                    <a href="/#" className="btn-main-offer">contact me</a>
            </div>  
        </div>
    )
}

export default Header;
