import { useReducer, useState } from "react";

function CompReducer() {
    
    return (
        <>
            <h2>useReducer</h2>
        </>
    );
}

function Studyreducer01() {
    const culcInit = 0;
    const [snum, setSnum] = useState(0);
    console.log(snum);

    const [culc, dispatchCulc] = useReducer(reducer, culcInit);

    // function reducer(현재값, action){}
    function reducer(beforeCulc, action){
        if( action === 'up' ){
            return beforeCulc + 1
        }else if( action === 'down' ){
            return beforeCulc - 1
        }else if( action === 'reset' ){
            return culcInit
        }
    }

    function culcUp(){
        dispatchCulc('up');
    }
    function culcDown(){
        dispatchCulc('down');
    }
    function culcReset(){
        dispatchCulc('reset');
    }

    function cVal(e){
        setSnum(Number(e.target.value));
    }

    return (
        <div className="studyState wrap">
            <CompReducer></CompReducer>
            <button type="button" onClick={culcDown}>-</button>
            <button type="button" onClick={culcReset}>reset</button>
            <button type="button" onClick={culcUp}>+</button>
            {/* <button type="button" onClick={ () => dispatchCulc(culc + 1) }>+</button> */}
            <p>{culc}</p>
            <input type="text" value={snum} onChange={cVal}></input><button type="button">submit</button>
        </div>
    );
}

export default Studyreducer01;

