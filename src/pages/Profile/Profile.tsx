import Card from "../../components/UI/Card";
import Avatar from "../../assets/images/avatar.jpg";
import { FaCamera } from "react-icons/fa";
const Profile = () => {
  return (
    <div className="container space-y-5  py-2">
      <form className="space-y-6">
        <div className="flex items-center justify-center pt-5">
          <div className="relative">
            <img
              src={Avatar}
              alt=""
              className="rounded-full h-auto w-[120px]"
            />
            <div className="absolute top-20 -right-2 rounded-full h-[40px] w-[40px] border-white border-2  bg-gray-400 flex items-center justify-center">
              <FaCamera className="text-smd text-white" />
            </div>
          </div>
        </div>
        <div>
          <Card background="cardBg" shrink="shrink-0" width="w-[full]">
            <div>
              <label
                htmlFor="title"
                className="text-textSecondary font-semibold text-xs block"
              >
                First Name
              </label>
              <input
                type="text"
                className="py-1 text-textPrimary px-0 w-full font-semibold ring-0 border-0 outline-none placeholder:opacity-30"
                id="firstname"
                name="firstname"
                placeholder="Enter First Name"
              />
            </div>
          </Card>
        </div>
        <div>
          <Card background="cardBg" shrink="shrink-0" width="w-[full]">
            <div>
              <label
                htmlFor="title"
                className="text-textSecondary font-semibold text-xs block"
              >
                Last Name
              </label>
              <input
                type="text"
                className="py-1 text-textPrimary px-0 w-full font-semibold ring-0 border-0 outline-none placeholder:opacity-30"
                id="lastname"
                name="lastname"
                placeholder="Enter Last Name"
              />
            </div>
          </Card>
        </div>
        <button className="primary-btn flex justify-between items-center text-2xl w-full">
          <span></span>
          <span>Update Profile</span>
          <span></span>
        </button>
      </form>
    </div>
  );
};

export default Profile;
