import { useMemo, useState } from "react";
import useTask from "../../store/tasks-context";
import { type TaskData } from "../../types/Task";
import { STATUS, CATEGORIES } from "../../constants/global";
import TaskFilter from "./components/TaskFilter";
import useDebounce from "../../hooks/useDebounce";

import Lists from "./components/Lists";

const TaskList = () => {
  const { tasks } = useTask();
  const [filter, setFilter] = useState<string | null>(null);
  const [searchFilter, setSearchFilter] = useState("");
  const debounceValue = useDebounce(searchFilter, 500);

  const mappedTasks: TaskData[] | null = useMemo(() => {
    if (!tasks || tasks.length === 0) return null;

    return tasks
      .map((task) => ({
        ...task,
        category: CATEGORIES.find((c) => c.id === task.category) || null,
        status: STATUS.find((s) => s.id === task.status) || null,
      }))
      .filter((task) => {
        if (filter && task?.status?.name !== filter) return false;

        if (
          debounceValue &&
          !(
            task?.title?.toLowerCase().includes(debounceValue.toLowerCase()) ||
            task?.description
              ?.toLowerCase()
              .includes(debounceValue.toLowerCase())
          )
        ) {
          return false;
        }

        return true;
      });
  }, [tasks, filter, debounceValue]);

  // console.log("mapped task", mappedTasks);
  console.log(searchFilter);
  return (
    <div className="container space-y-5  py-2">
      <TaskFilter
        searchFilter={searchFilter}
        onSearch={setSearchFilter}
        filter={filter}
        onFilter={setFilter}
      />
      <Lists tasks={mappedTasks} />
    </div>
  );
};

export default TaskList;
