import Card from "../UI/Card";
import { FaCalendarDays } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { DateSelection } from "../../types/Task";

type FormDateProps = {
  alias: DateSelection;
  title: string;
  label: string;
  onActiveField: React.Dispatch<React.SetStateAction<DateSelection>>;
  onToggleField: (value: boolean) => void;
};

const FormDate = ({
  alias,
  title,
  label,
  onActiveField,
  onToggleField,
}: FormDateProps) => {
  return (
    <Card background="cardBg" shrink="shrink-0" width="w-[full]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="p-1 rounded-lg">
            <FaCalendarDays className="text-xl text-primary" />
          </span>
          <div>
            <span className="text-textSecondary font-semibold text-xs">
              {title}
            </span>
            <h4 className="text-textPrimary text-md font-bold mt-0">{label}</h4>
          </div>
        </div>
        <div>
          <MdDateRange
            className="text-textPrimary text-2xl"
            onClick={() => {
              onActiveField(alias);
              onToggleField(true);
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default FormDate;
