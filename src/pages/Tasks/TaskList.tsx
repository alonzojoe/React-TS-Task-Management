import { useMemo, useState } from "react";
import useTask from "../../store/tasks-context";
import { type TaskData } from "../../types/Task";
import { STATUS, CATEGORIES } from "../../constants/global";
import TaskFilter from "./components/TaskFilter";

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
        return task?.status?.name === filter;
      });
  }, [tasks, filter]);

  console.log("mapped task", mappedTasks);
  return (
    <div className="container space-y-5  py-2">
      <TaskFilter filter={filter} onFilter={setFilter} />
      <Lists tasks={mappedTasks} />
    </div>
  );
};

export default TaskList;
