import { useState, useMemo } from "react";
import CalendarSwipe from "./components/CalendarSwipe";
import TaskFilter from "./components/TaskFilter";
import Lists from "./components/Lists";
import useTask from "../../store/tasks-context";
import { CATEGORIES, STATUS } from "../../constants/global";
import { TaskData } from "../../types/Task";
import moment, { Moment } from "moment";
import useDebounce from "../../hooks/useDebounce";

const TodayTasks = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState<Moment>(moment());
  const [searchFilter, setSearchFilter] = useState<string>("");
  const debounceValue = useDebounce(searchFilter, 300);
  const { tasks } = useTask();

  const filteredTasks: TaskData[] | null = useMemo(() => {
    if (!tasks || tasks.length === 0) return null;

    return tasks
      .map((task) => ({
        ...task,
        category: CATEGORIES.find((c) => c.id === task.category) || null,
        status: STATUS.find((s) => s.id === task.status) || null,
      }))
      .filter((task) => {
        if (filter && task?.status?.name !== filter) {
          return false;
        }

        if (dateFilter) {
          const taskDate = moment(task.endDate).startOf("day");
          const selectedDate = moment(dateFilter).startOf("day");
          if (!taskDate.isSame(selectedDate)) {
            return false;
          }
        }

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
  }, [tasks, filter, dateFilter, debounceValue]);

  return (
    <div className="container space-y-5  py-2">
      <CalendarSwipe onDateSelect={setDateFilter} />
      <TaskFilter
        searchFilter={searchFilter}
        onSearch={setSearchFilter}
        filter={filter}
        onFilter={setFilter}
      />
      <Lists tasks={filteredTasks} />
    </div>
  );
};

export default TodayTasks;
