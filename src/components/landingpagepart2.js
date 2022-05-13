import React from "react";
import { Bgdiv } from "../styles";
import { useScroll } from "./usescroll";
import { simplescale } from "./animation";

const Landingpagepart2 = () => {
 
   const [element,controlanimation] = useScroll()

    return(
        <Bgdiv ref={element} animate={controlanimation} initial="hidden" variants={simplescale}>
            <div className='headingdiv'>
             <h1>"gift from heaven for gamers"</h1>
             <div>
                 <p>-- gamer zone</p>
                 <button>play now</button>
             </div>
            </div>
        </Bgdiv>
    )
}

export default Landingpagepart2