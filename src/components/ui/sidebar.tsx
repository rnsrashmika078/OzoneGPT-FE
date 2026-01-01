import { GiCloudRing } from "react-icons/gi";
import { BiSolidDockLeft } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="flex justify-between  p-2 w-96 h-screen bg-red-500">
      <GiCloudRing size={35} />
      <BiSolidDockLeft size={35} />
    </div>
  );
};

export default Sidebar;
