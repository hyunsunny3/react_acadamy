import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function ContextHeader(){
    //Provider의 Value가 있으면 value값을 전달 받음
    //Provider의 Value가 없으면 createContext의 인자를 받음
    const {isDark} = useContext(ThemeContext);
    return (
        <div className={ isDark? "dark_mode header" : "header" }>
            <h1>Header</h1>
        </div>
    );
};

export default ContextHeader;

// import React from 'react';
// function ContextHeader({isDark}){
//     return (
//         <div 
//             className='header'
//             style={{
//                 background: isDark? '#000' : '#eee',
//                 color: isDark? '#fff' : '#000'
//             }}
//         >
//             <h1>Header</h1>
//         </div>
//     );
// };