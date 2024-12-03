import React, { ComponentType } from "react";
import useToggle from "../../hooks/useToggle";
import Card from "../UI/Card";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { OptionBased } from "../../types/Task";

type FormSelectProps<T> = {
  alias: string;
  name: string;
  options: T[];
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string | number;
  getOptionIcon: (option: T) => ComponentType<{ className: string }>;
  classColor: (option: T) => string;
  classBgColor: (option: T) => string;
  value: T | number;
  onChange: (alias: string, value: OptionBased) => void;
};

const FormSelect = <T extends OptionBased>({
  alias,
  name,
  options,
  getOptionLabel,
  getOptionIcon,
  classColor,
  classBgColor,
  value,
  onChange,
}: FormSelectProps<T>) => {
  const [isShow, toggleDropdown] = useToggle(false);

  const selectedOption = options.find((option) => option.id === value);
  return (
    <Card background="cardBg" shrink="shrink-0" width="w-[full]">
      <div className="relative">
        <div className="flex items-center justify-between">
          {selectedOption && (
            <div className="flex items-center gap-3">
              <span
                className={`${selectedOption!.classBgColor} p-1 rounded-lg`}
              >
                {React.createElement(getOptionIcon(selectedOption), {
                  className: `text-lg ${selectedOption!.classColor}`,
                })}
              </span>
              <div>
                <span className="text-textSecondary font-semibold text-xs">
                  {name}
                </span>
                <h4 className="text-textPrimary text-md font-bold mt-0">
                  {selectedOption!.name}
                </h4>
              </div>
            </div>
          )}
          <div>
            {isShow ? (
              <FaCaretUp
                className="text-textPrimary text-2xl"
                onClick={() => toggleDropdown()}
              />
            ) : (
              <FaCaretDown
                className="text-textPrimary text-2xl"
                onClick={() => toggleDropdown()}
              />
            )}
          </div>
        </div>
        <div
          className={`absolute z-10 rounded-lg bg-white border-[#EDEDED] border-x-2 border-b-2 w-full p-3 transition-all duration-300 ease-in-out opacity-1 ${
            isShow
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
          }`}
        >
          <div className="overflow-x-auto h-50 z-50">
            <ul className="space-y-2">
              {options.map((option, index) => (
                <li key={index}>
                  <div
                    className={`flex items-center gap-3 ${
                      option.id === value ? "bg-[#EDEDED]" : ""
                    } hover:bg-[#EDEDED] p-3 rounded-lg border-b borer-b-[#EDEDED]`}
                    onClick={() => {
                      onChange(alias, option);
                      toggleDropdown();
                    }}
                  >
                    <span className={`${classBgColor(option)} p-1 rounded-lg`}>
                      {React.createElement(getOptionIcon(option), {
                        className: `text-lg ${classColor(option)}`,
                      })}
                    </span>

                    <div>
                      {/* <span className="text-textSecondary text-xs">
                        Task Group
                      </span> */}
                      <h4 className="text-textPrimary text-md font-bold mt-0">
                        {getOptionLabel(option)}
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
  );
};

export default FormSelect;
