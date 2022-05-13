import React from "react";
import svging from '../images/Ellipse 1.svg'
import xboximage1 from '../images/xbox6.png'
import { Maindiv ,Imagediv,Maintextdiv} from "../styles";
import {motion} from 'framer-motion'
import { imageanim } from "./animation";
import { titleanim } from "./animation";
const Landingpage = () => {


    return(
        <Maindiv>
           <Maintextdiv variants={titleanim}>
               <h1>the new and only
                   <span>xbox</span>
               </h1>
               <h2>Lorem ipsum dolor sit.</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, earum? Autem nisi dolor nobis tempora?</p>
               <button>shopnow</button>
            </ Maintextdiv>
            <motion.div>
           <Imagediv variants={imageanim}>
               <motion.img src={xboximage1} alt="" className='xbox'/>  
        </Imagediv>
        </motion.div>
        </Maindiv>
    )
}

export default Landingpage