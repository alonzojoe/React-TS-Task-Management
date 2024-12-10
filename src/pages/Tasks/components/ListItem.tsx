import { Link } from "react-router-dom";
import Card from "../../../components/UI/Card";
import Badge from "../../../components/UI/Badge";
import { TaskData } from "../../../types/Task";
type ListItemProps = {
  task: TaskData;
};

const ListItem = ({ task }: ListItemProps) => {
  console.log("list item", task);
  if (!task.category || !task.status) {
    return (
      <div className="text-danger mx-auto">Task data contains an error</div>
    );
  }
  return (
    <Card background="cardBg" shrink="shrink-0" width="w-full">
      <Link to={`/home/task/${task.id}/edit`}>
        <div className="flex justify-between items-start gap-3 cursor-pointer">
          <div className="flex-1 min-w-0">
            <span className="text-textSecondary text-sm text-ellipsis whitespace-nowrap overflow-hidden block">
              {task.description}
            </span>
            <h4 className="text-textPrimary text-md font-bold mb-0 text-ellipsis whitespace-nowrap overflow-hidden block">
              {task.title}
            </h4>
          </div>
          <span className={`${task.category?.classBgColor} p-1 rounded-lg`}>
            <task.category.icon
              className={`text-lg ${task.category?.classColor}`}
            />
          </span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span>
            <task.status.icon className={`text-lg ${task.status.classColor}`} />
          </span>
          <Badge background={task.status.classBgColor} padding="py-px px-2">
            <span className={`${task.status.classColor} text-xs font-bold`}>
              {task.status.name}
            </span>
          </Badge>
        </div>
      </Link>
    </Card>
  );
};

export default ListItem;
