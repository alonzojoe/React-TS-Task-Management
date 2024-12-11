import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { type Task, type FormData, type TValidation } from "../types/Task";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import moment from "moment";

type TasksContextType = {
  tasks: Task[] | null;
  addTask: (data: FormData) => void;
  setPayload: React.Dispatch<React.SetStateAction<FormData | null>>;
  payload: FormData | null;
  setIsInvalid: React.Dispatch<React.SetStateAction<TValidation>>;
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
  setIsInvalid: () => {
    throw new Error(
      "setIsInvalid function must be implemented in the provider."
    );
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

  const addTask = (data: FormData) => {
    const { title, description } = data;

    const newInvalidState = {
      title: title.trim() === "",
      description: description.trim() === "",
    };

    setIsInvalid(newInvalidState);
    if (newInvalidState.title || newInvalidState.description) return;
    // console.log("payload in ctx", payload);

    const { id: taskId } = payload as FormData;

    if (typeof taskId === "string") {
      // console.log("task is being updated");
      const updatedTask: Task = {
        ...data,
        id: taskId,
      };

      setTasks((prevTasks) => {
        if (Array.isArray(prevTasks)) {
          const updatedTasks = prevTasks.map((task) =>
            task.id === taskId ? updatedTask : task
          );
          return updatedTasks;
        }
        return [];
      });

      // console.log("selected task", updatedTask);
      toast.success("Project Updated!");
    } else {
      // console.log("task is being added");

      const newTask: Task = {
        ...data,
        startDate: moment(data.startDate).startOf("day").toDate(),
        endDate: moment(data.endDate).startOf("day").toDate(),
        id: uuidV4(),
      };
      // console.log("new task", newTask);
      // return;
      setTasks((prevTask) => (prevTask ? [newTask, ...prevTask] : [newTask]));
      toast.success("Project added!");
    }

    navigate("/home/task/lists");
  };

  let updatedTasks: typeof tasks | null = null;

  try {
    updatedTasks =
      tasks?.map((task) => {
        if (!task.startDate || !task.endDate) {
          throw new Error("Task dates are invalid or missing");
        }
        return {
          ...task,
          startDate: new Date(task.startDate),
          endDate: new Date(task.endDate),
        };
      }) ?? null;
  } catch (error) {
    // console.error("Error mapping tasks:", error);
    updatedTasks = null;
    throw new Error(`Error mapping tasks: ${error}`);
  }
  // console.log(updatedTasks);
  // console.log("updated t", updatedTasks);
  const value = {
    tasks: updatedTasks,
    addTask,
    setPayload,
    payload,
    setIsInvalid,
    isInvalid,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export default function useTask() {
  return useContext(TasksContext);
}
