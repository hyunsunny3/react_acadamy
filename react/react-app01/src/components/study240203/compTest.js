import {createContext, useContext} from 'react';

// 테마 만들기
const defaultTheme = { border: '5px solid teal' }
const themeCont = createContext(defaultTheme);

function SubComp01(){
    const theme = useContext(themeCont);
    return(
        <themeCont.Provider value={ {border: '5px solid skyblue'} }>
            <div style={theme}>
                <h3>Sub01</h3>
                <SubComp02></SubComp02>
            </div>
        </themeCont.Provider>
    )
}

function SubComp02(){
    const theme = useContext(themeCont);
    return(
        <div style={theme}>
            <h3>Sub02</h3>
            <SubComp03></SubComp03>
        </div>
    )
}

function SubComp03(){
    const theme = useContext(themeCont);
    return(
        <div style={theme}>
            <h3>Sub03</h3>
        </div>
    )
}


function CompTest() {
    const theme = useContext(themeCont);
    return (
        <themeCont.Provider value={{border: '10px solid orange'}}>
            <div className="container" style={theme}>
                <h2>ROOT</h2>
                <SubComp01></SubComp01>
                
            </div>
        </themeCont.Provider>
    );
}

export default CompTest;