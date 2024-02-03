import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function ContextFooter(){
    const {isDark} = useContext(ThemeContext);
    return (
        <div className={ isDark? "dark_mode footer" : "footer" }>
            <h2>Footer</h2>
        </div>
    );
};

export default ContextFooter;


// import React from 'react';
// function ContextFooter({isDark}){
//     return (
//         <div 
//             className='footer'
//             style={{
//                 background: isDark? '#000' : '#eee',
//                 color: isDark? '#fff' : '#000'
//             }}
//         >
//             <h2>Footer</h2>
//         </div>
//     );
// };
