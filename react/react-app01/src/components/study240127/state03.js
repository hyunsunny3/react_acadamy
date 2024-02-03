import { useState } from "react";


function StudyState03() {
    
    const [culc, setCulc] = useState(0);

    function culcAdd(){
        setCulc(culc + 1);
    }
    function culcminus(){
        setCulc(culc - 1);
    }
    function culcReset(){
        setCulc(0);
    }


    return (
        <div className="studyState wrap">
            <button type="button" onClick={culcminus}>-</button>
            <button type="button" onClick={culcReset}>reset</button>
            <button type="button" onClick={culcAdd}>+</button>
            {/* <button type="button" onClick={ () => setCulc(culc + 1) }>+</button> */}
            <p>{culc}</p>
        </div>
    );
}

export default StudyState03;

