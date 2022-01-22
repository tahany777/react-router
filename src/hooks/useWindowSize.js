import { useState, useEffect } from "react";

//custom Hook
const  useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        //use effect have clean up function
        const cleanUp = () => {
            console.log('runs if a useeffect dep changes');
            window.removeEventListener("resize", handleResize);
        }
        return cleanUp;

    }, [])
    return windowSize;
}

export default useWindowSize;
