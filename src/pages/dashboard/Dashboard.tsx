import { useGetAuth } from "@/components/hooks/useEffectHook";
import Sidebar from "@/components/ui/sidebar";
import { logout } from "@/helper/helper";
import { useOzoneStore } from "@/lib/zustand/store";
import { BiExit, BiUser } from "react-icons/bi";
import { Bs0Circle, BsBack } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Dashboard = () => {
  const navigate = useNavigate();
  useGetAuth();
  const authUser = useOzoneStore((store) => store.authUser);
  console.log("Auth user", authUser);

  return (
    <>
      <div className="text-black">
        WELCOME {authUser?.name}
        <BiUser size={25} onClick={() => navigate("/sign-in")} />
        <BiExit
          size={25}
          onClick={async () => {
            const res = await logout();
            toast.success(res.data.message);
            navigate("/sign-in");
          }}
        />
        <Bs0Circle onClick={() => navigate("/about")} />
        <BsBack onClick={() => navigate("/")} />
      </div>
    </>
  );
};

export default Dashboard;
