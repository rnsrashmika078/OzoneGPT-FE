import { useGetAuth } from "@/components/hooks/useEffectHook";
import { logout } from "@/helper/helper";
import { BiExit, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Dashboard = () => {
    const navigate = useNavigate();
    useGetAuth();

    return (
        <div className="text-black">
            DASHBOARD
            <BiUser size={25} onClick={() => navigate("/sign-in")} />
            <BiExit
                size={25}
                onClick={async () => {
                    const res = await logout();
                    toast.success(res.data.message);
                    navigate("/sign-in");
                }}
            />
        </div>
    );
};

export default Dashboard;
