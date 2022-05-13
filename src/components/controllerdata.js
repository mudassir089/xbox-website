import React from "react";
import {v4 as uuidv4} from 'uuid'

import conimage1 from '../images/controller1.png'
import conimage2 from '../images/controller2.png'
import conimage3 from '../images/controller3.png'
import conimage4 from '../images/controller4.png'
import conimage5 from '../images/controller5.png'
import conimage6 from '../images/controller6.png'
import conimage7 from '../images/controller7.png'
import conimage8 from '../images/controller8.png'
import conimage9 from '../images/controller9.png'

const Controllerdata = () => {
    return[
        {
            image:conimage1,
            price:40,
            id:uuidv4(),
            name:'fade black',
          quantity:1,
           url:'/controllers/controller1',


          },
          {
            image:conimage2,
            price:30,
            id:uuidv4(),
            name:'fade black',
          quantity:1,
           url:'/controllers/controller2',


          },
          {
            image:conimage3,
            price:30,
            id:uuidv4(),
            name:'fade black',
          quantity:1,
           url:'/controllers/controller3',


          },
          {
            image:conimage4,
            price:45,
            id:uuidv4(),
            name:'fade black',
          quantity:1,
           url:'/controllers/controller4',


          },
          {
            image:conimage5,
            price:50,
            id:uuidv4(),
            name:'fade black',
          quantity:1,
           url:'/controllers/controller5',


          },
          {
            image:conimage6,
            price:40,
            id:uuidv4(),
            name:'fade black',
          quantity:1,
           url:'/controllers/controller6',


          },
          {
            image:conimage7,
            price:30,
            id:uuidv4(),
            name:'fade black',
          quantity:1,
          url:'/controllers/controller7',


          },
          {
            image:conimage8,
            price:35,
            id:uuidv4(),
            name:'fade black',
          quantity:1,
          url:'/controllers/controller8',


          },
          {
            image:conimage9,
            price:30,
            id:uuidv4(),
            name:'fade black',
          quantity:1,
          url:'/controllers/controller9',


          },
    ]
}

export default Controllerdata