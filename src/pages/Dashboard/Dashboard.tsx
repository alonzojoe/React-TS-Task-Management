import { useMemo } from "react";
import TasksStatus from "./components/TasksStatus";
import TaskGroup from "./components/TaskGroup";
import TaskHeader from "./components/TaskHeader";
import { CATEGORIES, STATUS } from "../../constants/global";
import useTask from "../../store/tasks-context";
import { TaskData } from "../../types/Task";
import InProgressLists from "./components/InProgressLists";

const FILTER_VALUE = "In Progress";

const Dashboard = () => {
  const { tasks } = useTask();

  const inProgressTasks: TaskData[] | null = useMemo(() => {
    if (!tasks || tasks.length === 0) return null;

    return tasks
      .map((task) => ({
        ...task,
        category: CATEGORIES.find((c) => c.id === task.category) || null,
        status: STATUS.find((s) => s.id === task.status) || null,
      }))
      .filter((task) => {
        return task?.status?.name === FILTER_VALUE;
      });
  }, [tasks]);

  const mappedTasks: TaskData[] | null = useMemo(() => {
    if (!tasks || tasks.length === 0) return null;

    return tasks.map((task) => ({
      ...task,
      category: CATEGORIES.find((c) => c.id === task.category) || null,
      status: STATUS.find((s) => s.id === task.status) || null,
    }));
  }, [tasks]);

  console.log("dashboard", mappedTasks);

  const categoryData = useMemo(() => {
    if (!mappedTasks) return [];

    return CATEGORIES.map((category) => {
      const tasksInCategory = mappedTasks.filter(
        (task) => task.category?.id === category.id
      );
      const taskCount = tasksInCategory.length;
      const accomplishedCount = tasksInCategory.filter(
        (task) => task.status?.name === "Done"
      ).length;

      const percentage =
        taskCount > 0 ? (accomplishedCount / taskCount) * 100 : 0;

      return {
        category,
        taskCount,
        percentage,
      };
    });
  }, [mappedTasks]);

  const allTasksPercentage = useMemo(() => {
    if (!mappedTasks || mappedTasks.length === 0) return 0;

    const totalTasks = mappedTasks.length;
    const completedTasks = mappedTasks.filter(
      (task) => task.status?.name === "Done"
    ).length;

    return Math.round((completedTasks / totalTasks) * 100);
  }, [mappedTasks]);

  console.log("categoryData", categoryData);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 py-2">
      <div className="flex flex-col justify-center md:justify-start space-y-8">
        <TasksStatus percentage={allTasksPercentage} />
        <div className="md:hidden">
          <TaskHeader caption="In Progress" count={inProgressTasks?.length} />
          <div className="overflow-x-auto whitespace-nowrap py-4">
            <div className="flex space-x-4">
              <InProgressLists tasks={inProgressTasks} />
            </div>
          </div>
        </div>
        <div className="mt-5 mb-10 md:mx-5 hidden md:block">
          <TaskHeader caption="Task Groups" count={categoryData.length} />
          <div className="grid grid-cols-1 space-y-8">
            {categoryData.map(({ category, taskCount, percentage }) => (
              <TaskGroup
                key={category.id}
                category={category}
                taskCount={taskCount}
                percentage={Math.round(percentage)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-1 mb-10 md:mx-5 md:hidden">
        <TaskHeader caption="Task Groups" count={categoryData.length} />
        <div className="grid grid-cols-1 space-y-8">
          {categoryData.length === 0 ? (
            <p className="mx-auto py-5 text-lg text-textSecondary">
              No task groups available
            </p>
          ) : (
            <>
              {categoryData.map(({ category, taskCount, percentage }) => (
                <TaskGroup
                  key={category.id}
                  category={category}
                  taskCount={taskCount}
                  percentage={Math.round(percentage)}
                />
              ))}
            </>
          )}
        </div>
      </div>

      <div className="hidden md:block">
        <TaskHeader caption="In Progress" count={inProgressTasks?.length} />

        <div className="whitespace-nowrap py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            <InProgressLists tasks={inProgressTasks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
