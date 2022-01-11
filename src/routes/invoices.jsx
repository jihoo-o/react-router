import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";

const Invoices = () => {
    const invoices = getInvoices();
    const [searchParams, setSearchParams] = useSearchParams();
    // searchParams.set vs setSearchParams

    return (
        <div style={{ padding: "1rem 0" }}>
            <input
                value={searchParams.get("filter") || ""}
                onChange={(e) => {
                    const filter = e.target.value;
                    if (filter) {
                        setSearchParams({ filter });
                    } else {
                        setSearchParams({});
                    }
                }}
            />
            <ul>
                {invoices
                    .filter((invoice) => {
                        const filter = searchParams.get("filter");
                        if (!filter) return;
                        const name = invoice.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((invoice) => (
                        <li key={invoice.number}>
                            <NavLink
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : ""
                                    };
                                }}
                                to={`/invoices/${invoice.number}`}
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
