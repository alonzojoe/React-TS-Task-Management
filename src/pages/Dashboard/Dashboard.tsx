import { useMemo } from "react";
import Card from "../../components/UI/Card";
import TasksStatus from "./components/TasksStatus";
import TaskGroup from "./components/TaskGroup";
import TaskHeader from "./components/TaskHeader";
import { IoBagHandleSharp } from "react-icons/io5";
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

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 py-2">
      <div className="flex flex-col justify-center md:justify-start space-y-8">
        <TasksStatus percentage={1} />
        <div className="md:hidden">
          <TaskHeader caption="In Progress" count={inProgressTasks?.length} />

          <InProgressLists tasks={inProgressTasks} />
        </div>
        <div className="mt-5 mb-10 md:mx-5 hidden md:block">
          <TaskHeader caption="Task Groups" count={CATEGORIES.length} />
          <div className="grid grid-cols-1 space-y-8">
            {CATEGORIES.map((category) => (
              <TaskGroup category={category} taskCount={0} key={category.id} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-1 mb-10 md:mx-5 md:hidden">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-left text-textPrimary font-bold text-xl">
            Task Groups
          </h2>
          <div className="w-[25px] h-[25px] p-2 font-bold text-primary bg-lightPrimary rounded-full flex items-center justify-center">
            {CATEGORIES.length}
          </div>
        </div>
        <div className="grid grid-cols-1 space-y-8">
          {CATEGORIES.map((category) => (
            <TaskGroup category={category} taskCount={0} key={category.id} />
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex items-center gap-3">
          <h2 className="text-left text-textPrimary font-bold text-xl">
            In Progress
          </h2>
          <div className="w-[25px] h-[25px] p-2 font-bold text-primary bg-lightPrimary rounded-full flex items-center justify-center">
            3
          </div>
        </div>

        <div className="whitespace-nowrap py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            <Card background="bg-lightBlue" shrink="shrink-0" width="w-full">
              <div className="flex items-center justify-between">
                <h4 className="text-textSecondary text-sm">Office Project</h4>
                <span className="bg-lightPink p-1 rounded-lg">
                  <IoBagHandleSharp className="text-2xl text-darkPink" />
                </span>
              </div>
              <div className="flex items-center justify-between py-0">
                <h3 className="text-textPrimary text-md font-bold !leading-6 text-wrap">
                  Grocery shopping app design
                </h3>
                <div></div>
              </div>
            </Card>
            <Card background="bg-lightOrange" shrink="shrink-0" width="w-full">
              <div className="flex items-center justify-between">
                <h4 className="text-textSecondary text-sm">Office Project</h4>
                <span className="bg-lightPink p-1 rounded-lg">
                  <IoBagHandleSharp className="text-2xl text-darkPink" />
                </span>
              </div>
              <div className="flex items-center justify-between py-0">
                <h3 className="text-textPrimary text-md font-bold !leading-6 text-wrap">
                  Grocery shopping app design
                </h3>
                <div></div>
              </div>
            </Card>
            <Card background="bg-lightPrimary" shrink="shrink-0" width="w-full">
              <div className="flex items-center justify-between">
                <h4 className="text-textSecondary text-sm">Office Project</h4>
                <span className="bg-lightPink p-1 rounded-lg">
                  <IoBagHandleSharp className="text-2xl text-darkPink" />
                </span>
              </div>
              <div className="flex items-center justify-between py-0">
                <h3 className="text-textPrimary text-md font-bold !leading-6 text-wrap">
                  Grocery shopping app design
                </h3>
                <div></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
