import React from "react";

const Button11 = () => {
  return (
    <div>
      <button className="relative overflow-hidden border border-black text-sm text-gray-700 px-3 py-2 rounded-md transition-all duration-300 group hover:shadow-md hover:shadow-gray-800">
        <span className="absolute left-0 top-0 w-full h-full bg-gray-800 transform scale-0 transition-transform duration-500 group-hover:scale-100 opacity-50"></span>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white px-6 py-4">
          Click Me
        </span>
      </button>
    </div>
  );
};

export default Button11;
