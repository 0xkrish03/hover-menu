import SeerviceLinks from "@/components/ServiceLinks";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full max-w-[1000px] mx-auto px-12">
        <h1 className="text-5xl text-white text-center mb-24">Our Services</h1>
        <SeerviceLinks />
      </div>
    </div>
  );
};

export default page;
