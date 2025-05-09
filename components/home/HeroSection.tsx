import Link from "next/link";
import React from "react";
import { AnimatedGradientText } from "../ui/animated-gradient-tsx";
import { StarsIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex  flex-col items-center justify-center h-[calc(100vh-100px)]">
      <div>
        <AnimatedGradientText className="px-6">
          <h1 className="text-sm font-bold flex gap-2 items-center">
            Next Generation AI <StarsIcon className="w-4 h-4" />
          </h1>
        </AnimatedGradientText>
      </div>
      <h1 className="lg:text-7xl text-4xl mx-auto text-center font-bold">
        Welcome to SocigenX
      </h1>
      <p className="text-base lg:text-xl mx-auto text-center font-light px-4 text-lime-50">
        The AI-powered platform for creating and managing your social media
        accounts.
      </p>
      <div className="flex flex-row gap-4 mt-4">
        <Link
          href={"/dashboard"}
          className="text-white px-6 py-2 rounded-md bg-lime-500/10 border border-lime-500 hover:bg-transparent transition-all duration-300">
          <h1 className="text-sm font-bold">Get Started</h1>
        </Link>
      </div>
      <div className="inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            {/* <h1 className="shrink-0 text-white text-10xl font-black ">
              Tomorrow
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              is
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              a
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              big
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              day
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              $SOI
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              SocigenX
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Base
            </h2> */}
                        <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Tomorrow is a big day for $SOI
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              Tomorrow
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              is
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              a
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              big
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              day
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              for
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Base 
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Virtuals
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
