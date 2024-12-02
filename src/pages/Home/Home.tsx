import { Navigate } from "react-router-dom";
import BannerImg from "../../assets/images/home.png";
import Background from "../../assets/images/background.png";
import { PiArrowRightFill } from "react-icons/pi";
// import { useNavigate } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import Modal from "../../components/UI/Modal";
import ProfileForm from "./../Profile/components/ProfileForm";
import useLocalStorage from "../../hooks/useLocalStorage";
import { type Profile } from "../../types/Profile";
import axios from "axios";
import toast from "react-hot-toast";

const DEFAULT_PROFILE = null;
// {
//   lastName: "Joenell",
//   firstName: "Alonzo",
//   photo:
//     "https://avatars.githubusercontent.com/u/72643848?s=400&u=87b13364095f47cbe450e0c86f97eebd78edb6d9&v=4",
// };

const Home = () => {
  const [isLoading, setIsLoading] = useToggle(false);
  const [showModal, toggleShowModal] = useToggle(false);
  const [profile, setProfile] = useLocalStorage<Profile | null>(
    "T_PROFILE",
    DEFAULT_PROFILE
  );

  console.log("profile", profile);

  if (profile) return <Navigate to="/home" />;

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
        console.log("cloudinary response:", response.data.secure_url);
        return response.data.secure_url;
      }
      throw new Error("Missing secure_url in Cloudinary response");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `An error occurred while uploading the file: ${error.message}`
        );
      } else {
        console.error("Unexpected error:", error);
        throw new Error("An unexpected error occurred during file upload");
      }
    }
  };
  const handleCreateProfile = async (data: Profile) => {
    setIsLoading(true);
    const selectedPhoto = data.photo;
    let photoUrl: string | null = null;

    if (selectedPhoto && selectedPhoto instanceof File) {
      try {
        photoUrl = await handleUpload(selectedPhoto);
      } catch (error) {
        console.error("Error uploading photo:", error);
      }
    }

    setProfile({
      ...data,
      photo: photoUrl,
    });
    setIsLoading(false);
    toast.success("Profile created successfully!");
  };

  return (
    <>
      {showModal && (
        <Modal>
          <div className="bg-white rounded-2xl w-[90vw]">
            <div className="px-5 pb-14 pt-8">
              <h2 className="text-textPrimary font-bold text-2xl py-2 text-center">
                Create Profile
              </h2>
              <ProfileForm onSave={handleCreateProfile} isLoading={isLoading} />
            </div>
          </div>
        </Modal>
      )}
      <section
        className="overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center pt-14 md:pt-8">
            <img src={BannerImg} alt="Banner-Img" />
          </div>
          <div className="flex flex-col justify-center py-14">
            <div className="text-center md:text-right space-y-10 px-4">
              <h1 className="text-textPrimary text-3xl lg:text-6xl font-bold !leading-snug">
                Task Management & To-Do List
              </h1>
              <p className="text-textSecondary text-md md:-text-2xl">
                This productive tool is designed to help you better manage your
                task project-wise conveniently!
              </p>
              <div>
                <button
                  className="primary-btn flex justify-between items-center text-2xl w-full"
                  onClick={() => toggleShowModal(true)}
                >
                  <span></span>
                  <span>Let&apos;s Start</span>
                  <span>
                    <PiArrowRightFill></PiArrowRightFill>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
