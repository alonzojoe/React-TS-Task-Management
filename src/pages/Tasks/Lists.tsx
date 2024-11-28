import Card from "../../components/UI/Card";
import Badge from "../../components/UI/Badge";
import { FaCheckCircle } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";
import { RiCalendarTodoFill } from "react-icons/ri";
const Lists = () => {
  return (
    <div className="container space-y-5  py-2">
      <div className="overflow-x-auto whitespace-nowrap py-4">
        <div className="flex items-center justify-center space-x-2">
          <Card padding="p-3" background="cardBg" width="w-[full]">
            <div className="flex flex-col items-center gap-2 px-4">
              <h4>Nov</h4>
              <h1 className="text-2xl font-bold">25</h1>
              <h4>MOn</h4>
            </div>
          </Card>
          <Card padding="p-3" background="cardBg" width="w-[full]">
            <div className="flex flex-col items-center gap-2 px-4">
              <h4>Nov</h4>
              <h1 className="text-2xl font-bold">26</h1>
              <h4>Tue</h4>
            </div>
          </Card>
          <Card padding="p-3" background="bg-primary" width="w-[full]">
            <div className="flex flex-col items-center gap-2 px-4 text-white">
              <h4>Nov</h4>
              <h1 className="text-2xl font-bold">27</h1>
              <h4>Wed</h4>
            </div>
          </Card>
          <Card padding="p-3" background="cardBg" width="w-[full]">
            <div className="flex flex-col items-center gap-2 px-4">
              <h4>Nov</h4>
              <h1 className="text-2xl font-bold">28</h1>
              <h4>Thu</h4>
            </div>
          </Card>
          <Card padding="p-3" background="cardBg" width="w-[full]">
            <div className="flex flex-col items-center gap-2 px-4">
              <h4>Nov</h4>
              <h1 className="text-2xl font-bold">29</h1>
              <h4>Fri</h4>
            </div>
          </Card>
        </div>
      </div>
      <div className="overflow-x-auto whitespace-nowrap py-4">
        <div className="flex space-x-4">
          <button className="sm-btn text-md font-semibold py-1 px-6 w-full bg-primary text-white">
            All
          </button>
          <button className="sm-btn text-md font-semibold py-1 px-6 w-full">
            Todo
          </button>
          <button className="sm-btn text-md font-semibold py-1 px-6 w-full">
            In Progress
          </button>
          <button className="sm-btn text-md font-semibold py-1 px-6 w-full">
            Completed
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3">
        <Card background="cardBg" shrink="shrink-0" width="w-[full]">
          <div className="flex justify-between items-start gap-3">
            <div>
              <span className="text-textSecondary text-sm">
                Grocery shopping app design
              </span>
              <h4 className="text-textPrimary text-md font-bold mb-0">
                Office Project
              </h4>
            </div>
            <span className="bg-lightPink p-1 rounded-lg">
              <IoBagHandleSharp className="text-lg text-darkPink" />
            </span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span>
              <FaCheckCircle className="text-lg text-primary" />
            </span>
            <Badge background="bg-lightPrimary" padding="py-px px-2">
              <span className="text-primary text-xs font-bold">Done</span>
            </Badge>
          </div>
        </Card>
        <Card background="cardBg" shrink="shrink-0" width="w-[full]">
          <div className="flex justify-between items-start gap-3">
            <div>
              <span className="text-textSecondary text-sm">
                Grocery shopping app design
              </span>
              <h4 className="text-textPrimary text-md font-bold mb-0">
                Competitive Analysis
              </h4>
            </div>
            <span className="bg-lightPink p-1 rounded-lg">
              <IoBagHandleSharp className="text-lg text-darkPink" />
            </span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span>
              <GoClockFill className="text-lg text-darkOrange" />
            </span>
            <Badge background="bg-lightOrange" padding="py-px px-2">
              <span className="text-darkOrange text-xs font-bold">
                In Progress
              </span>
            </Badge>
          </div>
        </Card>
        <Card background="cardBg" shrink="shrink-0" width="w-[full]">
          <div className="flex justify-between items-start gap-3">
            <div>
              <span className="text-textSecondary text-sm">
                Grocery shopping app design
              </span>
              <h4 className="text-textPrimary text-md font-bold mb-0">
                Create Low-fidelity Wireframe
              </h4>
            </div>
            <span className="bg-lightPink p-1 rounded-lg">
              <IoBagHandleSharp className="text-lg text-darkPink" />
            </span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span>
              <RiCalendarTodoFill className="text-lg text-darkBlue" />
            </span>
            <Badge background="bg-lightBlue" padding="py-px px-2">
              <span className="text-darkBlue text-xs font-bold">To-do</span>
            </Badge>
          </div>
        </Card>
        {/* test */}
        <Card background="cardBg" shrink="shrink-0" width="w-[full]">
          <div className="flex justify-between items-start gap-3">
            <div>
              <span className="text-textSecondary text-sm">
                Grocery shopping app design
              </span>
              <h4 className="text-textPrimary text-md font-bold mb-0">
                Office Project
              </h4>
            </div>
            <span className="bg-lightPink p-1 rounded-lg">
              <IoBagHandleSharp className="text-lg text-darkPink" />
            </span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span>
              <FaCheckCircle className="text-lg text-primary" />
            </span>
            <Badge background="bg-lightPrimary" padding="py-px px-2">
              <span className="text-primary text-xs font-bold">Done</span>
            </Badge>
          </div>
        </Card>
        <Card background="cardBg" shrink="shrink-0" width="w-[full]">
          <div className="flex justify-between items-start gap-3">
            <div>
              <span className="text-textSecondary text-sm">
                Grocery shopping app design
              </span>
              <h4 className="text-textPrimary text-md font-bold mb-0">
                Competitive Analysis
              </h4>
            </div>
            <span className="bg-lightPink p-1 rounded-lg">
              <IoBagHandleSharp className="text-lg text-darkPink" />
            </span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span>
              <GoClockFill className="text-lg text-darkOrange" />
            </span>
            <Badge background="bg-lightOrange" padding="py-px px-2">
              <span className="text-darkOrange text-xs font-bold">
                In Progress
              </span>
            </Badge>
          </div>
        </Card>
        <Card background="cardBg" shrink="shrink-0" width="w-[full]">
          <div className="flex justify-between items-start gap-3">
            <div>
              <span className="text-textSecondary text-sm">
                Grocery shopping app design
              </span>
              <h4 className="text-textPrimary text-md font-bold mb-0">
                Create Low-fidelity Wireframe
              </h4>
            </div>
            <span className="bg-lightPink p-1 rounded-lg">
              <IoBagHandleSharp className="text-lg text-darkPink" />
            </span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span>
              <RiCalendarTodoFill className="text-lg text-darkBlue" />
            </span>
            <Badge background="bg-lightBlue" padding="py-px px-2">
              <span className="text-darkBlue text-xs font-bold">To-do</span>
            </Badge>
          </div>
        </Card>
        <Card background="cardBg" shrink="shrink-0" width="w-[full]">
          <div className="flex justify-between items-start gap-3">
            <div>
              <span className="text-textSecondary text-sm">
                Grocery shopping app design
              </span>
              <h4 className="text-textPrimary text-md font-bold mb-0">
                Office Project
              </h4>
            </div>
            <span className="bg-lightPink p-1 rounded-lg">
              <IoBagHandleSharp className="text-lg text-darkPink" />
            </span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span>
              <FaCheckCircle className="text-lg text-primary" />
            </span>
            <Badge background="bg-lightPrimary" padding="py-px px-2">
              <span className="text-primary text-xs font-bold">Done</span>
            </Badge>
          </div>
        </Card>
        <Card background="cardBg" shrink="shrink-0" width="w-[full]">
          <div className="flex justify-between items-start gap-3">
            <div>
              <span className="text-textSecondary text-sm">
                Grocery shopping app design
              </span>
              <h4 className="text-textPrimary text-md font-bold mb-0">
                Competitive Analysis
              </h4>
            </div>
            <span className="bg-lightPink p-1 rounded-lg">
              <IoBagHandleSharp className="text-lg text-darkPink" />
            </span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span>
              <GoClockFill className="text-lg text-darkOrange" />
            </span>
            <Badge background="bg-lightOrange" padding="py-px px-2">
              <span className="text-darkOrange text-xs font-bold">
                In Progress
              </span>
            </Badge>
          </div>
        </Card>
        <Card background="cardBg" shrink="shrink-0" width="w-[full]">
          <div className="flex justify-between items-start gap-3">
            <div>
              <span className="text-textSecondary text-sm">
                Grocery shopping app design
              </span>
              <h4 className="text-textPrimary text-md font-bold mb-0">
                Create Low-fidelity Wireframe
              </h4>
            </div>
            <span className="bg-lightPink p-1 rounded-lg">
              <IoBagHandleSharp className="text-lg text-darkPink" />
            </span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span>
              <RiCalendarTodoFill className="text-lg text-darkBlue" />
            </span>
            <Badge background="bg-lightBlue" padding="py-px px-2">
              <span className="text-darkBlue text-xs font-bold">To-do</span>
            </Badge>
          </div>
        </Card>
        <Card background="cardBg" shrink="shrink-0" width="w-[full]">
          <div className="flex justify-between items-start gap-3">
            <div>
              <span className="text-textSecondary text-sm">
                Grocery shopping app design
              </span>
              <h4 className="text-textPrimary text-md font-bold mb-0">
                Office Project
              </h4>
            </div>
            <span className="bg-lightPink p-1 rounded-lg">
              <IoBagHandleSharp className="text-lg text-darkPink" />
            </span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span>
              <FaCheckCircle className="text-lg text-primary" />
            </span>
            <Badge background="bg-lightPrimary" padding="py-px px-2">
              <span className="text-primary text-xs font-bold">Done</span>
            </Badge>
          </div>
        </Card>
        <Card background="cardBg" shrink="shrink-0" width="w-[full]">
          <div className="flex justify-between items-start gap-3">
            <div>
              <span className="text-textSecondary text-sm">
                Grocery shopping app design
              </span>
              <h4 className="text-textPrimary text-md font-bold mb-0">
                Competitive Analysis
              </h4>
            </div>
            <span className="bg-lightPink p-1 rounded-lg">
              <IoBagHandleSharp className="text-lg text-darkPink" />
            </span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span>
              <GoClockFill className="text-lg text-darkOrange" />
            </span>
            <Badge background="bg-lightOrange" padding="py-px px-2">
              <span className="text-darkOrange text-xs font-bold">
                In Progress
              </span>
            </Badge>
          </div>
        </Card>
        <Card background="cardBg" shrink="shrink-0" width="w-[full]">
          <div className="flex justify-between items-start gap-3">
            <div>
              <span className="text-textSecondary text-sm">
                Grocery shopping app design
              </span>
              <h4 className="text-textPrimary text-md font-bold mb-0">
                Create Low-fidelity Wireframe
              </h4>
            </div>
            <span className="bg-lightPink p-1 rounded-lg">
              <IoBagHandleSharp className="text-lg text-darkPink" />
            </span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span>
              <RiCalendarTodoFill className="text-lg text-darkBlue" />
            </span>
            <Badge background="bg-lightBlue" padding="py-px px-2">
              <span className="text-darkBlue text-xs font-bold">To-do</span>
            </Badge>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Lists;
