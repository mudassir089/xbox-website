import React from "react";
import { Consolediv , Priceinfodiv} from "../styles2";
import { titleanim,imageanim } from "./animation";
import { Link } from "react-router-dom";

const Oneconsole = ({item}) => {

    return(
        <Consolediv variants={imageanim}>
            <h1>{item.name}</h1>
            <div className='consoleimg'>
                <img src={item.image} alt={item.image} />
            </div>
            <Priceinfodiv variants={titleanim}>
                <button><Link to={item.url} style={{textDecoration:"none",color:"#fff"}}>viewme</Link></button>
            </Priceinfodiv>
        </Consolediv>
    )
}

export default Oneconsole