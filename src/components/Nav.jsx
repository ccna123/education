import React, { useEffect, useState } from "react";

export const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 768) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <div>
      <div className="flex justify-center lg:justify-normal w-full p-4">
        <div className="z-50 flex fixed w-full items-center justify-between p-2 bg-[#FD2370] lg:rounded-full lg:w-[50%]">
          <div className="flex gap-2 items-center ml-4">
            <i className="fa-solid fa-graduation-cap text-white text-2xl"></i>
          </div>
          <nav className="mr-4 lg:block hidden">
            <ul className="flex gap-10">
              <li className="cursor-pointer text-white hover:text-slate-400 duration-150 text-lg">
                Home
              </li>
              <li className="cursor-pointer text-white hover:text-slate-400 duration-150 text-lg">
                About
              </li>
              <li className="cursor-pointer text-white hover:text-slate-400 duration-150 text-lg">
                Teachers
              </li>
              <li className="cursor-pointer text-white hover:text-slate-400 duration-150 text-lg">
                Course
              </li>
              <li className="cursor-pointer text-white hover:text-slate-400 duration-150 text-lg">
                Review
              </li>
              <li className="cursor-pointer text-white hover:text-slate-400 duration-150 text-lg">
                Contact
              </li>
            </ul>
          </nav>

          <button className="mr-10" onClick={handleOpenMenu}>
            <i className="text-white fa-solid fa-bars lg:hidden block"></i>
          </button>
        </div>
      </div>
      {/* dropdown nav */}
      {openMenu && (
        <div
          className="px-8 z-50"
          style={{
            position: "fixed",
            width: "100%",
            maxWidth: "100vw",
            top: "64px",
            left: "0",
          }}
        >
          <nav className="bg-white rounded-xl p-4 w-full mt-8">
            <ul>
              <li className="text-xl p-4 text-center text-[#FD2370] hover:text-[#D771FB] hover:bg-slate-100 border-b-2">
                Home
              </li>
              <li className="text-xl p-4 text-center text-[#FD2370] hover:text-[#D771FB] hover:bg-slate-100 border-b-2">
                About
              </li>
              <li className="text-xl p-4 text-center text-[#FD2370] hover:text-[#D771FB] hover:bg-slate-100 border-b-2">
                Teachers
              </li>
              <li className="text-xl p-4 text-center text-[#FD2370] hover:text-[#D771FB] hover:bg-slate-100 border-b-2">
                Course
              </li>
              <li className="text-xl p-4 text-center text-[#FD2370] hover:text-[#D771FB] hover:bg-slate-100 border-b-2">
                Review
              </li>
              <li className="text-xl p-4 text-center text-[#FD2370] hover:text-[#D771FB] hover:bg-slate-100">
                Contact
              </li>
            </ul>
          </nav>
        </div>
      )}
      {/* end dropdown nav */}
    </div>
  );
};
