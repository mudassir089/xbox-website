import React from "react";
import { Navbardiv,Navlinks } from "../styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";


const Navbar = () => {
    return(
        <Navbardiv>
            <div>
                <h1>xbox home</h1>
            </div>

            <Navlinks>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link>
                        </li>
                        <li><Link to='/consoles'>consoles</Link>
                        </li>
                        <li><Link to='/controllers'>controllers</Link></li>
                    </ul>
                </nav>
            </Navlinks>

        </Navbardiv>
    )
}



export default Navbar