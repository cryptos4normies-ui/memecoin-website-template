import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-black h-[50vh] md:h-dvh w-full">
      <div className="absolute inset-0 bg-[url(/hero.png)] bg-center bg-cover md:bg-cover bg-contain bg-no-repeat"></div>
    </div>
  );
};

export default Hero;
