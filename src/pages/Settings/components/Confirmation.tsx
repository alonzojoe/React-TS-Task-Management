import Modal from "../../../components/UI/Modal";
import { IoIosCloseCircle } from "react-icons/io";
import { GoQuestion } from "react-icons/go";

type ConfirmationProps = {
  onToggle: (value: boolean) => void;
  onConfirm: () => void;
};

const Confirmation = ({ onToggle, onConfirm }: ConfirmationProps) => {
  const handleConfirm = () => {
    onToggle(false);
    onConfirm();
  };

  return (
    <Modal>
      <div className="bg-white flex flex-col justify-center rounded-2xl">
        <div className="flex items-center justify-end pt-2 px-3">
          <IoIosCloseCircle
            className="text-darkPink text-4xl"
            onClick={() => onToggle(false)}
          />
        </div>
        <div className="w-96 flex-col flex items-center justify-center space-y-5 p-5">
          <span>
            <GoQuestion className="text-[darkOrange] text-[4rem]" />
          </span>
          <h2 className="text-textPrimary text-2xl">Are you sure?</h2>
          <p className="text-center text-textSecondary">
            Are you certain you want to clear the app data? This action cannot
            be undone.
          </p>
          <div className="pb-5 flex items-center justify-center gap-4">
            <button
              className="sm-btn text-md font-semibold py-1 px-6 w-full bg-red-500 text-white"
              onClick={handleConfirm}
            >
              Yes
            </button>
            <button
              className="sm-btn text-md font-semibold py-1 px-6 w-full bg-slate-500 text-white"
              onClick={() => onToggle(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Confirmation;
