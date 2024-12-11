import { useState } from "react";
import { FaDatabase } from "react-icons/fa6";
import useToggle from "../../hooks/useToggle";
import Confirmation from "./components/Confirmation";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Settings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [show, toggleShow] = useToggle(false);
  const navigate = useNavigate();

  const handleClear = () => {
    setIsLoading(true);
    localStorage.clear();
    setTimeout(() => {
      setIsLoading(false);
      toast.success("App data cleared.");
      navigate("/");
    }, 3000);
  };

  return (
    <>
      {show && <Confirmation onConfirm={handleClear} onToggle={toggleShow} />}
      <div className="container space-y-5 py-10">
        <div className="flex flex-col items-center justify-center space-y-10">
          <span>
            <FaDatabase className="text-[10rem] text-textSecondary" />
          </span>
          <button
            type="button"
            className="primary-btn flex justify-between items-center text-2xl w-full !bg-[#F57CBA] disabled:bg-[lightPink]"
            disabled={isLoading}
            onClick={() => toggleShow()}
          >
            <span></span>
            <span>{isLoading ? "Clearing..." : "Clear data"}</span>
            <span>
              {isLoading && (
                <svg
                  className="animate-spin -ml-1 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Settings;
