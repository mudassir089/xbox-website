import React from "react";
import { Gamepassdiv } from "../styles";
import { useScroll } from "./usescroll";
import { simplescale } from "./animation";

const Gamepass = () => {

    const [element,controlanimation] = useScroll()    

    return(
        <Gamepassdiv ref={element} animate={controlanimation} initial="hidden" variants={simplescale}>
            <div className='gamepassinfo'>
                <h1>gamepass</h1>
                <h2>discover yoyr next game</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestias officia nobis sint magnam. Quidem sequi tempore ex quam sed. Voluptate labore beatae quam accusantium.</p>
                <button>play now</button>
            </div>
        </Gamepassdiv>
    )
}

export default Gamepass
