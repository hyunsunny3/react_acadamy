import { useState } from "react";

function CompState(event) {
    
    return (
        <>
            <h2>State01</h2>
            <ul>
                <li><a href="#none" onClick={ () => {event.onCallItem(1)} }>1</a></li>
                <li><a href="#none" onClick={ () => {event.onCallItem(2)} }>2</a></li>
                <li><a href="#none" onClick={ () => {event.onCallItem(3)} }>3</a></li>
            </ul>
        </>
    );
}

function ItemComp(props){
    return(
        <>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </>
    )
}

function StudyState01() {
    /*
    const _numb = useState(1);
    const numb = _numb[0];
    const setNumb = numb[1];

    console.log(setNumb);
    */

    const [numb, setNumb] = useState(1);

    const numbs = [
        {title: "1", content: "number 1"},
        {title: "2", content: "number 2"},
        {title: "3", content: "number 3"}
    ]
    let selItem = null;

    if( numb === 1 ){
        selItem = <ItemComp title={numbs[0].title} content={numbs[0].content} />;
    }else if( numb === 2 ){
        selItem = <ItemComp title={numbs[1].title} content={numbs[1].content} />;
    }else if( numb === 3 ){
        selItem = <ItemComp title={numbs[2].title} content={numbs[2].content} />;
    }

    return (
        <div className="studyEvent wrap">
            <CompState 
                onCallItem={
                    (item) => {
                        setNumb(item);
                    }
                }
            />
            <hr />
            {selItem}
        </div>
    );
}

export default StudyState01;