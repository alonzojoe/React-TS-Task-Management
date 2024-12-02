import { FormEvent, useRef, useState, useEffect } from "react";
import FormInput from "../../../components/Form/FormInput";
// import Avatar from "../../../assets/images/avatar.jpg";
import { FaCamera } from "react-icons/fa";
import useFileUpload from "../../../hooks/useFileUpload";
import defaultAvatar from "../../../assets/images/default.png";
import { type Profile } from "../../../types/Profile";

type ProfileFormProps = {
  onSave: (data: Profile) => void;
  isLoading: boolean;
  isUpdate?: boolean;
  storedProfile?: Profile;
};

const ProfileForm = ({
  onSave,
  isLoading,
  isUpdate = false,
  storedProfile,
}: ProfileFormProps) => {
  const [selectedFile, previewImg, handleFileUpload] = useFileUpload();
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const [isInvalid, setIsInvalid] = useState({
    firstName: false,
    lastName: false,
  });

  useEffect(() => {
    if (!isUpdate || !storedProfile) return;
    firstNameRef.current!.value = storedProfile.firstName;
    lastNameRef.current!.value = storedProfile.lastName;
  }, [isUpdate, storedProfile]);

  const selectFile = () => {
    if (inputFileRef.current) {
      inputFileRef.current!.click();
    }
  };

  console.log("props stored Profile", storedProfile);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstName = firstNameRef.current?.value.trim() || "";
    const lastName = lastNameRef.current?.value.trim() || "";

    const newInvalidState = {
      firstName: firstName === "",
      lastName: lastName === "",
    };

    setIsInvalid(newInvalidState);

    if (newInvalidState.firstName || newInvalidState.lastName) return;

    onSave({
      lastName,
      firstName,
      photo: selectedFile ? selectedFile : null,
    });
  };

  console.log("img src", storedProfile?.photo);
  const imgSrc = previewImg
    ? previewImg
    : isUpdate && typeof storedProfile?.photo === "string"
    ? storedProfile?.photo
    : defaultAvatar;

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex items-center justify-center pt-5">
        <div className="relative">
          <img
            src={imgSrc}
            alt="profile-picture"
            className="rounded-full h-[120px] w-[120px] object-cover border-2 border-white"
          />
          <div className="absolute top-20 -right-2 rounded-full h-[40px] w-[40px] border-white border-2  bg-gray-400 flex items-center justify-center">
            <FaCamera className="text-lg text-white" onClick={selectFile} />
            <input
              className="hidden"
              type="file"
              ref={inputFileRef}
              onChange={handleFileUpload}
              accept=".jpg, .jpeg, .png"
            />
          </div>
        </div>
      </div>
      <div>
        <FormInput
          ref={firstNameRef}
          label="First Name"
          id="firstname"
          name="firstname"
          placeholder="Enter First Name"
          invalid={isInvalid.firstName}
        />
      </div>
      <div>
        <FormInput
          ref={lastNameRef}
          label="Last Name"
          id="lastname"
          name="lastname"
          placeholder="Enter Last Name"
          invalid={isInvalid.lastName}
        />
      </div>
      <button
        type="submit"
        className="primary-btn flex justify-between items-center text-2xl w-full"
        disabled={isLoading}
      >
        <span></span>
        <span>{isLoading ? "Saving..." : "Save Profile"}</span>
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
    </form>
  );
};

export default ProfileForm;
