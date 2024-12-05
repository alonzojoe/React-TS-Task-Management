import TaskForm from "./components/TaskForm";

const EditTask = () => {
  return (
    <div className="container space-y-5  py-2">
      <TaskForm isUpdate={true} />
    </div>
  );
};

export default EditTask;
