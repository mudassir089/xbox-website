import React from "react";
import { Faqdiv,Questions } from "../styles";
import Toggle from "./toggle";
import { AnimateSharedLayout } from "framer-motion";
import { simple } from "./animation";
import {motion} from 'framer-motion'
import { useScroll } from "./usescroll";
import { simplescale } from "./animation";
const Faqsec = () => {

    const [element,controlanimation] = useScroll()


    return(
        <Faqdiv ref={element} animate={controlanimation} initial="hidden" variants={simplescale}>
            <div className='headingfaq'>
                <h1>frequently asked questions</h1>
                <h2>F.A.Q</h2>
            </div>
            <AnimateSharedLayout>
            <Questions>
                <Toggle ques="Q 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, doloribus!">
                <motion.p variants={simple} initial="hidden" animate="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam nisi consequatur, magni fugit sed libero veniam similique placeat obcaecati saepe nihil, sunt provident eaque!</motion.p>
                </Toggle>
            </Questions>
            <Questions>
                <Toggle ques="Q 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, doloribus!">
                <motion.p variants={simple} initial="hidden" animate="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam nisi consequatur, magni fugit sed libero veniam similique placeat obcaecati saepe nihil, sunt provident eaque!</motion.p>
                </Toggle>
            </Questions>
            <Questions>
                <Toggle ques="Q 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, doloribus!">
                <motion.p variants={simple} initial="hidden" animate="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam nisi consequatur, magni fugit sed libero veniam similique placeat obcaecati saepe nihil, sunt provident eaque!</motion.p>
                </Toggle>
            </Questions>
            <Questions>
                <Toggle ques="Q 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, doloribus!">
                <motion.p variants={simple} initial="hidden" animate="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam nisi consequatur, magni fugit sed libero veniam similique placeat obcaecati saepe nihil, sunt provident eaque!</motion.p>
                </Toggle>
            </Questions>
            </AnimateSharedLayout>

        </Faqdiv>
    )
}

export default Faqsec