import React from "react";

const Button9 = () => {
  return (
    <div>
      <button className="relative overflow-hidden border border-black text-sm text-gray-700 px-3 py-2 rounded-md transition-all duration-300 group">
        <span className="absolute left-0 top-0 w-full h-0 bg-gray-800 opacity-50 transition-all duration-500 ease-out group-hover:h-full"></span>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white px-6 py-2">
          Click Me
        </span>
      </button>
    </div>
  );
};

export default Button9;
