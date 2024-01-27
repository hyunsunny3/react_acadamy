import { useState } from "react";

function ItemComp(props){
    return(
        <>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </>
    )
}


function CompState(props) {
    const numbList = props.numbs;
    const printList = [];
    for( let i=0; i < numbList.length; i++ ){
        printList.push(
            <li key={numbList[i].id}>
                <a href="#none" onClick={ () => {props.onCallItem(numbList[i].id)} }>{numbList[i].title}</a>
            </li>
        );
    }
    return (
        <>
            <h2>State02</h2>
            <ul>
                {printList}
            </ul>
        </>
    );
}

function StudyState02() {
    /*
    const _numb = useState(1);
    const numb = _numb[0];
    const setNumb = numb[1];
    */

    const [numb, setNumb] = useState(1);

    const numbs = [
        {id: 1, title: "useState 01", content: "number 1"},
        {id: 2, title: "useState 02", content: "number 2"},
        {id: 3, title: "useState 03", content: "number 3"},
        {id: 4, title: "useState 04", content: "number 4"},
    ]
    
    let selItem, title, content = null;
    for( let n = 0; n < numbs.length; n++ ){
        if( numb === numbs[n].id ){
            title = numbs[n].title;
            content = numbs[n].content;
            break;
        }
    }

    selItem = <ItemComp title={title} content={content} />;

    return (
        <div className="studyEvent wrap">
            <CompState 
                numbs = {numbs}
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

export default StudyState02;

