import logo from "../../public/images/redberry.png";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "./Context";

export default function Header() {
  const params = useParams();
  const context = Context();
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
        onClick={() => context?.setEmail(true)}
      >
        შესვლა
      </button>
    </div>
  );
}
