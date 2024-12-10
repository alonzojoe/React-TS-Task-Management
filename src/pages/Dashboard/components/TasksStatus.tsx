import { useNavigate } from "react-router-dom";
import Card from "../../../components/UI/Card";
import CircularProgressBar from "../../../components/UI/CircularProgressBar";

type TasksStatusProps = {
  percentage?: number;
};

const TasksStatus = ({ percentage = 65 }: TasksStatusProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <Card background="bg-primary" width="w-full">
        <div className="flex justify-center items-center gap-4 p-2">
          <div className="space-y-6">
            <h4 className="text-xl font-semibold mb-0 text-white !leading-snug">
              Your task progress is almost done!
            </h4>
            <button
              className="secondary-btn text-xl py-2 px-5 w-full"
              onClick={() => {
                navigate("/home/task/lists");
              }}
            >
              View Task
            </button>
          </div>
          <div className="px-4">
            <CircularProgressBar
              textColor="text-white"
              strokeColor="#8764FF"
              fillColor="#EEE9FF"
              percentage={percentage}
              size={100}
              strokeWidth={12}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TasksStatus;
