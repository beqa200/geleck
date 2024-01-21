import logo from "../../public/images/redberry.png";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";
import { useEffect, useState } from "react";

export default function Header() {
  const context = Context();
  const naviagte = useNavigate();
  const [choose, setChoose] = useState<string>("");

  useEffect(() => {
    console.log(context?.hidden.toString());
    let chose = localStorage.getItem("item");
    if (chose) {
      setChoose(chose);
    }
  }, [context?.hidden, localStorage.getItem("item")]);

  return (
    <div
      className={`bg-[#FFFFFF] h-[80px] flex items-center px-[76px] ${
        choose == "true" ? "justify-center" : "justify-between "
      } border-b border-solid border-gray-300`}
    >
      <img
        src={logo}
        alt="redberry logo image"
        className="transition-transform transform hover:scale-110 cursor-pointer"
        onClick={() => {
          naviagte("/"), localStorage.setItem("item", "false");
        }}
      />
      {!context?.done ? (
        <button
          className={`${
            choose == "true" ? "hidden" : ""
          } bg-[#5D37F3] flex px-[20px] py-[10px] rounded-[8px] text-[#FFF] text-[14px] font-medium transition-transform transform hover:scale-110`}
          onClick={() => {
            context?.setEmail(true), context?.setDone(false);
          }}
        >
          შესვლა
        </button>
      ) : (
        <button
          className={`${
            choose == "true" ? "hidden" : ""
          } bg-[#5D37F3] flex px-[20px] py-[10px] rounded-[8px] text-[#FFF] text-[14px] font-medium transition-transform transform hover:scale-110`}
          onClick={() => {
            context?.setHidden(true),
              naviagte("/add-blog"),
              localStorage.setItem("item", "true");
          }}
        >
          დაამატე ბლოგი
        </button>
      )}
    </div>
  );
}
