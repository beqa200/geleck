import blogImage from "../../public/assets/blog.png";

function Blog() {
  return (
    <>
      <div>
        {/*here is main text and logo image*/}
        <div className="flex items-center justify-between pl-[89px] pr-[76px] mt-[64px]">
          <h1 className="text-[#1A1A1F] text-[64px] font-bold">ბლოგი</h1>
          <img
            src={blogImage}
            alt="here is blog image"
            className="w-[624px] h-[200px]"
          />
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
      </div>
    </>
  );
}
export default Blog;
