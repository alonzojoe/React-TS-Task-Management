import { createContext, ReactNode, useContext } from "react";
import { type Task, type FormData } from "../types/Task";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidV4 } from "uuid";

type TasksContextType = {
  tasks: Task[] | null;
  addTask: (data: FormData) => void;
};

const TasksContext = createContext<TasksContextType>({
  tasks: null,
  addTask: () => {},
});

type TasksContextProviderProps = {
  children: ReactNode;
};

export const TasksContextProvider = ({
  children,
}: TasksContextProviderProps) => {
  const [tasks, setTasks] = useLocalStorage<Task[] | null>("T_TASKS", null);

  const addTask = (data: FormData) => {
    const newTask: Task = {
      ...data,
      id: uuidV4(),
    };

    setTasks((prevTask) => (prevTask ? [newTask, ...prevTask] : [newTask]));
  };

  const value = {
    tasks,
    addTask,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export default function useTask() {
  return useContext(TasksContext);
}
