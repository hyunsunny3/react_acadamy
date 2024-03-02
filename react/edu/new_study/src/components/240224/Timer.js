import { useEffect } from 'react';

function Timer() {
    useEffect(() => {
        const timer = setInterval( () => { console.log('타이머가 실행중입니다.'); }, 1000 );
        return () => {
            clearInterval(timer)
            console.log('타이머가 종료 되었습니다.');
        }
    }, [])

    return (
        <div>타이머가 실행중입니다.</div>
    )
}

export default Timer;