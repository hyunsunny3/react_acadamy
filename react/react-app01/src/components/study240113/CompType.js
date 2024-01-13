import { Component } from 'react';

function FunctionComp(){
    return (
        <div className='functionComp'>
            <p>FunctionComp</p>
        </div>
    );
}

class ClassComp extends Component{
render(){
    return(
    <div className='classComp'>
        <p>ClassComp</p>
    </div>
    );
}
}

function CompType() {
    return (
        <div className="compType">
        <FunctionComp></FunctionComp>
        <ClassComp></ClassComp>
        </div>
    );
}

export default CompType;