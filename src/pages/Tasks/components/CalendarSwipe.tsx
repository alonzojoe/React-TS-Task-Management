import { useState, useEffect } from "react";
import moment, { Moment } from "moment";
import CalendarDays from "./CalendarDays";

const CalendarSwipe = () => {
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
        {/* <Card padding="p-3" background="cardBg" width="w-[full]">
          <div className="flex flex-col items-center gap-2 px-4">
            <h4>Nov</h4>
            <h1 className="text-2xl font-bold">25</h1>
            <h4>MOn</h4>
          </div>
        </Card>
        <Card padding="p-3" background="cardBg" width="w-[full]">
          <div className="flex flex-col items-center gap-2 px-4">
            <h4>Nov</h4>
            <h1 className="text-2xl font-bold">26</h1>
            <h4>Tue</h4>
          </div>
        </Card>
        <Card padding="p-3" background="bg-primary" width="w-[full]">
          <div className="flex flex-col items-center gap-2 px-4 text-white">
            <h4>Nov</h4>
            <h1 className="text-2xl font-bold">27</h1>
            <h4>Wed</h4>
          </div>
        </Card>
        <Card padding="p-3" background="cardBg" width="w-[full]">
          <div className="flex flex-col items-center gap-2 px-4">
            <h4>Nov</h4>
            <h1 className="text-2xl font-bold">28</h1>
            <h4>Thu</h4>
          </div>
        </Card>
        <Card padding="p-3" background="cardBg" width="w-[full]">
          <div className="flex flex-col items-center gap-2 px-4">
            <h4>Nov</h4>
            <h1 className="text-2xl font-bold">29</h1>
            <h4>Fri</h4>
          </div>
        </Card> */}
      </div>
    </div>
  );
};

export default CalendarSwipe;
