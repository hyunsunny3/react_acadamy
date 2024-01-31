// **  **

function CompEvent(event) {
    
    return (
        <>
            <h2>Event</h2>
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

function StudyEvent() {
    const numb = [
        {title: "1", content: "number 1"},
        {title: "2", content: "number 2"},
        {title: "3", content: "number 3"}
    ]
    return (
        <div className="studyEvent wrap">
            <CompEvent 
                onCallItem={
                    (item) => {
                        alert(item);
                    }
                }
            />
            <hr />
            <ItemComp title={numb[0].title} content={numb[0].content} />
        </div>
    );
}

export default StudyEvent;