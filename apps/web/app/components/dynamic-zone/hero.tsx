import React from "react";

export const Hero = ({
  heading,
  sub_heading,
  CTAs,
  locale,
}: {
  heading: string;
  sub_heading: string;
  CTAs: any[];
  locale: string;
}) => {
  return (
    <div className="outline-white outline-2 h-screen overflow-hidden relative flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">{heading}</h1>
      <h2 className="text-2xl font-semibold">{sub_heading}</h2>
      <div className="flex space-x-4">
        {CTAs.map((cta, index) => (
          <button key={index} className="btn">
            {cta}
          </button>
        ))}
      </div>
    </div>
  );
};
