import React from "react";
import "./navbar.css"
import Carazol from "./Carazol";
function NavBar(){
    return(
        <div>
           <header className="main">
            <nav className="container">
                <div className="nav1">
                    <img src="https://afcat.cdac.in/AFCAT/assets/images/logo/2.png" alt=""  width={"50%"} height={"100%"}/>
                </div>
                <div className="nav2">
                    <ul>
                        <li><a href=""><b>HOME</b></a></li>
                        <li><a href=""><b>ABOUT</b></a></li>
                        <li><a href=""><b>LIFE IN IAF</b></a></li>
                        <li><a href=""><b>CAREER</b></a></li>
                        <li><a href=""><b>SELECTION</b></a></li>
                        <li><a href=""><b>TRAINING</b></a></li>
                        <li><a href=""><b>CONTACT US</b></a></li>
                        <li><a href=""><b>SITE MAP</b></a></li>
                    </ul>
                    </div>
                <div className="nav3">
                    <img src="https://afcat.cdac.in/AFCAT/assets/images/logo/75.png" height={"30%"} width={"30%"}/>
                </div>
            </nav>
            <div>
            <Carazol/>
            </div>
           </header>
        </div>
    )
}
export default NavBar
