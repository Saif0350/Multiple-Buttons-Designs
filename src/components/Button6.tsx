import React from "react";

const Button6 = () => {
  return (
    <div>
      <button className="relative overflow-hidden border border-black text-sm text-gray-700 px-3 py-2 rounded-md transition-all duration-300 group">
        <span className="absolute w-0 h-0 bg-blue-800 rounded-full opacity-50 transition-all duration-500 group-hover:w-56 group-hover:h-56"></span>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white px-6 py-4">
          Click Me
        </span>
      </button>
    </div>
  );
};

export default Button6;
