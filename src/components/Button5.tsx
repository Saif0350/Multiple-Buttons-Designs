import React from "react";

const Button5 = () => {
  return (
    <div>
      <button className="relative border border-black text-sm text-gray-700 px-3 py-2 rounded-md transition-all duration-300 group hover:border-blue-800 hover:shadow-lg hover:shadow-gray-800/50">
        <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-800 px-6 py-4">
          Click Me
        </span>
      </button>
    </div>
  );
};

export default Button5;
