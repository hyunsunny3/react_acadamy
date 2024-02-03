import { useState } from 'react';
import ContextBtn from './ContextBtn';
import ContextSub from './ContextSub';
import CompTest from './compTest';
import { ThemeContext } from './context/ThemeContext';

function Study240203() {
    const [isDark,setIsDark] = useState(false);
    return (
        <div className="App">

            <CompTest></CompTest>

            {/* <div className='contextWr'>
                <ContextSub isDark={isDark}></ContextSub>
                <ContextBtn isDark={isDark} setIsDark={setIsDark}></ContextBtn>
            </div> */}

            <ThemeContext.Provider value={{isDark,setIsDark}}>
                <div className='contextWr'>
                    <ContextSub></ContextSub>
                    <ContextBtn></ContextBtn>
                </div>
            </ThemeContext.Provider>
            
        </div>
    );
}

export default Study240203;