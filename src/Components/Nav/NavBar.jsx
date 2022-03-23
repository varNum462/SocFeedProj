
const NavBar = (props) => {
    return ( 
        <div>
        {props.navProps.map((navButton) => {
            return (
            <a href={navButton.navlink}>{navButton.navbutton}</a>
            );
        })}
        </div>
    );
}
 
export default NavBar;