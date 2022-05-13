import React from "react";
import { Controllerwrapper } from "../styles2";
import Onecontroller from "./onecontroller";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Fancypages } from "./animation";
import {Fancypagescontainer} from "./animation"

const Controllerlandingpage = ({controller}) => {
    return(
        
        <Controllerwrapper>
            <motion.div variants={Fancypagescontainer}>
            <Frame1 variants={Fancypages}></Frame1>
            <Frame2 variants={Fancypages}></Frame2>
            <Frame3 variants={Fancypages}></Frame3>
            </motion.div>
        <div className="grid">
           {controller.map(item => {
               return <Onecontroller item={item} key={item.id} controller={controller}/>
           })}

       </div>
        </Controllerwrapper>
    )
}

const Frame1 = styled(motion.div)`
position: fixed;
height: 100vh;
width: 100%;
left: 0%;
top: 10%;
background-color: #fff;
z-index: 3;
`;

const Frame2 = styled(Frame1)`
background-color: #00ff00;

`;
const Frame3 = styled(Frame1)`
background-color: #fff;

`;

export default Controllerlandingpage