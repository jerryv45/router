import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div>
        <h1>Bookkeeper!</h1>
      </div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link>|{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

