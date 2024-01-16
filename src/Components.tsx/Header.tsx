import React from "react";
import logo from "../../public/assets/redberry.png";

export default function Header() {
  return (
    <div className="bg-[#E4E3EB] h-[80px] flex items-center px-[76px] justify-between">
      <img src={logo} alt="redberry logo image" />
      <button className="bg-[#5D37F3] w-[93px] h-[40px] rounded-[8px] text-[#FFF] text-[14px] font-medium">
        შესვლა
      </button>
    </div>
  );
}
