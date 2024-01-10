import React from "react";

export default function First({ image, text }: any) {
  return (
    <div className="w-[48%] max-w-[15rem] h-[13rem]  rounded bg-[#294d61] overflow-hidden relative">
      <img src={image} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full h-[50%] flex bg-slate-700/50 p-2">
        <p className="text-2xl font-semibold">{text}</p>
      </div>
    </div>
  );
}
