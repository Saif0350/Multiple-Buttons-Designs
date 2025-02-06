import React from "react";

const Button3 = () => {
  return (
    <div>
      <button className="relative overflow-hidden border border-black text-sm text-gray-700 px-3 py-2 rounded-md transition-all duration-300 group">
        <span className="absolute left-0 top-0 w-full h-full bg-blue-800 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white px-6 py-4">
          Click Me
        </span>
      </button>
    </div>
  );
};

export default Button3;
