import React, { useState } from 'react'
import "../App.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "../images/logo.png";
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [showLinks, setShowLinks] = useState(false);


    return (
        <div className="Navbar">

             {/*Links for NavBar*/}
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/mens">Mens</NavLink>
                    <NavLink to="/womens">Womens</NavLink>
                    <NavLink to="/sales">Sales</NavLink>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}> 
                <ReorderIcon />
                </button>


            </div>


           {/*Logo For the NavBar*/}
            <img class="navbarLogo" alt="Main Logo" src={Logo}></img>

            


           {/*Search Bar for NavBar*/}
            <div className="rightSide">
            
                <input type="text" placeholder="search" />
                <button>
                    <SearchIcon />
                </button>

                <div className="linksRight" id={showLinks ? "hidden" : ""}>
                <a href="/Login">Login</a>
                </div>

              

            </div>

            

        </div>

    )
}

export default Navbar
