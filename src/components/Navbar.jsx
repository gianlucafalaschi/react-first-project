import "./Navbar.css";
import Link from "./Link";

function Navbar() {
    return(
        <ul>
            <li>
                <Link>querty</Link>
            </li>
            <li>
                <Link>Contatti</Link>
            </li>
            <li>
                <Link>about</Link>
            </li>
            <li>
                <Link>Shop</Link>
            </li>
            <li>
                <Link>Iscrivetevi al mio canale</Link>
            </li>
        </ul>
    )
}

export default Navbar;