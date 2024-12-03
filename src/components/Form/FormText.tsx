import React from "react";
import Card from "../UI/Card";
import { BsFillExclamationCircleFill } from "react-icons/bs";
type FormTextProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  invalid: boolean;
  height?: string;
};

const FormText = ({
  label,
  invalid,
  height = "h-24",
  ...rest
}: FormTextProps) => {
  const invalidClass = {
    shake: invalid ? "animate-[shake_0.4s_ease-in-out]" : "",
    textColor: invalid ? "text-red-500" : "textSecondary",
    inputBorder: invalid ? "border-b-2 border-red-400" : "",
  };
  return (
    <Card background="cardBg" shrink="shrink-0" width="w-[full]">
      <div className={`relative ${invalidClass.shake}`}>
        <label
          htmlFor={rest.id}
          className={`${invalidClass.textColor} font-semibold text-xs block`}
        >
          {label}
        </label>
        <textarea
          className={`py-3 text-textPrimary px-0 w-full text-sm font-semibold ring-0 border-0 outline-none placeholder:opacity-30 ${invalidClass.inputBorder} ${height}`}
          {...rest}
        />
        {invalid && (
          <span className="absolute right-0 bottom-4">
            <BsFillExclamationCircleFill className="text-red-500 text-xl" />
          </span>
        )}
      </div>
    </Card>
  );
};

export default FormText;
