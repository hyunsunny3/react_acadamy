import React, { useEffect } from 'react'

function Timer() {
    useEffect( () => {
        const timer = setInterval( ()=>{ 
            console.log("타이머가 시행중입니다.")
        }, 1000 )

        // clean up
        // 해당 컴포넌트가 unMount 되었을 때 & useEffect가 다시 실행되기 전
        return () => { 
            clearInterval(timer)
            console.log('타이머가 종료 되었습니다.')
        }
    }, [] )

    return (
        <div>타이머가 실행중입니다.</div>
    )
}

export default Timer