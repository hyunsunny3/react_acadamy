import React, { useEffect } from 'react'

function Timer() {
    useEffect( () => {
        setInterval( ()=>{ console.log("타이머가 시행중입니다.") }, 1000 )
    }, [] )

    return (
        <div>타이머가 실행중입니다.</div>
    )
}

export default Timer