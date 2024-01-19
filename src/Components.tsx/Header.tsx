import logo from "../../public/images/redberry.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const naviagte = useNavigate();
  return (
    <div className="bg-[#FFFFFF] h-[80px] flex items-center px-[76px] justify-between border-b border-solid border-gray-300">
      <img
        src={logo}
        alt="redberry logo image"
        className="transition-transform transform hover:scale-110 cursor-pointer"
        onClick={() => naviagte("/")}
      />
      <button
        className="bg-[#5D37F3] w-[93px] h-[40px] rounded-[8px] text-[#FFF] text-[14px] font-medium transition-transform transform hover:scale-110"
        onClick={() => naviagte("add-blog")}
      >
        შესვლა
      </button>
    </div>
  );
}
