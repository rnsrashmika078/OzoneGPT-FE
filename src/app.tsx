import { Outlet } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/ui/sidebar";

export default function App() {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <ToastContainer position="top-right" autoClose={3000} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
