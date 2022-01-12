import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../data";

const Invoice = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { invoiceId } = useParams();
    const invoice = getInvoice(parseInt(invoiceId, 10));

    return (
        <div>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
            <button
                onClick={() => {
                    deleteInvoice(invoice.number);
                    navigate("/invoices" + location.search);
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default Invoice;
