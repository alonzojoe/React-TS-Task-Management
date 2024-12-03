import { createContext, ReactNode, useContext, useState } from "react";
import { type Task, type FormData } from "../types/Task";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidV4 } from "uuid";

type TasksContextType = {
  tasks: Task[] | null;
  addTask: (data: FormData) => void;
  setPayload: React.Dispatch<React.SetStateAction<FormData | null>>;
  payload: FormData | null;
};

const TasksContext = createContext<TasksContextType>({
  tasks: null,
  addTask: () => {},
  setPayload: () => {
    throw new Error("setPayload function must be implemented in the provider.");
  },
  payload: null,
});

type TasksContextProviderProps = {
  children: ReactNode;
};

export const TasksContextProvider = ({
  children,
}: TasksContextProviderProps) => {
  const [tasks, setTasks] = useLocalStorage<Task[] | null>("T_TASKS", null);
  const [payload, setPayload] = useState<FormData | null>(null);

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
    setPayload,
    payload,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export default function useTask() {
  return useContext(TasksContext);
}
