import '../views/Nav.scss'
const Nav = () => {
    return (

        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="/timer">Timer Apps</a>
            <a href="/todo">Todo Apps</a>
            <a href="/secret">Secrets</a>
        </div>

    );
}
export default Nav;