import { useState, useEffect } from "react";
import moment, { Moment } from "moment";
import CalendarDays from "./CalendarDays";

type CalendarSwipeProps = {
  onDateSelect: React.Dispatch<React.SetStateAction<Moment>>;
};

const CalendarSwipe = ({ onDateSelect }: CalendarSwipeProps) => {
  const [daysToShow, setDaysToShow] = useState(5);
  const [selectedDate, setSelectedDate] = useState<Moment>(moment());

  useEffect(() => {
    const updateDaysToShow = () => {
      setDaysToShow(
        window.innerWidth === 768 ? 11 : window.innerWidth >= 768 ? 16 : 5
      );
    };
    updateDaysToShow();
    window.addEventListener("resize", updateDaysToShow);
    return () => window.removeEventListener("resize", updateDaysToShow);
  }, []);

  const calculateStartDate = (centerDate: Moment, visibleDays: number) => {
    const offset = Math.floor(visibleDays / 2);
    return moment(centerDate).subtract(offset, "days");
  };

  const getDays = (startDate: Moment, count: number): Moment[] => {
    return Array.from({ length: count }, (_, i) =>
      moment(startDate).add(i, "days")
    );
  };

  const startDate = calculateStartDate(selectedDate, daysToShow);
  const days = getDays(startDate, daysToShow);

  const handleDayClick = (date: Moment) => {
    setSelectedDate(date);
    onDateSelect(date);
    // console.log(date);
  };

  return (
    <div className="overflow-x-auto whitespace-nowrap py-4">
      <div className="flex items-center justify-center space-x-2">
        {days.map((day) => (
          <CalendarDays
            key={day.format("YYYY-MM-DD")}
            date={day}
            isSelected={day.isSame(selectedDate, "day")}
            onClick={handleDayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarSwipe;
