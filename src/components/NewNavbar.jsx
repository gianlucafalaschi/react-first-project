import { Link } from "react-router-dom";

function NewNavbar() {
    return (
        <ul className="flex gap-10 mb-10">
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/contacts'}>Contact</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/cards'}>Cards List</Link>
            </li>
            <li>
                <Link to={'/cards-children'}>Cards List vr2</Link>
            </li>
        </ul>
    );
}
export default NewNavbar;