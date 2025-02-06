import React from "react";

const Button4 = () => {
  return (
    <div>
      <button className="relative border border-black text-sm text-gray-700 px-3 py-2 rounded-md transition-all duration-300 group">
        <span className="absolute inset-0 bg-blue-800 opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white px-6 py-4">
          Click Me
        </span>
      </button>
    </div>
  );
};

export default Button4;
