import { NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

const Invoices = () => {
    const invoices = getInvoices();

    return (
        <div style={{ padding: "1rem 0" }}>
            <ul>
                {invoices.map((invoice) => (
                    <li>
                        <NavLink
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "red" : ""
                                };
                            }}
                            to={`/invoices/${invoice.number}`}
                            key={invoice.number}
                            // className={({ isActive }) => isActive ? "red" : "blue"}
                        >
                            {invoice.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};

export default Invoices;
