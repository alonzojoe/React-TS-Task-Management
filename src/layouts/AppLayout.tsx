import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { RiStickyNoteFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { PiArrowLeftFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <main className="h-screen bg-white relative">
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
  return (
    <section className="fixed bottom-0 w-full bg-lightPrimary py-5 px-10 rounded-3xl">
      <div className="relative flex items-center justify-between text-primary">
        <span>
          <RiHomeFill className="text-2xl mx-2" />
        </span>
        <span>
          <FaCalendarDays className="text-2xl mx-2" />
        </span>
        <span className="absolute border-white border-[5px] left-1/2 -translate-x-1/2 -top-[55px] s-[60px] p-4 bg-primary rounded-full flex items-center justify-center">
          <FiPlus className="text-2xl text-white" />
        </span>
        <span></span>
        <span className="rotate-180 scale-x-[-1]">
          <RiStickyNoteFill className="text-2xl mx-2" />
        </span>
        <span>
          <FaUser className="text-2xl mx-2" />
        </span>
      </div>
    </section>
  );
}

export default AppLayout;
