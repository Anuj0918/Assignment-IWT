import React from 'react';
import GroupImage from "../../assets/Client-First - IMAGES/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.svg"
const Story = () => {
  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="w-2/3">
        <img 
          src={GroupImage} 
          alt="Friends enjoying a view" 
          className="w-full h-[500px] object-cover"
        />
      </div>
      <div className="absolute top-10 right-0 bg-white w-1/2 p-12 shadow-lg">
        <h3 className="text-gray-600 text-sm font-semibold mb-4 uppercase">
          WHY WE STARTED
        </h3>
        <h2 className="text-3xl font-bold mb-6 leading-tight">
          It started out as a simple idea and evolved into our passion
        </h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <button className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 transition duration-300">
        <a href="/AboutSection" className=" ">
        Discover our story
          </a>
          
        </button>
      </div>
    </div>
  );
};

export default Story;