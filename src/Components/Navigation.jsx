import { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
const Navigation = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    
    const toggleBurger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return(
        <nav className={hamburgerOpen ? "open burger-list" : "closed burger-list"}>
            <div className="burgermenu" onClick={toggleBurger}>
                <Burger isOpen={hamburgerOpen}/>
            </div>

        <ul>
        <Link to="/" className="link">HOME</Link>
        <Link to="/About" className="link">ABOUT</Link>
        <Link to="/Todos" className="link">TODOS</Link>
        </ul>

        </nav>
    )
}
export default Navigation