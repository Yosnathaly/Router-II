import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css"
export default function Navbar() {

    const setActiveClass = ({ isActive }) => ("isActive" ? "active" : "notActive");

    return (
        <div className="navbar">
            <div className="imgnav">
                <img className="paradapng" src="../src/assets/img/pokeparada.png" />
            </div>
            <div className="enlaces">
                <NavLink className={setActiveClass} to="/">
                    Home
                </NavLink>

                <NavLink className={setActiveClass} to="/Pokemones">
                    Pokemones
                </NavLink>
            </div>
        </div>
    )
}