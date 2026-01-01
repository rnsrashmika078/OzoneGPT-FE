import { createBrowserRouter } from "react-router-dom";
import App from "./app";
//use alias
import Dashboard from "@/pages/dashboard/Dashboard";
import SignIn from "@/pages/sign-in/SignIn.tsx";
import SignUp from "./pages/sign-up/SignUp";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Dashboard /> },
            {
                path: "/about",
                element: <div>about</div>,
            },
            {
                path: "/settings",
                element: <div>settings</div>,
            },
        ],
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
]);
