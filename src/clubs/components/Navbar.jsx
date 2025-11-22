import {Link} from "react-router-dom";
import '../css/Navbar.css'
function Navbar() {
    return (
    <nav className = "navbar">
        <div className = "navbar-brand">
            <Link to= "/"> Explore Clubs </Link>
        </div>
        <div className = "navbar-links">
            <Link to= "/"> Home </Link>
            <Link to ="/favourite"> View Favourite Clubs </Link>
        </div>
    </nav>
    )
}
export default Navbar;