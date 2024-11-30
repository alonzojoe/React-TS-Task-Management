import BannerImg from "../../assets/images/home.png";
import Background from "../../assets/images/background.png";
import { PiArrowRightFill } from "react-icons/pi";
// import { useNavigate } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import Modal from "../../components/UI/Modal";
import ProfileForm from "./../Profile/components/ProfileForm";

const Home = () => {
  const [showModal, toggleShowModal] = useToggle(false);
  // const navigate = useNavigate();

  return (
    <>
      {showModal && (
        <Modal>
          <div className="bg-white rounded-2xl w-[90vw]">
            <div className="px-5 pb-14 pt-8">
              <h2 className="text-textPrimary font-bold text-2xl py-2 text-center">
                Create Profile
              </h2>
              <ProfileForm />
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
