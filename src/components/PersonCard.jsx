import React from "react";

export const PersonCard = ({ card }) => {
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-fit">
      <div className="p-4 lg:w-[256px]">
        <img
          className="w-full lg:h-[256px] h-[128px] cursor-pointer grayscale hover:grayscale-0"
          src={
            card === 1
              ? require("../assets/imgs/person1.jpg")
              : card === 2
              ? require("../assets/imgs/person2.jpg")
              : card === 3
              ? require("../assets/imgs/person3.jpg")
              : require("../assets/imgs/person4.jpg")
          }
        />
      </div>
      <div className="text-center p-4">
        <h1 className="text-[#FD2370] text-lg font-bold">Someone's Name</h1>
        <p className="text-gray-400 mb-4">I Love Teaching</p>
        <div className="flex gap-4 mx-auto w-fit">
          <i className="fa-brands fa-facebook text-[#FD2370] cursor-pointer hover:text-[#D771FB] duration-150"></i>
          <i className="fa-brands fa-twitter text-[#FD2370] cursor-pointer hover:text-[#D771FB] duration-150"></i>
          <i className="fa-brands fa-instagram text-[#FD2370] cursor-pointer hover:text-[#D771FB] duration-150"></i>
          <i className="fa-brands fa-github text-[#FD2370] cursor-pointer hover:text-[#D771FB] duration-150"></i>
        </div>
      </div>
    </div>
  );
};
