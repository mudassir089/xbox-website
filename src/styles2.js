import styled from "styled-components";
import { motion } from "framer-motion";
import Consolespage from "./pages/consoles";

export const Consolediv = styled(motion.div)`
    width: 40rem;
    padding: 1rem;
    /* background-color: yellow; */

    h1{
        text-align: center;
        margin: auto;
        font-size: 2.5rem;
        color: #fff;
    }

    .consoleimg{
        width: 270px;
        height: 220px;
        margin: auto;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
        
    }


`

export const Priceinfodiv = styled(motion.div)`
    padding: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
        font-size: 2rem;
        color: #fff;
    }

    button{
        padding: 1rem;
        margin: .8rem auto;
        width: 8rem;
        border: 2px solid #00ff00;
        background-color: transparent;
        outline: transparent;
        color: #fff;
        font-size: 1.6rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            background-color: #00ff00;
            transition: all 0.5s ease;
        }
    }
`

export const Consolewrapper = styled.div`
.grid{
  width: 90rem;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(400px, 1fr) );
  padding: 1rem;
  margin: auto;
}
`

export const Consolepage = styled(motion.div)`
width: 100%;
padding: .5rem;
min-height: 90vh;

h1{
    text-align: center;
    margin: auto;
    padding: .5rem;
    font-size: 2.5rem;
    color: #fff;
}
`;

export const Controllerdiv = styled(Consolediv)`
width:30rem;

.controllerimg{
    width:160px;
    height:100px;
    margin:  1rem auto;
}

img{
    width:100%;
    height:100%;
    object-fit: cover;
}
`;

export const Controllerwrapper = styled(Consolewrapper)`
.grid{
    width:110rem;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
}
`;

export const Controllerpage = styled(Consolepage)`
min-height:90vh;
width:100%;
`

export const Onecartitemdiv = styled(motion.div)`
    width: 100%;
    min-height:10vh;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom:2px solid #fff;


    .imgdiv{
        width: 130px;
        height:100px;
        padding:.5rem;

    }

    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }



` ;

export const Quantitydiv = styled.div`
  padding:.5rem;
  display:flex;
  align-items: center;
  justify-content:space-between;
  width: 30rem;
  
  h3{
      padding:.5rem;
      font-size:1.5rem;
      color:#fff;

  }

  input{
      width:7rem;
      padding:.5rem;
      background-color: #fff;
      font-size:1.5rem;
      border-radius: .5rem;
      border:none;
      outline:transparent;
      color:#080d16;


  }

`;

export const Totalpricediv = styled.div`
padding: 1rem .5rem;

h2{

    font-size: 1.5rem;
    color:#fff;
}

button{
    padding: 1rem;
        margin: .8rem auto;
        width: 8rem;
        border: 2px solid #00ff00;
        background-color: transparent;
        outline: transparent;
        color: #fff;
        font-size: 1.6rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            background-color: #00ff00;
            transition: all 0.5s ease;
        }
}

`;

export const Cartitemsdiv = styled(motion.div)`
  width:80%;
  margin:auto;
`;