import Card from "../UI/Card";
import { forwardRef } from "react";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <Card background="cardBg" shrink="shrink-0" width="w-[full]">
        <div>
          <label
            htmlFor={rest.id}
            className="text-textSecondary font-semibold text-xs block"
          >
            {label}
          </label>
          <input
            ref={ref}
            type="text"
            className="py-1 text-textPrimary px-0 w-full font-semibold ring-0 border-0 outline-none placeholder:opacity-30"
            {...rest}
          />
        </div>
      </Card>
    );
  }
);

export default FormInput;
