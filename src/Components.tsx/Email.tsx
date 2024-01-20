import { useRef, useState } from "react";
import errorImg from "../../public/images/info-circle.svg";
import { Context } from "./Context";

export default function Email() {
  const [error, setError] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const context = Context();
  const regex = /^[a-zA-Z0-9._%+-]+@redberry.ge$/;

  function emailError() {
    if (regex.test(emailRef.current?.value ? emailRef.current?.value : "")) {
      setError(false);
      context?.setDone(true);
      context?.setSave(true);
    } else {
      setError(true);
    }
  }

  return (
    <div>
      {!context?.done ? (
        <div
          className={`w-[480px] min-h-[272px] flex flex-col items-center bg-[#FFF] px-[24px] pb-[40px] pt-[20px]   rounded-[12px] `}
        >
          <div className="w-[100%] flex justify-end ">
            <img
              className="w-[24px] h-[24px] cursor-pointer"
              src="/images/black-cross.svg"
              alt=""
              onClick={() => {
                context?.setEmail(false), setError(false);
              }}
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
                ref={emailRef}
                type="text"
                placeholder="Example@redberry.ge"
                className={`w-[432px] h-[44px] mt-[8px] outline-none rounded-[12px] caret-[#5D37F3] pl-[14px] border-2 border-solid ${
                  error ? "border-[#EA1919] bg-[#ea191933]" : "border-[#5D37F3]"
                }`}
              />
              {!error ? null : (
                <div className="flex gap-[8px] mt-[8px]">
                  <img src={errorImg} alt="" />
                  <p className="text-[#EA1919] text-[12px] font-normal">
                    ელ-ფოსტა არ მოიძებნა
                  </p>
                </div>
              )}
            </form>
          </div>
          <button
            className="w-[100%] py-[10px] px-[20px] mt-[24px] flex justify-center bg-[#5D37F3] rounded-[8px] cursor-pointer hover:bg-[#5d37f3a0]"
            onClick={() => emailError()}
          >
            <p className="text-[14px] text-[#FFF] font-medium">შესვლა</p>
          </button>
        </div>
      ) : (
        <div
          className={`w-[480px] h-[300px] flex flex-col items-center bg-[#FFF] px-[24px] pb-[40px] pt-[20px]   rounded-[12px] `}
        >
          <div className="w-[100%] flex justify-end mb-[20px]">
            <img
              className="w-[24px] h-[24px] cursor-pointer"
              src="/images/black-cross.svg"
              alt=""
              onClick={() => {
                context?.setEmail(false), context?.setSave(false);
              }}
            />
          </div>
          <img
            className="mb-[16px]"
            src="/images/tick-circle.svg"
            alt="accepted"
          />
          <h1 className="text-[20px] text-[#1A1A1F] font-bold  mb-[48px] ">
            წარმატებული ავტორიზაცია
          </h1>
          <button
            className="w-[100%] py-[10px] flex justify-center bg-[#5D37F3] rounded-[8px] cursor-pointer hover:bg-[#5d37f3a0]"
            onClick={() => {
              context?.setEmail(false), context?.setDone(true);
            }}
          >
            <p
              className="text-[14px] text-[#FFF]"
              onClick={() => context?.setSave(false)}
            >
              კარგი
            </p>
          </button>
        </div>
      )}
    </div>
  );
}
