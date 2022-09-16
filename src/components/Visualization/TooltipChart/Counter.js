import React, { useEffect, useState } from "react"
import { animate } from "framer-motion"

const Counter = ({from, end}) => {
    const [num, setNum] = useState((from) => from === undefined ? 0 : from) //why is start undefined

    //translate animation with framer, initial and animate
    useEffect(() => {
        const controls = animate(num, parseInt(end, 10), {
            duration: 1.5,
            delay: .75,
            ease: [1.0, 0, 0, 1.0],
            onUpdate(value) {
                setNum(value.toFixed(0))
            }
        })
        return () => controls.stop();
    }, [num, end])
    return(
        <span>{num}</span>
    )
}

export default Counter