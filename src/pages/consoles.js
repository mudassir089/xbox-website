import React from "react";
import { Consolepage } from "../styles2";
import Consolelandingpage from "../components/consolelandingpage";
import { motion } from "framer-motion";
import { Pagetransition } from "../components/animation";
import ScrolltoTop from "../components/scrolltop";

const Consolespage = ({consoles}) => {
    return(
        <Consolepage variants={Pagetransition} animate="show" initial="hidden" exit="exit">
            <Consolelandingpage consoles={consoles}  />
            <ScrolltoTop />
        </Consolepage>
    )
}

export default Consolespage