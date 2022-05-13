import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrolltoTop = () => {
    const {pathname} = useLocation()
    console.log(pathname)

    const location = useLocation()
    console.log(location)

    useEffect(() => {
        window.scroll({
            top:0,
            left:0,
            behavior: "smooth"

        })
    },[pathname])

    return 2 + 2
}

export default ScrolltoTop