import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Pagetransition } from "../components/animation";


const Consoledetails = ({consoledetail,setconsoledetails}) => {

    const history = useHistory()
    const {pathname} = history.location
    const [detail,setdetail] = useState(null)
    console.log(detail)

    //useeffect 

    useEffect(() => {
        const currentconsole = consoledetail.filter(state => state.url == pathname)
        console.log(currentconsole)
        setdetail(currentconsole[0])
    },[consoledetail,pathname])


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

export const Maindiv = styled(motion.div)`
width: 100%;
min-height:100vh;
padding:1rem;

.mainname{
    padding: 1rem;
    text-align: center;
    margin: auto;
    font-size:2rem;
    color:#fff;
    text-transform: capitalize;
}

.imgdiv{
    width:73rem;
    margin: 1rem auto;
    height: auto;

    img{
        object-fit: cover;
        width:100%;
        height:100%
    }
}

.infodiv{
    padding:1rem;
    width:40rem;
    margin:auto;
    display:flex;
    align-items:center;
    justify-content: space-between;

    h2{
        font-size: 2.5rem;
        color:#fff

    }

    button{
        padding: 1rem;
        border: 2px solid #00ff00;
        outline: transparent;
        width:12rem;
        background-color: transparent;
        border-radius: .5rem;
        font-size:1.5rem;
        color:#fff;
        cursor:pointer
    }
}


`;

export const Features = styled.div`
  padding: 2rem;

  h1{
      font-size: 3rem;
      color:#fff;
      text-transform: capitalize;
  }

  .features{
      padding:1rem;
      margin:1rem 0;
      text-align:justify;

      ul{
          list-style:disc;
      }

      li{
          font-size:1.8rem;
          font-weight:300;
          color:#fff;
          margin:.8rem 0;
          padding:.5rem;
      }
  }


`;




export default Consoledetails