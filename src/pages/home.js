import Landingpage from "../components/landingpage";
import React from "react";
import Landingpagepart2 from "../components/landingpagepart2";
import Gamepass from "../components/gamepass";
import Faqsec from "../components/faq";
import { motion } from "framer-motion";
import { Pagetransition } from "../components/animation";
import ScrolltoTop from "../components/scrolltop";
const Home = () =>{
 return(
     <motion.div variants={Pagetransition} initial="hidden" animate="show" exit="exit">
         
         <Landingpage />
         <Landingpagepart2 />
         <Gamepass />
         <Faqsec />
         <ScrolltoTop />
     </motion.div>
 )
}

export default Home