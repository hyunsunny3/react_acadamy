import React, { useEffect, useState } from 'react';

function Box({boxStyle}) {
    const [style,setStyle] = useState({})

    useEffect( () => {
        console.log('%c박스 크기 변경','color:tomato');
        setStyle(boxStyle)
    },[boxStyle] )

    
    return (
        <>
            <p style={style}>Box</p>
        </>
    );
}

export default Box;
