import Card from "../../components/UI/Card";
import Calendar from "../../components/UI/Calendar";
import { useState, ChangeEvent } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Modal from "../../components/UI/Modal";
import useToggle from "../../hooks/useToggle";
import { FormData, DateSelection } from "../../types/Task";
import FormSelect from "../../components/Form/FormSelect";
import FormDate from "../../components/Form/FormDate";
import { OptionBased } from "../../types/Task";
import FormInput from "../../components/Form/FormInput";
import FormText from "../../components/Form/FormText";

import { CATEGORIES, STATUS } from "../../constants/global";

const initialState = {
  category: 1,
  title: "",
  description: "",
  startDate: new Date(),
  endDate: new Date(),
  status: 1,
};

const CreateTask = () => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [isCalendarShow, toggleCalendar] = useToggle(false);
  const [activeField, setActiveField] = useState<DateSelection>("startDate");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectDate = (key: DateSelection, value: Date | undefined) => {
    console.log(value);
    if (value) {
      setFormData((prev) => ({
        ...prev,
        [key]: value,
      }));
    }
    toggleCalendar();
  };

  const selectOption = (alias: string, value: OptionBased) => {
    console.log("selectedCategory", value);
    setFormData((prev) => ({
      ...prev,
      [alias]: value.id,
    }));
  };

  return (
    <div className="container space-y-5  py-2">
      {/* {JSON.stringify(formData)} */}
      {isCalendarShow && (
        <Modal>
          <div className="bg-white flex flex-col justify-center rounded-2xl">
            <div className="flex items-center justify-between pt-2 px-3">
              <h4 className="text-md font-semibold text-textPrimary">
                Select {activeField === "startDate" ? "Start Date" : "End Date"}
              </h4>
              <IoIosCloseCircle
                className="text-darkPink text-4xl"
                onClick={() => toggleCalendar()}
              />
            </div>
            <Calendar
              onSelect={(value) => selectDate(activeField, value)}
              selected={
                activeField === "startDate"
                  ? formData.startDate
                  : formData.endDate
              }
            />
          </div>
        </Modal>
      )}
      <form className="space-y-6">
        <div>
          <FormSelect
            alias="status"
            name="Status"
            options={STATUS}
            getOptionLabel={(status) => status.name}
            getOptionValue={(status) => status.id}
            classColor={(status) => status.classColor}
            classBgColor={(status) => status.classBgColor}
            getOptionIcon={(status) => status.icon}
            value={formData.status}
            onChange={selectOption}
          />
        </div>
        <div>
          <FormSelect
            alias="category"
            name="Task Group"
            options={CATEGORIES}
            getOptionLabel={(category) => category.name}
            getOptionValue={(category) => category.id}
            classColor={(category) => category.classColor}
            classBgColor={(category) => category.classBgColor}
            getOptionIcon={(category) => category.icon}
            value={formData.category}
            onChange={selectOption}
          />
        </div>
        <div>
          <FormInput
            label="Project Name"
            placeholder="Enter Project Name"
            id="title"
            name="title"
            onChange={handleChange}
            value={formData.title}
            invalid={true}
          />
        </div>
        <div>
          <FormText
            label="Description"
            id="description"
            placeholder="Enter Project Description"
            onChange={handleChange}
            value={formData.description}
            invalid={true}
          />
        </div>
        <div>
          <FormDate
            alias="startDate"
            title="Start Date"
            label="Nov 27, 2024"
            onActiveField={setActiveField}
            onToggleField={toggleCalendar}
          />
        </div>
        <div>
          <FormDate
            alias="endDate"
            title="End Date"
            label="Nov 27, 2024"
            onActiveField={setActiveField}
            onToggleField={toggleCalendar}
          />
        </div>
        <div>
          {/* <button className="primary-btn flex justify-between items-center text-2xl w-full">
            <span></span>
            <span>Create Project</span>
            <span></span>
          </button> */}
          <FormSelect
            alias="status"
            name="Status"
            options={STATUS}
            getOptionLabel={(status) => status.name}
            getOptionValue={(status) => status.id}
            classColor={(status) => status.classColor}
            classBgColor={(status) => status.classBgColor}
            getOptionIcon={(status) => status.icon}
            value={formData.status}
            onChange={selectOption}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
