import { FormEvent, useRef } from "react";
import FormInput from "../../../components/Form/FormInput";
// import Avatar from "../../../assets/images/avatar.jpg";
import { FaCamera } from "react-icons/fa";
import useFileUpload from "../../../hooks/useFileUpload";
import defaultAvatar from "../../../assets/images/default.png";

const ProfileForm = () => {
  const [selectedFile, previewImg, handleFileUpload] = useFileUpload();
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);

  const selectFile = () => {
    if (inputFileRef.current) {
      inputFileRef.current!.click();
    }
  };

  console.log(selectedFile);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("form submitted");
    console.log({
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      selectedFile: selectedFile,
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex items-center justify-center pt-5">
        <div className="relative">
          <img
            src={previewImg ?? defaultAvatar}
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
          invalid={true}
        />
      </div>
      <div>
        <FormInput
          ref={lastNameRef}
          label="Last Name"
          id="lastname"
          name="lastname"
          placeholder="Enter Last Name"
          invalid={true}
        />
      </div>
      <button
        type="submit"
        className="primary-btn flex justify-between items-center text-2xl w-full"
      >
        <span></span>
        <span>Save Profile</span>
        <span></span>
      </button>
    </form>
  );
};

export default ProfileForm;
