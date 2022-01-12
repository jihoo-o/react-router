import { NavLink, useLocation } from "react-router-dom";

const QueryNavLink = ({ to, ...props }) => {
    let location = useLocation();
    return (
        <NavLink
            style={({ isActive }) => {
                return {
                    color: isActive ? "red" : ""
                };
            }}
            to={to + location.search}
            {...props}
        />
    );
};

export default QueryNavLink;
