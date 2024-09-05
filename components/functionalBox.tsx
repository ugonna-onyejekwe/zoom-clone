import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type FunctionBoxType = {
  icon: ReactNode;
  heading: string;
  subtxt: string;
  bg: string;
};

const FunctionBox = ({ icon, heading, subtxt, bg }: FunctionBoxType) => {
  console.log(bg, subtxt);
  return (
    <div
      className={cn(
        `p-[10px] rounded h-[200px] flex justify-between flex-col cursor-pointer `,
        `${bg}`
      )}
    >
      <div className="glassmorphism p-[10px] text-[15px] text-white-1 w-fit rounded ">
        {icon}
      </div>

      <div className="">
        <h3 className="text-white-1  capitalize text-[15px] font-[500px]">
          {heading}
        </h3>

        <p className="mt-[5px] text-white-2 text-[13px]">{subtxt}</p>
      </div>
    </div>
  );
};

export default FunctionBox;
