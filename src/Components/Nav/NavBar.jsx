
const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <h1><a className="navbar-brand" href="#">Social<span className="lighter">Feed</span></a></h1>
                </div>
                <ul className="nav navbar-nav">
                    {props.navProps.map((navButton,navIndex) => {
                        return (
                        <li><a key={navIndex} href={navButton.navlink}>{navButton.navbutton}</a></li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;