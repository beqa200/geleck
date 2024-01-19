import blogImage from "../../public/assets/blog.png";
import arrow from "../../public/assets/blue-arrow.svg";
import { useContext } from "react";
import { Mycontext } from "./Context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const context = useContext(Mycontext);
  // const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  // const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleButtonClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((value) => value !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredData = context?.data.filter((item) =>
    selectedCategories.length > 0
      ? item.category?.some((category) =>
          selectedCategories.includes(category.name)
        )
      : true
  );

  return (
    <>
      <div>
        {/*here is main text and logo image*/}
        <div className="flex items-center justify-between ml-[89px] mr-[76px] mt-[64px]">
          <h1 className="text-[#1A1A1F] text-[64px] font-bold">ბლოგი</h1>
          <img src={blogImage} alt="here is blog image" className="w-[50%]" />
        </div>
        ;{/* here is button filter section */}
        <div className="flex justify-center items-center gap-[24px] mt-[64px]">
          <button
            className={`w-[83px] h-[32px] bg-[#ffb82f14] rounded-[30px] text-[#D6961C] text-[12px] font-medium px-[16px] py-[8px] ${
              selectedCategories.includes("მარკეტი")
                ? "bg-[#ffba2fdd] text-white border border-solid border-[#000000]"
                : "text-[#D6961C] border-none hover:bg-[#febe3f] hover:text-white transition-transform transform hover:scale-110"
            }`}
            onClick={() => handleButtonClick("მარკეტი")}
          >
            მარკეტი
          </button>
          <button
            className={`w-[97px] h-[32px] justify-center bg-[#1cd67d14] rounded-[30px] text-[#15C972] text-[12px] font-medium px-[16px] py-[8px] ${
              selectedCategories.includes("აპლიკაცია")
                ? "bg-[#1ac7a7cf] text-white border border-solid border-[#000000]"
                : "border-none hover:bg-[#1ac7a7e2] hover:text-white transition-transform transform hover:scale-110"
            }`}
            onClick={() => handleButtonClick("აპლიკაცია")}
          >
            აპლიკაცია
          </button>
          <button
            className={`w-[178px] h-[32px] bg-[#EEE1F7] rounded-[30px] text-[#B71FDD] text-[11px] font-medium px-[16px] py-[8px] ${
              selectedCategories.includes("ხელოვნური ინტელექტი")
                ? "bg-[#b422d8d4] text-white border border-solid border-[#000000]"
                : "border-none hover:bg-[#b422d8d4] hover:text-white transition-transform transform hover:scale-110"
            }`}
            onClick={() => handleButtonClick("ხელოვნური ინტელექტი")}
          >
            ხელოვნური ინტელექტი
          </button>
          <button
            className={`w-[65px] h-[32px] bg-[#fa575714] rounded-[30px] text-[#DC2828] text-[12px] font-medium px-[16px] py-[8px] ${
              selectedCategories.includes("UI/UX")
                ? "bg-[#ff0000df] text-white border border-solid border-[#000000]"
                : "border-none hover:bg-[#ff0000df] hover:text-white transition-transform transform hover:scale-110"
            }`}
            onClick={() => handleButtonClick("UI/UX")}
          >
            UI/UX
          </button>
          <button
            className={`w-[77px] h-[32px] bg-[#E9EFE9] rounded-[30px] text-[#60BE16] text-[12px] font-medium px-[16px] py-[8px] ${
              selectedCategories.includes("კვლევა")
                ? "bg-[#5fbe16e5] text-white border border-solid border-[#000000]"
                : "border-none hover:bg-[#5fbe16dd] hover:text-white transition-transform transform hover:scale-110"
            }`}
            onClick={() => handleButtonClick("კვლევა")}
          >
            კვლევა
          </button>
          <button
            className={`w-[64px] h-[32px] bg-[#08d2ae14] rounded-[30px] text-[#1AC7A8] text-[12px] font-medium px-[16px] py-[8px] ${
              selectedCategories.includes("Figma")
                ? "bg-[#1ac7a7e2] text-white border border-solid border-[#000000]"
                : "border-none hover:bg-[#1ac7a7e2] hover:text-white transition-transform transform hover:scale-110"
            }`}
            onClick={() => handleButtonClick("Figma")}
          >
            Figma
          </button>
        </div>
        {/* here i make components div */}
        <div className="flex flex-wrap justify-evenly items-center mx-[76px] gap-x-[32px] gap-y-[56px] mb-[50px]">
          {filteredData?.map((item, index) => (
            <div className="w-[408px] mt-[64px]" key={index}>
              <img src={item.image} alt="here is component images" />
              <div className="mt-[24px]">
                <div>
                  <h3 className="text-[#1A1A1F] text-[16px] font-medium">
                    {item.author}
                  </h3>
                  <p className="text-[#85858D] text-[12px] font-normal mt-[8px]">
                    {item.month}
                  </p>
                </div>
                <h2 className="text-[#1A1A1F] text-[2.2ch] font-medium leading-7 mt-[16px]">
                  {item.title}
                </h2>
                <div className="mt-[16px] flex flex-wrap  items-center gap-[16px]">
                  {item.category?.map((itemCategory, number) => (
                    <div
                      key={number}
                      className={`flex justify-center items-center text-${itemCategory.text_color} bg-${itemCategory.background_color} rounded-[30px] px-[10px] py-[8px] text-[12px] font-medium`}
                    >
                      {itemCategory.name}
                    </div>
                  ))}
                </div>
                <p className="text-[#404049] text-[1.7ch] font-normal mt-[16px] ">
                  {item.paragraph}
                </p>
                <div className="flex items-center mt-[16px] cursor-pointer transition-transform transform hover:scale-110">
                  <p
                    className="text-[#5D37F3] text-[14px] font-medium"
                    onClick={() => {
                      navigate("/" + item.id);
                    }}
                  >
                    სრულად ნახვა
                  </p>
                  <img src={arrow} alt="arrow image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
