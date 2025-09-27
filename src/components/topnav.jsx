import { NavLink } from "react-router-dom";

const TopNav = () => {
    const linkStyle = ({isActive}) => {
        isActive ? "text-blue-600 font-bold" : "text-gray-600"
    }
    return(
        <nav>
            <NavLink to="/portfolio" className={linkStyle}>
                Home
            </NavLink>
            <NavLink to="/portfolio/works" className={linkStyle}>
                Works
            </NavLink>
        </nav>
    )
}

export default TopNav;