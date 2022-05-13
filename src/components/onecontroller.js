import React from "react";
import { Controllerdiv , Priceinfodiv} from "../styles2";
import { titleanim,imageanim } from "./animation";
import { Link } from "react-router-dom";

const Onecontroller = ({item,controller}) => {
    return(
        <Controllerdiv variants={titleanim}>
            <h1>{item.name}</h1>
            <div className='controllerimg'>
                <img src={item.image} alt={item.image} />
            </div>
            <Priceinfodiv variants={titleanim}>
                
                <button><Link to={item.url} style={{textDecoration:"none",color:"#fff"}}>viewme</Link></button>
            </Priceinfodiv>
        </Controllerdiv>
    )
}

export default Onecontroller