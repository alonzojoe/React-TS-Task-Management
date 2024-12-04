import { useMemo } from "react";
import useTask from "../../store/tasks-context";
import { type TaskData } from "../../types/Task";
import { STATUS, CATEGORIES } from "../../constants/global";

import Lists from "./components/Lists";

const TaskList = () => {
  const { tasks } = useTask();

  const mappedTasks: TaskData[] | null = useMemo(() => {
    if (!tasks || tasks.length === 0) return null;

    return tasks.map((task) => ({
      ...task,
      category: CATEGORIES.find((c) => c.id === task.category) || null,
      status: STATUS.find((s) => s.id === task.status) || null,
    }));
  }, [tasks]);

  console.log("mapped task", mappedTasks);
  return (
    <div className="container space-y-5  py-2">
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
      <Lists tasks={mappedTasks} />
    </div>
  );
};

export default TaskList;
