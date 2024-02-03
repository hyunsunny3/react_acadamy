import ContextHeader from './ContextHeader';
import ContextFooter from './ContextFooter';
import ContextCont from './ContextCont';

function ContextSub(){
    return (
        <div className='sub'>
            <ContextHeader></ContextHeader>
            <ContextCont></ContextCont>
            <ContextFooter></ContextFooter>
        </div>
    );
};

export default ContextSub;


// import React from 'react';
// function ContextSub({isDark}){
//     console.log(isDark);
//     return (
//         <div className='sub'>
//             <ContextHeader isDark={isDark}></ContextHeader>
//             <ContextCont isDark={isDark}></ContextCont>
//             <ContextFooter isDark={isDark}></ContextFooter>
//         </div>
//     );
// };
// export default ContextSub;
