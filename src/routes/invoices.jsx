import { Link } from "react-router-dom";
import { getInvoices } from "../data";

const Invoices = () => {
    const invoices = getInvoices();

    return (
        <div style={{ padding: "1rem 0" }}>
            <ul>
                {invoices.map((invoice) => (
                    <li>
                        <Link
                            to={`/invoices/${invoice.number}`}
                            key={invoice.number}
                        >
                            {invoice.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Invoices;
