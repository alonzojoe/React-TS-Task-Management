import { ReactNode, useRef, forwardRef, useEffect, useState, JSX } from "react";
import {
  useLocation,
  Outlet,
  Link,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { RiHomeFill } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosListBox } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { PiArrowLeftFill } from "react-icons/pi";
// import { IoIosSave } from "react-icons/io";
import BackgroundImg from "../assets/images/background.png";
import DefaultAvatar from "../assets/images/default.png";
import { type Profile } from "../types/Profile";
import { getLocalStorageItem } from "../libs/utils";

const APPTITLE: {
  id: number;
  title: string;
  path: string;
}[] = [
  { id: 1, title: "Add Project", path: "/home/task/create" },
  { id: 2, title: "Today's Tasks", path: "/home/task" },
  { id: 3, title: "Task List", path: "/home/task/lists" },
  { id: 4, title: "Profile", path: "/home/profile" },
  { id: 5, title: "Dashboard", path: "/home" },
];

const AppLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);
  const storedProfile = getLocalStorageItem<Profile>("T_PROFILE");

  useEffect(() => {
    const getNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current!.offsetHeight);
      }
    };
    getNavbarHeight();
    window.addEventListener("resize", getNavbarHeight);
    console.log("useEffect runs");
    return () => {
      window.removeEventListener("resize", getNavbarHeight);
    };
  }, [pathname]);

  const title = APPTITLE.find((item) => item.path === pathname)!.title ?? "";

  const Header: JSX.Element = (
    <div className="flex items-center justify-between text-2xl">
      <span onClick={() => navigate(-1)}>
        <PiArrowLeftFill className="text-3xl" />
      </span>
      <span className="font-bold text-textPrimary">{title}</span>
      <span>
        <FaBell />
      </span>
    </div>
  );
  if (!storedProfile) return <Navigate to="/" />;
  const fullName = `${storedProfile.firstName} ${storedProfile.lastName}`;
  const storedImage =
    typeof storedProfile.photo === "string"
      ? storedProfile.photo
      : DefaultAvatar;

  const Profile: JSX.Element = (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div>
          <img
            src={storedImage}
            alt="avatar"
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
        </div>
        <div>
          <span className="text-textSecondary font-bold text-md">Hello!</span>
          <h4 className="text-textPrimary text-xl font-bold mb-0 !leading-none">
            {fullName}
          </h4>
        </div>
      </div>
      <span>
        <FaBell className="text-2xl" />
      </span>
    </div>
  );

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
        <Navbar path={pathname} ref={navbarRef}>
          <>{pathname === "/home" ? Profile : Header}</>
        </Navbar>
        <div style={{ paddingTop: `${navbarHeight}px` }}>
          <Outlet />
        </div>
        <MenuBar />
      </main>
    </>
  );
};
type NavbarProps = {
  children: ReactNode;
  path: string;
};

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  ({ children, path }, ref) => {
    return (
      <div
        ref={ref}
        className={`fixed top-0 w-full py-5 px-6 ${
          path !== "/home" ? "shadow-md" : ""
        } z-50`}
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
  }
);

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
        <Link to="/home/task/lists">
          <IoIosListBox
            className={`text-2xl mx-2 ${
              pathname === "/home/task/lists" ? activeClass : inactiveClass
            }`}
          />
        </Link>
        <Link to="/home/profile">
          <FaUser
            className={`text-2xl mx-2 ${
              pathname === "/home/profile" ? activeClass : inactiveClass
            }`}
          />
        </Link>
      </div>
    </section>
  );
}

export default AppLayout;
