import { useMemo, useState } from "react";
import useTask from "../../store/tasks-context";
import { type TaskData } from "../../types/Task";
import { STATUS, CATEGORIES } from "../../constants/global";

import Lists from "./components/Lists";

const TaskList = () => {
  const { tasks } = useTask();
  const [filter, setFilter] = useState<string | null>(null);

  const mappedTasks: TaskData[] | null = useMemo(() => {
    if (!tasks || tasks.length === 0) return null;

    return tasks
      .map((task) => ({
        ...task,
        category: CATEGORIES.find((c) => c.id === task.category) || null,
        status: STATUS.find((s) => s.id === task.status) || null,
      }))
      .filter((task) => {
        if (!filter) return true;
        console.log("inside useMemo");
        console.log("task category", task?.category?.name);
        console.log("filter value", filter);
        return task?.status?.name === filter;
      });
  }, [tasks, filter]);

  console.log("mapped task", mappedTasks);
  return (
    <div className="container space-y-5  py-2">
      <div className="overflow-x-auto whitespace-nowrap py-4">
        <div className="flex space-x-4">
          {/* bg-primary text-white */}
          <button
            className={`sm-btn text-md font-semibold py-1 px-6 w-full ${
              filter === null ? "bg-primary text-white" : ""
            }`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          <button
            className={`sm-btn text-md font-semibold py-1 px-6 w-full ${
              filter === "To-do" ? "bg-primary text-white" : ""
            }`}
            onClick={() => setFilter("To-do")}
          >
            Todo
          </button>
          <button
            className={`sm-btn text-md font-semibold py-1 px-6 w-full ${
              filter === "In Progress" ? "bg-primary text-white" : ""
            }`}
            onClick={() => setFilter("In Progress")}
          >
            In Progress
          </button>
          <button
            className={`sm-btn text-md font-semibold py-1 px-6 w-full ${
              filter === "Done" ? "bg-primary text-white" : ""
            }`}
            onClick={() => setFilter("Done")}
          >
            Completed
          </button>
        </div>
      </div>
      <Lists tasks={mappedTasks} />
    </div>
  );
};

export default TaskList;
