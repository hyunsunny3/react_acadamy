const Header = () => {
    return (
        <header>
            <h2>WEB</h2>
            <p>world wide web!</p>
        </header>
    );
}
function Nav(){
    return(
        <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JS</a></li>
            </ul>
        </nav>
    );
}
const Article = () => {
    return(
        <article>
            <h2>HTML</h2>
            <p>HTML is HyperText Markup Language</p>
        </article>
    );
}
/*
function Article(){
    return(
    <article>
        <h2>HTML</h2>
        <p>HTML is HyperText Markup Language</p>
    </article>
    );
}
*/

function Layout() {
    return (
        <div className="layout">
            <h1>Layout</h1>
            <Header></Header>
            <Nav></Nav>
            <Article></Article>
        </div>
    );
}

export default Layout;