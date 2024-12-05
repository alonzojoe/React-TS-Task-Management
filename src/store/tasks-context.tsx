import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { type Task, type FormData, type TValidation } from "../types/Task";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";

type TasksContextType = {
  tasks: Task[] | null;
  addTask: (data: FormData) => void;
  setPayload: React.Dispatch<React.SetStateAction<FormData | null>>;
  payload: FormData | null;
  isInvalid: TValidation;
};

const TasksContext = createContext<TasksContextType>({
  tasks: null,
  addTask: () => {},
  setPayload: () => {
    throw new Error("setPayload function must be implemented in the provider.");
  },
  payload: null,
  isInvalid: {
    title: false,
    description: false,
  },
});

type TasksContextProviderProps = {
  children: ReactNode;
};

export const TasksContextProvider = ({
  children,
}: TasksContextProviderProps) => {
  const [tasks, setTasks] = useLocalStorage<Task[] | null>("T_TASKS", null);
  const [payload, setPayload] = useState<FormData | null>(null);
  const [isInvalid, setIsInvalid] = useState<TValidation>({
    title: false,
    description: false,
  });
  const navigate = useNavigate();
  const { id: taskId } = useParams();

  const addTask = (data: FormData) => {
    const { title, description } = data;

    const newInvalidState = {
      title: title.trim() === "",
      description: description.trim() === "",
    };

    setIsInvalid(newInvalidState);
    if (newInvalidState.title || newInvalidState.description) return;
    console.log("taskid", taskId);
    if (typeof taskId === "string") {
      const updatedTask: Task = {
        ...data,
        id: taskId,
      };
      setTasks((prevTasks) => {
        if (Array.isArray(prevTasks)) {
          const updatedTasks = prevTasks.map((task) =>
            task.id === taskId ? updatedTask : task
          );
          toast.success("Project Updated!");
          return updatedTasks;
        }
        return [];
      });
      console.log("selected task", updatedTask);
      toast.success("Project Updated!");
    } else {
      const newTask: Task = {
        ...data,
        id: uuidV4(),
      };
      setTasks((prevTask) => (prevTask ? [newTask, ...prevTask] : [newTask]));
      toast.success("Project added!");
    }

    // navigate("/home/task/lists");
  };

  const value = {
    tasks,
    addTask,
    setPayload,
    payload,
    isInvalid,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export default function useTask() {
  return useContext(TasksContext);
}
