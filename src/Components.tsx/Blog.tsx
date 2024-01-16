import blogImage from "../../public/assets/blog.png";
import hills from "../../public/assets/hills.png";
import arrow from "../../public/assets/blue-arrow.svg";

function Blog() {
  return (
    <>
      <div>
        {/*here is main text and logo image*/}
        <div className="flex items-center justify-between ml-[89px] mr-[76px] mt-[64px]">
          <h1 className="text-[#1A1A1F] text-[64px] font-bold">ბლოგი</h1>
          <img src={blogImage} alt="here is blog image" className="w-[50%]" />
        </div>
        {/* here is button filter section */}
        <div className="flex justify-center items-center gap-[24px] mt-[64px]">
          <button className="w-[83px] h-[32px] bg-[#ffb82f14] rounded-[30px] text-[#D6961C] text-[12px] font-medium px-[16px] py-[8px]">
            მარკეტი
          </button>
          <button className="w-[97px] h-[32px] justify-center bg-[#1cd67d14] rounded-[30px] text-[#15C972] text-[12px] font-medium px-[16px] py-[8px]">
            აპლიკაცია
          </button>
          <button className="w-[178px] h-[32px] bg-[#EEE1F7] rounded-[30px] text-[#B71FDD] text-[11px] font-medium px-[16px] py-[8px]">
            ხელოვნური ინტელექტი
          </button>
          <button className="w-[65px] h-[32px] bg-[#fa575714] rounded-[30px] text-[#DC2828] text-[12px] font-medium px-[16px] py-[8px]">
            UI/UX
          </button>
          <button className="w-[77px] h-[32px] bg-[#E9EFE9] rounded-[30px] text-[#60BE16] text-[12px] font-medium px-[16px] py-[8px]">
            კვლევა
          </button>
          <button className="w-[64px] h-[32px] bg-[#08d2ae14] rounded-[30px] text-[#1AC7A8] text-[12px] font-medium px-[16px] py-[8px]">
            Figma
          </button>
        </div>
        {/* here i make components div */}
        <div className="w-[408px] mt-[64px] mx-[76px]">
          <img src={hills} alt="here is component images" />
          <div className="mt-[24px]">
            <div>
              <h3 className="text-[#1A1A1F] text-[16px] font-medium">
                ლილე კვარაცხელია
              </h3>
              <p className="text-[#85858D] text-[12px] font-normal mt-[8px]">
                02.11.2023
              </p>
            </div>
            <h2 className="text-[#1A1A1F] text-[2.2ch] font-medium leading-7 mt-[16px]">
              EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა
            </h2>
            <div className="mt-[16px] flex items-center gap-[16px]">
              <button className="w-[83px] h-[32px] bg-[#ffb82f14] rounded-[30px] text-[#D6961C] text-[12px] font-medium px-[16px] py-[8px]">
                მარკეტი
              </button>
              <button className="w-[97px] h-[32px] justify-center bg-[#1cd67d14] rounded-[30px] text-[#15C972] text-[12px] font-medium px-[16px] py-[8px]">
                აპლიკაცია
              </button>
              <button className="w-[178px] h-[32px] bg-[#EEE1F7] rounded-[30px] text-[#B71FDD] text-[11px] font-medium px-[16px] py-[8px]">
                ხელოვნური ინტელექტი
              </button>
            </div>
            <p className="text-[#404049] text-[1.7ch] font-normal mt-[16px] ">
              6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
              სიზუსტისთვის, ეს პროცესი...
            </p>
            <div className="flex items-center mt-[16px]">
              <p className="text-[#5D37F3] text-[14px] font-medium">
                სრულად ნახვა
              </p>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Blog;
