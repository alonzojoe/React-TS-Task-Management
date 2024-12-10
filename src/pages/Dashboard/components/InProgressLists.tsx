import InProgressItem from "./InProgressItem";
import { TaskData } from "../../../types/Task";

type InProgressListsProps = {
  tasks: TaskData[] | null;
};

const InProgressLists = ({ tasks }: InProgressListsProps) => {
  if (!tasks || tasks.length === 0)
    return (
      <p className="text-center py-5 text-lg text-textSecondary">
        No tasks available
      </p>
    );
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4">
      <div className="flex space-x-4">
        {tasks.map((task) => (
          <InProgressItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default InProgressLists;
