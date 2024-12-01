import { BsFillExclamationCircleFill } from "react-icons/bs";
import Card from "../UI/Card";
import { forwardRef } from "react";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  invalid?: boolean;
};

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, invalid = false, ...rest }, ref) => {
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
          <input
            ref={ref}
            type="text"
            className={`py-1 text-textPrimary text-lg px-0 w-full font-semibold ring-0 border-0 outline-none placeholder:opacity-30 ${invalidClass.inputBorder}`}
            {...rest}
          />
          {invalid && (
            <span className="absolute right-0 bottom-3">
              <BsFillExclamationCircleFill className="text-red-500 text-xl" />
            </span>
          )}
        </div>
      </Card>
    );
  }
);

export default FormInput;
