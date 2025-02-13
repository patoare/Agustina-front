import "../App.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <div className="NavBar">
            <Link to='/' className="txtLogo"><h2>Agus Broggia 💕</h2></Link>
            <ul className="txtMenu">
                <li><Link to="/"> Home </Link> </li>
                <li><Link to="/aboutMe"> About me </Link> </li>

                <li className="dropDown">
                    <Link class="dropdown-btn"> Portfolio </Link>
                <ul className="dropDown-content"> 
                    <li> <Link to="/photos">  Photos </Link> </li>
                    <li> <Link to="/videos"> Videos </Link></li>
                 </ul>
                </li>
                
                <li><Link to="/contact"> Contact me </Link> </li>
                </ul>
        </div>
        </>
    )
}

export default NavBar;