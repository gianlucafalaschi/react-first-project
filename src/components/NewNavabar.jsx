import { Link } from "react-router-dom";

function NewNavbar() {
    return (
        <ul className="flex gap-10 mb-10">
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/contacts'}>Contatti</Link>
            </li>
            <li>About</li>
            <li>Card version 1</li>
            <li>Card version 2</li>
        </ul>
    );
}
export default NewNavbar;