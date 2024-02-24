import React, { useEffect, useState } from 'react'

function Box( { boxStyle } ) {
    const [ style, setStyle ] = useState({})

    useEffect( () => {
        console.log("박스 크기 변경");
        setStyle( boxStyle  )
    }, [ boxStyle ] )

    return (
        <p style={style}>Box</p>
    )
}

export default Box