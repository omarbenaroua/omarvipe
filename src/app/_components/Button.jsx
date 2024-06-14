import React from "react";

function Button(value) {
  return (
    <div>
      <a
        className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring z-index:-2"
        href={value.href} onClick={value.onClick}
      >
        <span className="absolute inset-0 border border-primary group-active:border-primary"></span>
        <span className="block border border-primary bg-primary px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
          {value.title}
        </span>
      </a>
    </div>
  );
}

export default Button