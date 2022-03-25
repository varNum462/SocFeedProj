
const NavBar = (props) => {
    return ( 
        <div>
        {props.navProps.map((navButton,navIndex) => {
            return (
            <a key={navIndex} href={navButton.navlink}>{navButton.navbutton}</a>
            );
        })}
        </div>
    );
}
 
export default NavBar;