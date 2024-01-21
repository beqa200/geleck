import { useNavigate } from "react-router-dom";
import { Context } from "./Context";

export default function Finish() {
  const navigate = useNavigate();
  const context = Context();
  return (
    <div
      className={`w-[100vw] min-h-[100%] bg-[#00000078] flex items-center justify-center fixed top-0 left-0 ${
        context?.post ? "" : "hidden"
      } `}
    >
      <div
        className={`w-[480px] h-[300px] flex flex-col items-center bg-[#FFF] px-[24px] pb-[40px] pt-[20px]   rounded-[12px] `}
      >
        <div className="w-[100%] flex justify-end mb-[20px]">
          <img
            className="w-[24px] h-[24px] "
            src="/images/black-cross.svg"
            alt=""
            onClick={() => context?.setPost(false)}
          />
        </div>
        <img
          className="mb-[16px]"
          src="/images/tick-circle.svg"
          alt="accepted"
        />
        <h1 className="text-[20px] text-[#1A1A1F] font-bold  mb-[48px] ">
          ჩანაწი წარმატებით დაემატა
        </h1>
        <button
          className="w-[100%] py-[10px] flex justify-center bg-[#5D37F3] rounded-[8px] cursor-pointer "
          onClick={() => {
            navigate("/"),
              context?.setPost(false),
              localStorage.setItem("author", "");
            localStorage.setItem("tittle", "");
            localStorage.setItem("describe", "");
            localStorage.setItem("data", "");
            localStorage.setItem("category", "");
            localStorage.setItem("email", "");
            localStorage.setItem("item", "false");
            context?.setDone(true);
            context?.setSubmited(false);
          }}
        >
          <p className="text-[14px] text-[#FFF] ">მთავარ გვერდზე დაბრუნება</p>
        </button>
      </div>
    </div>
  );
}
