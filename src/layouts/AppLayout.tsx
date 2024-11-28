import { ReactNode, useRef, forwardRef, useEffect, useState } from "react";
import { useLocation, Outlet, Link, useNavigate } from "react-router-dom";

import { RiHomeFill } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { RiStickyNoteFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { PiArrowLeftFill } from "react-icons/pi";

import BackgroundImg from "../assets/images/background.png";

const AppLayout = () => {
  const navigate = useNavigate();
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current!.offsetHeight);
      }
    };
    getNavbarHeight();
    window.addEventListener("resize", getNavbarHeight);

    return () => {
      window.removeEventListener("resize", getNavbarHeight);
    };
  }, []);

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
        <Navbar ref={navbarRef}>
          <div className="flex items-center justify-between text-2xl">
            <span onClick={() => navigate(-1)}>
              <PiArrowLeftFill className="text-3xl" />
            </span>
            <span className="font-semibold">Add Project</span>
            <span>
              <FaUser />
            </span>
          </div>
        </Navbar>
        <div className={`pt-[${navbarHeight}]`}>
          <Outlet />
        </div>
        <MenuBar />
      </main>
    </>
  );
};
type NavbarProps = {
  children: ReactNode;
};

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="fixed top-0 w-full py-5 px-6 shadow-md z-50"
      style={{
        backgroundSize: "cover",
        backgroundColor: "white",
        backgroundPosition: "center",
        backgroundImage: `url(${BackgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      {children}
    </div>
  );
});

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
