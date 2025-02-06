import React from "react";

const Button1 = () => {
  return (
    <div>
      <button className="relative overflow-hidden border border-black text-sm text-gray-700 px-3 py-2 rounded-md transition-all duration-300 group">
        <span className="absolute inset-0 bg-blue-800 transform scale-0 origin-bottom-right transition-transform duration-300 group-hover:scale-100"></span>

        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          Click Me
        </span>
      </button>
    </div>
  );
};

export default Button1;
