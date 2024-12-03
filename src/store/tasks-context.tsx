import { createContext, ReactNode, useContext } from "react";
import { type Task, type FormData } from "../types/Task";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidV4 } from "uuid";

type TasksContextType = {
  tasks: Task[] | null;
  addTask: (data: FormData) => void;
  setPayload: <T>(data: FormData) => T;
};

const TasksContext = createContext<TasksContextType>({
  tasks: null,
  addTask: () => {},
  setPayload: <T,>(): T => {
    throw new Error("setPayload function must be implemented in the provider.");
  },
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

  const setPayload = <T,>(data: FormData): T => {
    console.log("Payload set:", data);
    return data as T;
  };

  const value = {
    tasks,
    addTask,
    setPayload,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export default function useTask() {
  return useContext(TasksContext);
}
