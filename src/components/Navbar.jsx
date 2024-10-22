import "./Navbar.css";
import Link from "./Link";

function Navbar() {
    const x = 3;
    const img = "vite";
    const imgReact = "src/assets/react";
    const imgStyle = {
        height: x < 10 ? "300px" : "500px",
        borderRadius: "100%",
        backgroundColor: "green"
    }


    return(    // only one root element is allowed in return (here ul) or <></> are needed
        <>
        <nav>{ x >= 10000 ? "sopra 10000" : "sotto 10000"}</nav>
        <img style={{ height: "200px" }} src={`/${img}.svg`} alt="vite logo" />
        {/* inline style in react is an object */}
        <img style={imgStyle} src={`/${imgReact}.svg`} alt="react logo" />
        {/* to add class: cannot use class because this is a js class, so I use className and I define it in Navabar.css */}
        <img className="rounded-image" src={`/${imgReact}.svg`} alt="react logo" />
        {/* dinamic class */}
        <div className={`box rounded ${x < 10 ? "rotated" : "" }`} >Dinamic-class x è {x}</div>


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
    </>
    );
}

export default Navbar;