import React from "react";

const Button8 = () => {
  return (
    <div>
      <button className="relative overflow-hidden border border-black text-sm text-gray-700 px-3 py-2 rounded-md transition-all duration-300 group">
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="absolute w-0 h-0 bg-gray-800 rounded-full opacity-50 transition-all duration-500 ease-out group-hover:w-48 group-hover:h-48"></span>
          <span className="absolute w-0 h-0 bg-gray-600 rounded-full opacity-30 transition-all duration-700 ease-out group-hover:w-56 group-hover:h-56"></span>
        </span>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white px-6 py-4">
          Click Me
        </span>
      </button>
    </div>
  );
};

export default Button8;
