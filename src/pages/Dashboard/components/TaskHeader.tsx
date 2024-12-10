type TaskHeaderProps = {
  caption: string;
  count?: number;
};

const TaskHeader = ({ caption, count = 0 }: TaskHeaderProps) => {
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-left text-textPrimary font-bold text-xl">
        {caption}
      </h2>
      <div className="w-[25px] h-[25px] p-2 font-bold text-primary bg-lightPrimary rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};

export default TaskHeader;
