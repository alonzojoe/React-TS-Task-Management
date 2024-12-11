import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProfileForm from "./components/ProfileForm";
import { type Profile } from "../../types/Profile";
import { getLocalStorageItem } from "../../libs/utils";
import useLocalStorage from "../../hooks/useLocalStorage";
import toast from "react-hot-toast";
import axios from "axios";
const Profile = () => {
  const storedProfile = getLocalStorageItem<Profile>("T_PROFILE");
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useLocalStorage<Profile>("T_PROFILE", {
    firstName: storedProfile!.firstName,
    lastName: storedProfile!.lastName,
    photo: storedProfile!.photo,
  });

  const navigate = useNavigate();

  const divID = JSON.stringify(profile);
  console.log("divID", divID);

  const handleUpload = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "default-preset");

    try {
      const response = await axios.post(
        import.meta.env.VITE_CLOUDINARY_UPLOAD_URL,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data?.secure_url) {
        // console.log("cloudinary response:", response.data.secure_url);
        return response.data.secure_url;
      }
      throw new Error("Missing secure_url in Cloudinary response");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `An error occurred while uploading the file: ${error.message}`
        );
      } else {
        // console.error("Unexpected error:", error);
        throw new Error("An unexpected error occurred during file upload");
      }
    }
  };

  const handleSaveProfile = async (data: Profile) => {
    setIsLoading(true);
    const selectedPhoto = data.photo;
    let photoUrl: string | null = null;

    if (selectedPhoto && selectedPhoto instanceof File) {
      try {
        photoUrl = await handleUpload(selectedPhoto);
      } catch (error) {
        // console.error("Error uploading photo:", error);
        throw new Error(`Error uploading photo: ${error}`);
      }
    }

    setProfile({
      ...data,
      photo: photoUrl ?? storedProfile!.photo,
    });
    setIsLoading(false);
    toast.success("Profile updated successfully!");
    navigate("/home");
  };

  if (!storedProfile) return <Navigate to="" />;
  return (
    <div className="container space-y-5 py-2" id={divID}>
      <ProfileForm
        onSave={handleSaveProfile}
        isUpdate={true}
        storedProfile={storedProfile}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Profile;
