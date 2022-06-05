import React, { useState } from "react";
import * as Fa from "react-icons/fa"; 
import * as Ai from "react-icons/ai"
import {Link} from "react-router-dom";
import {SideBarComponent} from "./sidebarcomp"
import './navbar.css';
import {IconContext, IcondContext } from "react-icons";
import { icons } from "react-icons";

function Navbar(){
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <IconContext.Provider value={{color: "#fff"}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <Fa.FaBars size={30} onClick={showSidebar}/>
                </Link>
                <span className="title">Rick and Morty</span>
                <div className="padding"></div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="menu-items">
                    <li className="navbar-x">
                        <Link to='#' className="menu-bars">
                            <Ai.AiOutlineClose onClick={showSidebar}/>
                        </Link>
                    </li>
                    {SideBarComponent.map((element,index) => {
                        return (
                            <li key={index} className={element.cName}>
                                <Link to={element.path}>
                                    {element.icon}
                                    <span className="text-menu">{element.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav> 
        </IconContext.Provider> 
        </>
    )
}

export default Navbar;