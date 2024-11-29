import Card from "../../components/UI/Card";
import Calendar from "../../components/UI/Calendar";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { useState, ChangeEvent } from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import Modal from "../../components/UI/Modal";
import useToggle from "../../hooks/useToggle";
import { FormData, DateSelection } from "../../types/Task";

const initialState = {
  category: "",
  title: "",
  description: "",
  startDate: new Date(),
  endDate: new Date(),
};

const CreateTask = () => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [toggle, setToggle] = useState(false);
  const [isCalendarShow, toggleCalendar] = useToggle(false);
  const [activeField, setActiveField] = useState<DateSelection>("startDate");
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
              selected={formData.startDate}
            />
          </div>
        </Modal>
      )}
      <form className="space-y-6">
        <div>
          <Card background="cardBg" shrink="shrink-0" width="w-[full]">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="bg-lightPink p-1 rounded-lg">
                    <IoBagHandleSharp className="text-lg text-darkPink" />
                  </span>
                  <div>
                    <span className="text-textSecondary font-semibold text-xs">
                      Task Group
                    </span>
                    <h4 className="text-textPrimary text-md font-bold mt-0">
                      Work
                    </h4>
                  </div>
                </div>
                <div>
                  {toggle ? (
                    <FaCaretUp
                      className="text-textPrimary text-2xl"
                      onClick={() => setToggle((prev) => !prev)}
                    />
                  ) : (
                    <FaCaretDown
                      className="text-textPrimary text-2xl"
                      onClick={() => setToggle((prev) => !prev)}
                    />
                  )}
                </div>
              </div>
              <div
                className={`absolute rounded-lg bg-white border-[#EDEDED] border-x-2 border-b-2 w-full p-3 transition-all duration-300 ease-in-out opacity-1 ${
                  toggle
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                }`}
              >
                <div className="overflow-x-auto h-60 md:h-80">
                  <ul className="space-y-2">
                    {list.map((item) => (
                      <li key={item}>
                        <div className="flex items-center gap-3 hover:bg-[#EDEDED] p-3 rounded-lg border-b borer-b-[#EDEDED]">
                          <span className="bg-lightPink p-1 rounded-lg">
                            <IoBagHandleSharp className="text-lg text-darkPink" />
                          </span>
                          <div>
                            <span className="text-textSecondary text-xs">
                              Task Group
                            </span>
                            <h4 className="text-textPrimary text-md font-bold mt-0">
                              Work
                            </h4>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card background="cardBg" shrink="shrink-0" width="w-[full]">
            <div>
              <label
                htmlFor="title"
                className="text-textSecondary font-semibold text-xs block"
              >
                Project Name
              </label>
              <input
                onChange={handleChange}
                value={formData.title}
                type="text"
                className="py-1 text-textPrimary px-0 w-full font-semibold ring-0 border-0 outline-none placeholder:opacity-30"
                id="title"
                name="title"
                placeholder="Enter Project Name"
              />
            </div>
          </Card>
        </div>
        <div>
          <Card background="cardBg" shrink="shrink-0" width="w-[full]">
            <div>
              <label
                htmlFor="title"
                className="text-textSecondary font-semibold text-xs block"
              >
                Description
              </label>
              <textarea
                onChange={handleChange}
                value={formData.description}
                name="description"
                className="py-3 text-textPrimary px-0 w-full text-sm font-semibold ring-0 border-0 outline-none placeholder:opacity-30 h-24"
                id="description"
                placeholder="Enter Project Description"
              />
            </div>
          </Card>
        </div>
        <div>
          <Card background="cardBg" shrink="shrink-0" width="w-[full]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="p-1 rounded-lg">
                  <FaCalendarDays className="text-xl text-primary" />
                </span>
                <div>
                  <span className="text-textSecondary font-semibold text-xs">
                    Start Date
                  </span>
                  <h4 className="text-textPrimary text-md font-bold mt-0">
                    Nov 27, 2024
                  </h4>
                </div>
              </div>
              <div>
                <MdDateRange
                  className="text-textPrimary text-2xl"
                  onClick={() => {
                    setActiveField("startDate");
                    toggleCalendar();
                  }}
                />
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card background="cardBg" shrink="shrink-0" width="w-[full]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="p-1 rounded-lg">
                  <FaCalendarDays className="text-xl text-primary" />
                </span>
                <div>
                  <span className="text-textSecondary font-semibold text-xs">
                    End Date
                  </span>
                  <h4 className="text-textPrimary text-md font-bold mt-0">
                    Nov 29, 2024
                  </h4>
                </div>
              </div>
              <div>
                <MdDateRange
                  className="text-textPrimary text-2xl"
                  onClick={() => {
                    setActiveField("endDate");
                    toggleCalendar();
                  }}
                />
              </div>
            </div>
          </Card>
        </div>
        <div>
          <button className="primary-btn flex justify-between items-center text-2xl w-full">
            <span></span>
            <span>Create Project</span>
            <span></span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
