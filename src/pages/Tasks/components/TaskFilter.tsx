import React from "react";
import { FILTER_STATUS } from "../../../constants/global";
import { IoSearch } from "react-icons/io5";

type TaskFilterProps = {
  filter: string | null;
  onFilter: React.Dispatch<React.SetStateAction<string | null>>;
  searchFilter: string;
  onSearch: React.Dispatch<React.SetStateAction<string>>;
};

const TaskFilter = ({
  filter,
  onFilter,
  searchFilter,
  onSearch,
}: TaskFilterProps) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4">
      <div className="mb-4 relative group">
        <input
          type="text"
          value={searchFilter}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full py-1 text-lg px-2 text-textPrimary outline-none border-lightPrimary focus:border-primary rounded-xl border-[1px]"
        />
        <span className="bg-transparent absolute right-2 top-2">
          <IoSearch className="text-xl text-lightPrimary group-focus-within:text-primary" />
        </span>
      </div>
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
