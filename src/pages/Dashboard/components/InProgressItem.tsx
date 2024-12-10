import { Link } from "react-router-dom";
import { TaskData } from "../../../types/Task";
import Card from "../../../components/UI/Card";

type InProgressItemProps = {
  task: TaskData;
};

const InProgressItem = ({ task }: InProgressItemProps) => {
  if (!task || !task.category || !task.status) {
    return (
      <div className="text-danger mx-auto">Task data contains an error</div>
    );
  }
  return (
    <Card background="bg-lightBlue" shrink="shrink-0" width="w-[250px]">
      <Link to={`/home/task/${task.id}/edit`}>
        <div className="flex items-center justify-between">
          <span className="text-textSecondary text-sm text-ellipsis">
            {task.description}
          </span>
          <span className={`${task.category.classBgColor} p-1 rounded-lg`}>
            <task.status.icon
              className={`text-lg ${task.category.classColor}`}
            />
          </span>
        </div>
        <div className="flex items-center justify-between py-0">
          <h3 className="text-textPrimary text-md font-bold !leading-6 text-wrap">
            {task.title}
          </h3>
          <div></div>
        </div>
      </Link>
    </Card>
  );
};

export default InProgressItem;
