import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { RiStickyNoteFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { PiArrowLeftFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import BackgroundImg from "../assets/images/background.png";

const AppLayout = () => {
  return (
    <>
      <main
        className="h-screen relative"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${BackgroundImg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar>
          <div className="flex items-center justify-between text-2xl">
            <span>
              <Link to="..">
                <PiArrowLeftFill className="text-3xl" />
              </Link>
            </span>
            <span className="font-semibold">Add Project</span>
            <span>
              <FaUser />
            </span>
          </div>
        </Navbar>
        <Outlet />
        <MenuBar />
      </main>
    </>
  );
};

function Navbar({ children }: { children: ReactNode }) {
  return (
    <div className="position-fixed bg-transparent top-0 w-full py-5 px-6">
      {children}
    </div>
  );
}

function MenuBar() {
  const activeClass = `text-bgActive shadow-indigo-700`;
  const inactiveClass = `text-bgInactive`;

  const { pathname } = useLocation();

  console.log("loc", pathname);

  return (
    <section className="fixed bottom-0 w-full bg-[#EEE9FF] py-5 px-10 rounded-3xl">
      <div className="relative flex items-center justify-between">
        <Link to="/home">
          <RiHomeFill
            className={`text-2xl mx-2 ${
              pathname === "/home" ? activeClass : inactiveClass
            }`}
          />
        </Link>
        <Link to="/home/task">
          <FaCalendarDays
            className={`text-2xl mx-2 ${
              pathname === "/home/task" ? activeClass : inactiveClass
            }`}
          />
        </Link>
        <Link
          to="/home/task/create"
          className="absolute border-white border-[5px] left-1/2 -translate-x-1/2 -top-[55px] s-[60px] p-4 bg-primary rounded-full flex items-center justify-center"
        >
          <FiPlus className="text-2xl text-white" />
        </Link>
        <span></span>
        <span className="rotate-180 scale-x-[-1]">
          <RiStickyNoteFill className={`text-2xl mx-2 text-bgInactive`} />
        </span>
        <span>
          <FaUser className={`text-2xl mx-2 text-bgInactive`} />
        </span>
      </div>
    </section>
  );
}

export default AppLayout;
