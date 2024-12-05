import Card from "../../../components/UI/Card";
import { Moment } from "moment";

type CalendarDaysProps = {
  date: Moment;
  isSelected: boolean;
  onClick: (date: Moment) => void;
};

const CalendarDays = ({ date, isSelected, onClick }: CalendarDaysProps) => {
  return (
    <Card
      padding="p-3"
      background={isSelected ? "bg-primary" : "cardBg"}
      width="w-[full]"
    >
      <div
        className={`cursor-pointer ${isSelected ? "text-white" : "text-dark"}`}
        onClick={() => onClick(date)}
      >
        <div className="flex flex-col items-center gap-2 px-4">
          <h4>{date.format("MMM")}</h4>
          <h1 className="text-2xl font-bold">{date.format("DD")}</h1>
          <h4>{date.format("ddd")}</h4>
        </div>
      </div>
    </Card>
  );
};

export default CalendarDays;
