import { Context } from "./Context";

export default function Email() {
  const context = Context();
  return (
    <div>
      <div
        className={`w-[100vw] h-[100%] bg-[rgba(0,0,0,0.10)] flex items-center justify-center fixed top-0 left-0  ${
          context?.email ? "" : "hidden"
        } `}
      >
        <div
          className={`w-[480px] h-[272px] flex flex-col items-center bg-[#FFF] px-[24px] pb-[40px] pt-[20px]   rounded-[12px] `}
        >
          <div className="w-[100%] flex justify-end ">
            <img
              className="w-[24px] h-[24px] cursor-pointer"
              src="/images/black-cross.svg"
              alt=""
              onClick={() => context?.setEmail(false)}
            />
          </div>
          <h1 className="text-[24px] text-[#1A1A1F] font-bold mt-[-10px]">
            შესვლა
          </h1>
          <div>
            <form action="" className="mt-[24px]">
              <label htmlFor="ელ-ფოსტა" className="text-[#1A1A1F] font-medium">
                ელ-ფოსტა{" "}
              </label>
              <br />
              <input
                type="text"
                placeholder="Example@redberry.ge"
                className="w-[432px] h-[44px] mt-[8px] outline-none rounded-[12px] caret-[#5D37F3] pl-[14px] border-2 border-solid border-[#5D37F3]"
              />
            </form>
          </div>
          <button className="w-[100%] py-[10px] px-[20px] mt-[24px] flex justify-center bg-[#5D37F3] rounded-[8px] cursor-pointer hover:bg-[#5d37f3a0]">
            <p className="text-[14px] text-[#FFF] font-medium">შესვლა</p>
          </button>
        </div>
      </div>
    </div>
  );
}
