import React,{useState} from "react";
import {motion} from 'framer-motion'

const Toggle = ({children,ques}) => {

    const [toggle,settoggle] = useState(false)

    return(
        <motion.div onClick={() => settoggle(!toggle)} layout>
        <motion.h3 layout>{ques}</motion.h3>
            {toggle ? children : ""}
        </motion.div>
    )
}

export default Toggle