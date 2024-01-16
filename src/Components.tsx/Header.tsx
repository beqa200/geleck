import logo from "../../public/assets/redberry.png";

export default function Header() {
  return (
    <div className="bg-[#FFFFFF] h-[80px] flex items-center px-[76px] justify-between border-b border-solid border-gray-300">
      <img src={logo} alt="redberry logo image" />
      <button className="bg-[#5D37F3] w-[93px] h-[40px] rounded-[8px] text-[#FFF] text-[14px] font-medium">
        შესვლა
      </button>
    </div>
  );
}
