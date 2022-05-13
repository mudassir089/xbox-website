
import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle `

    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;

    }

    html{
        overflow-x: hidden;
    }

    body{
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        background-color: #080d16;
    }

    html{
        font-size: 62.5%;
    }
`

export default Globalstyles