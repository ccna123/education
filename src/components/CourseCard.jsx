import React from "react";

export const CourseCard = ({ card }) => {
  return (
    <div className="bg-white -z-10 relative rounded-lg text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 cursor-pointer ">
      {card === 1 ? (
        <div className="border-[#FD2370] md:static absolute -top-6 transform left-[30%] rounded-full w-fit p-2 border-r-8 border-l-8 mx-auto">
          <i className="fa-brands fa-html5 lg:text-4xl text-sm px-4 py-2 bg-[#FD2370] rounded-full text-white"></i>
        </div>
      ) : card === 2 ? (
        <div className="border-[#FD2370] md:static absolute -top-6 transform left-[30%] rounded-full w-fit p-2 border-r-8 border-l-8 mx-auto">
          <i className="fa-brands fa-css3-alt lg:text-4xl text-sm px-4 py-2 bg-[#FD2370] rounded-full text-white"></i>
        </div>
      ) : card === 3 ? (
        <div className="border-[#FD2370] md:static absolute -top-6 transform left-[30%] rounded-full w-fit p-2 border-r-8 border-l-8 mx-auto">
          <i className="fa-brands fa-square-js lg:text-4xl text-sm px-3 py-2 bg-[#FD2370] rounded-full text-white"></i>
        </div>
      ) : card === 4 ? (
        <div className="border-[#FD2370] md:static absolute -top-6 transform left-[30%] rounded-full w-fit p-2 border-r-8 border-l-8 mx-auto">
          <i className="fa-solid fa-code lg:text-4xl text-sm px-2 py-2 bg-[#FD2370] rounded-full text-white"></i>
        </div>
      ) : card === 5 ? (
        <div className="border-[#FD2370] md:static absolute -top-6 transform left-[30%] rounded-full w-fit p-2 border-r-8 border-l-8 mx-auto">
          <i className="fa-solid fa-bullhorn lg:text-4xl text-sm px-2 py-2 bg-[#FD2370] rounded-full text-white"></i>
        </div>
      ) : (
        <div className="border-[#FD2370] md:static absolute -top-6 transform left-[30%] rounded-full w-fit p-2 border-r-8 border-l-8 mx-auto">
          <i className="fa-solid fa-paintbrush lg:text-4xl text-sm px-2 py-2 bg-[#FD2370] rounded-full text-white"></i>
        </div>
      )}

      <p className="text-[#FD2370] font-bold lg:text-xl text-md my-4">
        {card === 1
          ? "Trending course"
          : card === 2
          ? "Free Trial"
          : "Certifications"}
      </p>
      <p className="lg:text-xl text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing
      </p>
    </div>
  );
};
