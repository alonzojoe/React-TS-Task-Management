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
    <>
      {tasks.map((task) => (
        <InProgressItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default InProgressLists;
