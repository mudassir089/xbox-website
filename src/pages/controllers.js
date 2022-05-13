import React from "react";
import { motion } from "framer-motion";
import { Pagetransition } from "../components/animation";
import Controllerlandingpage from "../components/controllerlanding";
import ScrolltoTop from "../components/scrolltop";

const Controllerspage = ({controller}) => {
    return(
        <motion.div variants={Pagetransition} initial="hidden" animate="show" exit="exit">
            <Controllerlandingpage controller={controller}/>
            <ScrolltoTop />
        </motion.div>
    )
}

export default Controllerspage