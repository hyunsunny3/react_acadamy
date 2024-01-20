// ** 클래스 방식 컴포넌트 **
/*
import { Component } from 'react';

class CompProps extends Component{
    render(){
        return(
            <>
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
            </>
        );
    }
}
*/

// ** 함수 방식 컴포넌트 **
function CompProps(props) {
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </>
    );
}


function StudyProps() {
    return (
        <div className="studyProps wrap">
            <CompProps title="First import" content="First Props Component"></CompProps>
            <CompProps title="Second import" content="Second Props Component"></CompProps>
        </div>
    );
}

export default StudyProps;