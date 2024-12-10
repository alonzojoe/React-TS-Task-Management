import React from "react";
import { FILTER_STATUS } from "../../../constants/global";

type TaskFilterProps = {
  filter: string | null;
  onFilter: React.Dispatch<React.SetStateAction<string | null>>;
};

const TaskFilter = ({ filter, onFilter }: TaskFilterProps) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4">
      <div className="flex space-x-4">
        {FILTER_STATUS.map((stat) => (
          <button
            key={stat.id}
            className={`sm-btn text-md font-semibold py-1 px-6 w-full ${
              filter === stat.alias ? "bg-primary text-white" : ""
            }`}
            onClick={() => onFilter(stat.alias)}
          >
            {stat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilter;
