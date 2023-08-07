import React, { useState } from "react";

export const StudentCard = ({ card }) => {
  const [rating] = useState(Math.floor(Math.random() * 5));
  return (
    <div className="bg-white -z-50 relative rounded-lg text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 cursor-pointer hover:scale-105 duration-150">
      {card === 1 ? (
        <div className="flex justify-cente absolute border-8 border-l-[#D771FB] border-b-[#D771FB] border-r-[#FD2370] border-t-[#FD2370] rounded-full -top-10 left-1/2 transform -translate-x-1/2">
          <img
            className="rounded-full w-14 h-14 object-cover"
            src={require("../assets/imgs/student1.jpg")}
          />
        </div>
      ) : card === 2 ? (
        <div className="flex justify-cente absolute border-8 border-l-[#D771FB] border-b-[#D771FB] border-r-[#FD2370] border-t-[#FD2370] rounded-full -top-10 left-1/2 transform -translate-x-1/2">
          <img
            className="rounded-full w-14 h-14 object-cover mx-auto"
            src={require("../assets/imgs/student2.jpg")}
          />
        </div>
      ) : (
        <div className="flex justify-cente absolute border-8 border-l-[#D771FB] border-b-[#D771FB] border-r-[#FD2370] border-t-[#FD2370] rounded-full -top-10 left-1/2 transform -translate-x-1/2">
          <img
            className="rounded-full w-14 h-14 object-cover mx-auto"
            src={require("../assets/imgs/student3.jpg")}
          />
        </div>
      )}

      <p className="text-[#FD2370] font-bold text-xl my-4">Student's Name</p>
      <p className="text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing
      </p>
      <div className="flex gap-2 justify-center mt-4">
        {Array(5)
          .fill(null)
          .map((star, i) => {
            const ratingVal = i + 1;
            return (
              <label key={i}>
                <input className="hidden" type="radio" value={ratingVal} />
                <i
                  key={i}
                  className={`fas fa-star ${
                    ratingVal <= rating ? "text-[#D771FB]" : ""
                  } `}
                ></i>
              </label>
            );
          })}
      </div>
    </div>
  );
};
