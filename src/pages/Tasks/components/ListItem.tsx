import Card from "../../../components/UI/Card";
import Badge from "../../../components/UI/Badge";
import { FaCheckCircle } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { TaskData } from "../../../types/Task";
type ListItemProps = {
  task: TaskData;
};

const ListItem = ({ task }: ListItemProps) => {
  console.log("list item", task);
  return (
    <Card background="cardBg" shrink="shrink-0" width="w-[full]">
      <div className="flex justify-between items-start gap-3">
        <div>
          <span className="text-textSecondary text-sm">
            Grocery shopping app design
          </span>
          <h4 className="text-textPrimary text-md font-bold mb-0">
            Office Project
          </h4>
        </div>
        <span className="bg-lightPink p-1 rounded-lg">
          <IoBagHandleSharp className="text-lg text-darkPink" />
        </span>
      </div>
      <div className="flex items-center justify-between pt-2">
        <span>
          <FaCheckCircle className="text-lg text-primary" />
        </span>
        <Badge background="bg-lightPrimary" padding="py-px px-2">
          <span className="text-primary text-xs font-bold">Done</span>
        </Badge>
      </div>
    </Card>
  );
};

export default ListItem;
