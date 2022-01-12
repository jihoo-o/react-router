import { Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";
import QueryNavLink from "./queryNavLink";

const Invoices = () => {
    const invoices = getInvoices();
    const [searchParams, setSearchParams] = useSearchParams();
    // searchParams.set vs setSearchParams

    return (
        <div style={{ padding: "1rem 0", display: "flex" }}>
            <div style={{ width: "50%" }}>
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
                                <QueryNavLink
                                    to={`/invoices/${invoice.number}`}
                                >
                                    {invoice.name}
                                </QueryNavLink>
                            </li>
                        ))}
                </ul>
            </div>
            <div style={{ width: "50%" }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Invoices;
