import { useState, useMemo } from "react";
import CalendarSwipe from "./components/CalendarSwipe";
import TaskFilter from "./components/TaskFilter";
import Lists from "./components/Lists";
import useTask from "../../store/tasks-context";
import { CATEGORIES, STATUS } from "../../constants/global";
import { TaskData } from "../../types/Task";
import moment, { Moment } from "moment";

const TodayTasks = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState<Moment>(moment());
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

          return taskDate.isSame(selectedDate);
        }

        return true;
      });
  }, [tasks, filter, dateFilter]);

  return (
    <div className="container space-y-5  py-2">
      <CalendarSwipe onDateSelect={setDateFilter} />
      <TaskFilter filter={filter} onFilter={setFilter} />
      <Lists tasks={filteredTasks} />
    </div>
  );
};

export default TodayTasks;
