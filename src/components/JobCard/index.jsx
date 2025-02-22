import React from "react";
import dayjs from "dayjs";

const Card = () => {
  const skills = ["JavaScript", "React", "Node.js"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff("2025-02-01", "day");
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-300 rounded-md border border-black shadow-lg hover: border-blue-600 hover:traslate-y-1 hover:scale-103">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-lg font-semibold">Frontend Developer - Amazon</h1>
          <p> Full Time &#x2022; Fresher &#x2022; In Office</p>
          <div className="flex items-center gap-2">
            {skills.map((skill) => (
              <p key={skill} className="text-gray-600 py-1 px-2 rounded-md border border-black">{skill}</p> 
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-grey-600">Posted {diffInDays} days ago</p>
          <a href="">
          <button className="text-blue-600 border border-blue-600 px-10 py-2 rounded-md">Apply</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
