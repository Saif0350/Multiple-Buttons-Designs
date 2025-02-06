import React from "react";

const Button12 = () => {
  return (
    <div>
      <button className="relative overflow-hidden border border-black text-sm text-gray-700 px-3 py-2 rounded-md transition-all duration-300 group">
        <span className="absolute inset-0 bg-gray-800 transition-transform scale-100 group-hover:scale-0"></span>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-800 px-6 py-4">
          Click Me
        </span>
      </button>
    </div>
  );
};

export default Button12;
