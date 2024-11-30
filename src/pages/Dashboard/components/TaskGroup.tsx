import CircularProgressBar from "../../../components/UI/CircularProgressBar";
import Card from "../../../components/UI/Card";
import { Category } from "../../../types/Categories";
import { FaCaretUp } from "react-icons/fa6";

type TaskGroupProps = {
  category: Category;
  taskCount: number;
};

const TaskGroup = ({ category, taskCount = 0 }: TaskGroupProps) => {
  const {
    id,
    name,
    icon: Icon,
    classColor,
    classBgColor,
    color,
    bgColor,
  } = category;

  return (
    <Card background="cardBg" shrink="shrink-0" width="w-[full]">
      <div className="flex items-center justify-between" id={`category-${id}`}>
        <div className="flex items-center gap-3">
          <span className={`${classBgColor} p-2 rounded-xl`}>
            <Icon className={`text-2xl ${classColor}`} />
          </span>
          <div>
            <h4 className="text-textPrimary text-md font-bold mb-0">{name}</h4>
            <span className="text-textSecondary text-sm">
              {taskCount} Tasks
            </span>
          </div>
        </div>
        <div>
          <CircularProgressBar
            textColor="text-black"
            strokeColor={bgColor}
            fillColor={color}
            percentage={5}
            size={50}
            strokeWidth={5}
            textSize="text-sm"
          />
        </div>
      </div>
    </Card>
  );
};

export default TaskGroup;
