// import React from "react";
import styled from "styled-components"
import { motion } from "framer-motion";

export const Maindiv = styled.div`
background-color: #080d16;
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-around;
`;

export const Imagediv = styled(motion.div)`
    padding: 1rem;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    /* border: 10px solid #00ff00; */
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:
    inset 0 0 50px #fff,      /* inner white */
    inset 20px 0 80px #00ff00,   /* inner left magenta short */
    inset -20px 0 80px #00ff00,  /* inner right cyan short */
    inset 20px 0 300px #00ff00,  /* inner left magenta broad */
    inset -20px 0 300px #00ff00, /* inner right cyan broad */
    0 0 50px #00ff00,            /* outer white */
    -10px 0 80px #00ff00,        /* outer left magenta */
    10px 0 80px #00ff00;         /* outer right cyan */
    overflow: hidden;


    .xbox{
        width: 350px;
        height: 300px;
        margin: auto;
    }
`

export const Maintextdiv = styled(motion.div)`
    padding: 1rem;
    text-transform: capitalize;

    h1{
        padding: 2rem 1rem;
        font-size: 4rem;
        color: #fff;
        
    }

    span{
        display: block;
        /* padding: 1rem; */
        text-align: justify;
        color: #00ff00;

    }

    h2{
        padding: 1rem;
        font-size: 2rem;
        color: #fff;
    }

    p{
        padding: 1rem;
        font-size: 1.5rem;
        margin: .5rem 0;
        color: #fff;

    }

    button{
        padding: 1rem;
        margin: .8rem .5rem;
        width: 12rem;
        border: 2px solid #00ff00;
        background-color: transparent;
        outline: transparent;
        color: #fff;
        font-size: 1.6rem;
        cursor: pointer;
        &:hover{
            background-color: #00ff00;
            transition: all 0.5s ease;
        }
    }
`

export const Navbardiv = styled.div`
 height: 10vh;

 padding: 1rem;
 display: flex;
 align-items: center;
 justify-content: space-around;
 width: 100%;
 background-color: #080d16;
 position: sticky;
 z-index:10;

 h1{
     padding: .5rem;
     font-size:2rem;
     color: #00ff00;
 }
`

export const Navlinks = styled.div `
padding:.5rem;
width: 30%;
position: relative;
/* display: flex;
align-items: center; */
justify-content: space-between;

ul{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

li{
    padding: 0 .8rem;
    
}

a{
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
}
`

export const Bgdiv = styled(motion.div)`
  background-image: url('https://compass-ssl.xbox.com/assets/86/04/8604b052-6f41-4123-aa20-b867f8bce263.jpg?n=Dreamers_Home-Hero-1084_Family_1904x805.jpg');
  width: 100%;
  padding: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
  min-height:100vh;
  position: relative;

  .headingdiv{
      width: 40rem;
      padding: 1rem;
      margin: auto;

      h1{
          font-size:5rem;
          font-weight: 700;
          text-align:center;
          margin: auto;
          padding: .5rem;
          color: #fff;
          text-transform: capitalize;
      }

      p{
          margin: 1rem auto;
          font-weight: 300;
          text-align:center;
          font-size: 2.5rem;
          color: #fff;
          
      }

      button{
        padding: 1rem;
        margin: .8rem auto;
        width: 12rem;
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
  }


`

 export const Gamepassdiv = styled(motion.div)`
 background-image: url('https://compass-ssl.xbox.com/assets/5c/65/5c65ab0b-5853-49e2-8fd2-f292ca1becfa.jpg?n=10202018_Super-Hero-768_1399x767.jpg');
 width: 100%;
  padding: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
  min-height:100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .gamepassinfo{
      /* margin: auto; */
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 50rem;
  }

  h1{
      font-size: 3rem;
      color: #fff;
      padding: 1rem;
      
  }

  h2{
    font-size: 2rem;
      color: #fff;
      padding: .8rem;
  }

  p{
      margin:.8rem auto;
      padding: .5rem;
      text-align:justify;
      font-size: 1.5rem;
      font-weight: 300;
      color: #fff;

  }

  button{
    padding: 1rem;
        margin: .8rem auto;
        width: 12rem;
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

export const Faqdiv = styled(motion.div)`
padding: 2rem;
background-color: #080d16;
min-height: 100vh;
width: 100%;

.headingfaq{
    padding: 1rem;

    h1{
        font-size: 3rem;
        padding: .5rem;
        color: #fff;
        text-transform: capitalize;
    }
    h2{
        font-size: 4rem;
        color: #00ff00;
        padding: .5rem;
        text-transform: uppercase;
    }

}

`

export const Questions = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-bottom: 2px solid #fff;

  h3{
      font-size:2rem;
      color: #fff;
      
  }

  p{
      margin: 3rem 0;
      color: #fff;
      text-align:justify;
      font-size: 1.5rem;
      

  }
`