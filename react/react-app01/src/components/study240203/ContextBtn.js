import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function ContextBtn(){
    const {isDark,setIsDark} = useContext(ThemeContext);

    const toggleMode = () => {
        setIsDark(!isDark)
    }

    return (
        <div 
            className='btn'
            onClick={toggleMode}
        >
            Change Mode
        </div>
    );
};

export default ContextBtn;

// import React from 'react';
// function ContextBtn({isDark,setIsDark}){
//     const toggleMode = () => {
//         setIsDark(!isDark)
//     }

//     return (
//         <div 
//             className='btn'
//             onClick={toggleMode}
//         >
//             Change Mode
//         </div>
//     );
// };