import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

type CalendarProps = {
  onSelect: (value: Date | undefined) => void;
  selected: Date | undefined;
  disabled?: {
    before?: Date;
    after?: Date;
    daysOfWeek?: number[];
  };
};
// React.Dispatch<React.SetStateAction<Date | undefined>>
const Calendar = ({ onSelect, selected, disabled }: CalendarProps) => {
  const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      classNames={{
        today: `bg-lightPrimary rounded-full text-primary`,
        selected: `bg-primary rounded-full text-white`,
        root: `${defaultClassNames.root} p-3 text-sm rounded-2xl`,
        chevron: `fill-primary font-bold`,
        table: `w-full`,
        day: `p-1`,
      }}
      disabled={disabled}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
};

export default Calendar;
