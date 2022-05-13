import React from "react";
import {v4 as uuidv4} from 'uuid'
import image1 from '../images/xbox1.png'
import image2 from '../images/xbox2.png'
import image3 from '../images/xbox3.png'
import image4 from '../images/xbox4.png'
import image5 from '../images/xbox5.png'
import image6 from '../images/xbox6.png'

const consolesdata = () => {
    return[
        {
          image:image1,
          price:300,
          id:uuidv4(),
          name:'Xbox one S',
          // quantity:1,
          url:'/consoles/xboxOneS'
        },
        {
            image:image2,
            price:350,
            id:uuidv4(),
            name:'Xbox one S',
            // quantity:1,
            url:'/consoles/xboxOneS2'


          },
          {
            image:image3,
            price:400,
            id:uuidv4(),
            name:'Xbox one S',
            // quantity:1,
            url:'/consoles/xboxOneS3'


          },
          {
            image:image4,
            price:450,
            id:uuidv4(),
            name:'Xbox one S',
          // quantity:1,
          url:'/consoles/xboxOneS4'


          },
          {
            image:image5,
            price:500,
            id:uuidv4(),
            name:'Xbox one S',
          // quantity:1,
          url:'/consoles/xboxOneS5'



          },
          {
            image:image6,
            price:550,
            id:uuidv4(),
            name:'Xbox one S',
          //  quantity:1,
            url:'/consoles/xboxOneS6'



          }
    ]
}

export default consolesdata