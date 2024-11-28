import React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

type CalendarProps = {
  onSelect: React.Dispatch<React.SetStateAction<Date | undefined>>;
  selected: Date | undefined;
};

const Calendar = ({ onSelect, selected }: CalendarProps) => {
  const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      classNames={{
        today: `border-primary`, // Add a border to today's date
        selected: `bg-primary rounded-full text-white`, // Highlight the selected day
        root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
        chevron: `${defaultClassNames.chevron} fill-primary`, // Change the color of the chevron
      }}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
};

export default Calendar;
