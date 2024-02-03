import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function ContextCont(){
    const {isDark} = useContext(ThemeContext);
    return (
        <div className= { isDark? "dark_mode cont" : "cont" }>
            <h3>content</h3>
        </div>
    );
};

export default ContextCont;


// import React from 'react';
// function ContextCont({isDark}){
//     return (
//         <div 
//             className='cont'
//             style={{
//                 background: isDark? '#232323' : '#fff',
//                 color: isDark? '#fff' : '#000'
//             }}
//         >
//             <h3>content</h3>
//         </div>
//     );
// };
