import React from "react";
import { Consolewrapper } from "../styles2";
import Oneconsole from "./oneconsole";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Fancypages } from "./animation";
import {Fancypagescontainer} from "./animation"


const Consolelandingpage = ({consoles}) => {
    return(
        
        <Consolewrapper>
            <motion.div variants={Fancypagescontainer}>
            <Frame1 variants={Fancypages}></Frame1>
            <Frame2 variants={Fancypages}></Frame2>
            <Frame3 variants={Fancypages}></Frame3>
            </motion.div>
        <div className="grid">
           {consoles.map(item => {
               return <Oneconsole item={item} key={item.id} consoles={consoles}  />
           })}

       </div>
        </Consolewrapper>
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

export default Consolelandingpage