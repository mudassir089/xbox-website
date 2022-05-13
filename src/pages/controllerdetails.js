import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Pagetransition } from "../components/animation";
import { Features , Maindiv} from "./consoledetails";

const Controllerdetails = ({controllerdetail,setcontrollerdetails}) => {

    const history = useHistory()
    const {pathname} = history.location
    const [detail,setdetail] = useState(null)
    console.log(detail)

    //useeffect 

    useEffect(() => {
        const currentcontroller = controllerdetail.filter(state => state.url == pathname)
        console.log(currentcontroller)
        setdetail(currentcontroller[0])
    },[controllerdetail,pathname])


   return(
       <>
       {detail && (
        <Maindiv variants={Pagetransition} animate="show" initial="hidden" exit="exit">
           <div className="mainname">
           <h1>{detail.name}</h1>
           </div>
           <div className="imgdiv">
               <img src={detail.image} alt={detail.image} />
           </div>

           <Features>
               <h1>features</h1>

               <div className="features">
                   <ul>
                       <li>{detail.feature1}</li>
                       <li>{detail.feature2}</li>
                       <li>{detail.feature3}</li>
                       <li>{detail.feature4}</li>
                   </ul>
               </div>

           </Features>
       </Maindiv>
       )}
       
       </>
   )
}

export default Controllerdetails