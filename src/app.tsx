import { Outlet } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} />
            <Outlet />
        </div>
    );
}
