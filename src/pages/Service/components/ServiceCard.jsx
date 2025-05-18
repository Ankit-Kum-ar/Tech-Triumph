import React from "react";

const ServiceCard = ({ title, description, staticSrc, index }) => {
  return (
    <div
    className={`flex flex-col max-w-full md:flex-row ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      } items-center gap-6 mb-6`}
    >
      <div className="w-full max-w-7xl md:w-1/3 flex justify-center">
        <img
          src={staticSrc}
          alt={title}
          className="h-72 object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="w-full md:w-2/3 px-4 md:px-16">
        <h2 className="text-xl md:text-4xl font-semibold mb-2">{title}</h2>
        <p className="text-sm md:text-sm text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;