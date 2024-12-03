import TaskForm from "./components/TaskForm";
import { type FormData } from "../../types/Task";

const CreateTask = () => {
  const handleSave = (data: FormData) => {
    console.log("new task", data);
  };

  return (
    <div className="container space-y-5  py-2">
      <TaskForm onAdd={handleSave} />
    </div>
  );
};

export default CreateTask;
