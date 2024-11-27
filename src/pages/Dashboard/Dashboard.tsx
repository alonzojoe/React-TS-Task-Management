import Card from "../../components/UI/Card";
import CircularProgressBar from "../../components/UI/CircularProgressBar";
import { IoBagHandleSharp } from "react-icons/io5";
import { TbUserPentagon } from "react-icons/tb";
const Dashboard = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 py-2">
      <div className="flex flex-col justify-center space-y-8">
        <Card background="bg-primary" width="w-full">
          <div className="flex justify-center items-center gap-4 py-2">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold mb-4 text-white !leading-snug">
                Your task progress is almost done!
              </h4>
              <button className="secondary-btn text-xl py-2 px-5 w-full">
                View Task
              </button>
            </div>
            <div className="px-4">
              <CircularProgressBar
                textColor="text-white"
                strokeColor="#8764FF"
                fillColor="#EEE9FF"
                percentage={65}
                size={100}
                strokeWidth={12}
              />
            </div>
          </div>
        </Card>
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-left text-textPrimary font-bold text-2xl">
              In Progress
            </h2>
            <div className="w-[25px] h-[25px] p-2 font-bold text-primary bg-lightPrimary rounded-full flex items-center justify-center">
              3
            </div>
          </div>

          <div className="overflow-x-auto whitespace-nowrap py-4">
            <div className="flex space-x-4">
              <Card
                background="bg-lightBlue"
                shrink="shrink-0"
                width="w-[250px]"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-textSecondary text-md">Office Project</h4>
                  <span className="bg-lightPink p-1 rounded-lg">
                    <IoBagHandleSharp className="text-2xl text-darkPink" />
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <h3 className="text-textPrimary text-xl font-semibold !leading-6 text-wrap">
                    Grocery shopping app design
                  </h3>
                  <div></div>
                </div>
              </Card>
              <Card
                background="bg-lightOrange"
                shrink="shrink-0"
                width="w-[250px]"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-textSecondary text-md">Office Project</h4>
                  <span className="bg-lightPink p-1 rounded-lg">
                    <IoBagHandleSharp className="text-2xl text-darkPink" />
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <h3 className="text-textPrimary text-xl font-semibold !leading-6 text-wrap">
                    Grocery shopping app design
                  </h3>
                  <div></div>
                </div>
              </Card>
              <Card
                background="bg-lightPrimary"
                shrink="shrink-0"
                width="w-[250px]"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-textSecondary text-md">Office Project</h4>
                  <span className="bg-lightPink p-1 rounded-lg">
                    <IoBagHandleSharp className="text-2xl text-darkPink" />
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <h3 className="text-textPrimary text-xl font-semibold !leading-6 text-wrap">
                    Grocery shopping app design
                  </h3>
                  <div></div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-10">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-left text-textPrimary font-bold text-2xl">
            Task Groups
          </h2>
          <div className="w-[25px] h-[25px] p-2 font-bold text-primary bg-lightPrimary rounded-full flex items-center justify-center">
            4
          </div>
        </div>
        <div className="grid grid-cols-1 space-y-8">
          <Card background="cardBg" shrink="shrink-0" width="w-[full]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="bg-lightPink p-2 rounded-xl">
                  <IoBagHandleSharp className="text-2xl text-darkPink" />
                </span>
                <div>
                  <h4 className="text-textPrimary text-md font-bold mb-0">
                    Office Project
                  </h4>
                  <span className="text-textSecondary text-sm">23 Tasks</span>
                </div>
              </div>
              <div>
                <CircularProgressBar
                  textColor="text-black"
                  strokeColor="#FFE4F2"
                  fillColor="#F57CBA"
                  percentage={75}
                  size={50}
                  strokeWidth={5}
                  textSize="text-sm"
                />
              </div>
            </div>
          </Card>
          <Card background="cardBg" shrink="shrink-0" width="w-[full]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="bg-lightPrimary p-2 rounded-xl">
                  <TbUserPentagon className="text-2xl text-primary" />
                </span>
                <div>
                  <h4 className="text-textPrimary text-md font-bold mb-0">
                    Personal Project
                  </h4>
                  <span className="text-textSecondary text-sm">23 Tasks</span>
                </div>
              </div>
              <div>
                <CircularProgressBar
                  textColor="text-black"
                  strokeColor="#E8E1FB"
                  fillColor="#5F33E1"
                  percentage={45}
                  size={50}
                  strokeWidth={5}
                  textSize="text-sm"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
