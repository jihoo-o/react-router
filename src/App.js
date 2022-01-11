import { Link, Outlet } from "react-router-dom";
import "./styles.css";

export default function App() {
    return (
        <div className="App">
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
            >
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
            </nav>
            <Outlet />
        </div>
    );
}
