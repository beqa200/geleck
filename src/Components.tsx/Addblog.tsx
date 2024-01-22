import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { Context } from "./Context";

interface chosencategory {
  title: string;
  background_color: string;
  op_background:string
}


// interface dataCategoty {
//   id:number
//   name: string;
//   text_color:string;
//   background_color: string;
// }

interface Inputs {
  author: string;
  title: string;
  paragraph: string;
  data: string;
  email: any;
}

function Addblog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<Inputs>();
  const context = Context();
  const [categoryMenu, setCategoryMenu] = useState<boolean>(false);
  const [chosenCategory, setChosenCategory] = useState<chosencategory[]>([]);
  const imgUpload = useRef<HTMLInputElement>(null);
  const [imgName, setImgName] = useState<string | undefined>("");
  const [categoryErr, setCategoryErr] = useState<boolean>(true);
  const [emptyAut, setEmptyAut] = useState<boolean>(true);
  const [length, setLength] = useState<boolean>(true);
  const [twoWord, setTwoWord] = useState<boolean>(true);
  const [georgian, setGeorgian] = useState<boolean>(true);
  // const [dataCategoty, setDataCategory] = useState<dataCategoty[]|[]>([])
  const author = useRef<any>();

  const Submit: SubmitHandler<Inputs> = (data: any) => {
   
    
    localStorage.setItem("author", author.current.value);
    localStorage.setItem("title", data.title);
    localStorage.setItem("paragraph", data.paragraph);
    localStorage.setItem("data", data.data);
    localStorage.setItem("email", data.email);
  };

  const georgianOnlyRegex = /^[ა-ჰ\s]+$/;

  window.addEventListener("popstate", () => {
    localStorage.setItem("author", "");
    localStorage.setItem("title", "");
    localStorage.setItem("paragraph", "");
    localStorage.setItem("data", "");
    localStorage.setItem("category", "");
    localStorage.setItem("email", "");
    localStorage.setItem("item", "false");
    context?.setDone(true);
    context?.setSubmited(false);
  });


  console.log(imgUpload.current?.value)

  useEffect(() => {
    // (async () => {
    //   const resposne = await fetch(
    //     "https://lingvistus.pythonanywhere.com/api/login/",
    //     {
    //       method:"POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ email: "gigagiorgadze@redberry.ge" }),
    //     }
    //   );
    //   // console.log(resposne)
    //   const data = await resposne.json();
    //   console.log(data);
    // })();

    let authorValue = localStorage.getItem("author");
    if (authorValue) author.current.value = authorValue;
    let titleValue = localStorage.getItem("title");
    if (titleValue) setValue("title", titleValue);
    let describeValue = localStorage.getItem("paragraph");
    if (describeValue) setValue("paragraph", describeValue);
    let dataValue = localStorage.getItem("data");
    if (dataValue) setValue("data", dataValue);
    let emailValue = localStorage.getItem("email");
    if (emailValue) setValue("email", emailValue);
    let categoryValue = localStorage.getItem("category");
    if (categoryValue) setChosenCategory(JSON.parse(categoryValue));
    context?.setSubmited(false);
  }, []);

  useEffect(() => {
    chosenCategory.length == 0 ? setCategoryErr(true) : setCategoryErr(false);
    if (chosenCategory.length > 0)
      localStorage.setItem("category", JSON.stringify(chosenCategory));
      // let arr:dataCategoty[] = []
      // chosenCategory?.forEach((element,index) => arr.push({id:index +1,name:element.title,text_color:element.background_color,background_color:element.op_background}) )
      // setDataCategory(arr)
  }, [chosenCategory]);

  useEffect(() => {
    localStorage.setItem("title", watch("title"));
  }, [watch("title")]);

  useEffect(() => {
    localStorage.setItem("paragraph", watch("paragraph"));
  }, [watch("paragraph")]);

  useEffect(() => {
    localStorage.setItem("data", watch("data"));
  }, [watch("data")]);

  useEffect(() => {
    localStorage.setItem("email", watch("email"));
  }, [watch("email")]);

  useEffect(() => {
    localStorage.setItem("author", author.current?.value);
  }, [author.current?.value]);

  useEffect(() => {
    if (author.current.value) {
      setEmptyAut(false);
      if (author.current.value.length < 4) {
        setLength(true);
      } else {
        setLength(false);
      }
      if (author.current.value.split(" ").length < 2) {
        setTwoWord(true);
      } else {
        setTwoWord(false);
      }
      if (georgianOnlyRegex.test(author.current.value)) {
        setGeorgian(true);
      } else {
        setGeorgian(false);
      }
    } else {
      setEmptyAut(true);
      setGeorgian(true);
      setTwoWord(true);
      setLength(true);
    }
  }, [context?.submited]);

  return (
    <>
      <section className=" w-[100vw] min-h-[100vh] flex flex-col items-center bg-[#FBFAFF]  pt-[40px] relative pb-[100px] ">
        <button className="w-[44px] h-[44px] absolute top-[40px] left-[76px] ">
          <img
            className="w-[100%] h-[100%] "
            src="/images/Arrow.svg"
            alt="go-back"
            onClick={() => {
              history.back(), localStorage.setItem("author", "");
              localStorage.setItem("title", "");
              localStorage.setItem("paragraph", "");
              localStorage.setItem("data", "");
              localStorage.setItem("category", "");
              localStorage.setItem("email", "");
              localStorage.setItem("item", "false");
              context?.setDone(true);
              context?.setSubmited(false);
            }}
          />
        </button>
        <form className="w-[600px] relative " onSubmit={handleSubmit(Submit)}>
          <h1 className="text-[32px] text-[#1A1A1F] text-left font-bold mb-[40px] ">
            ბლოგის დამატება
          </h1>
          <div className="flex flex-col gap-[8px] ">
            <h2 className="text-[14px] text-[#1A1A1F] font-medium  ">
              ატვირთეთ ფოტო
            </h2>
            {/*//-------------------------------------------------------image-upload------------------------------------------------------- //*/}
            {imgName ? (
              <div className="w-[100%] flex justify-between bg-[#F2F2FA] rounded-[12px] p-[16px] ">
                <div className="flex gap-[12px]">
                  <img src="/images/gallery.png" alt="img-icon" />
                  <p>{imgName?.split("\\")[imgName?.split("\\").length - 1]}</p>
                </div>
                <img
                  src="/images/black-cross.svg"
                  alt="delete-file"
                  onClick={() => {
                    setImgName("");
                  }}
                />
              </div>
            ) : (
              <div className="w-[100%] h-[180px] flex flex-col items-center justify-center gap-[24px] rounded-[12px] bg-[#F4F3FF] border border-dashed border-[#85858D] ">
                <img
                  className="w-[40px] h-[40px] "
                  src="/images/folder-add.png"
                  alt="add-photo"
                />
                <p className="text-[14px] text-[#1A1A1F] ">
                  ჩააგდეთ ფაილი აქ ან
                  <a
                    className="font-medium underline underline-offset-2 cursor-pointer ml-[5px] "
                    onClick={() => {
                      imgUpload.current?.click();
                    }}
                  >
                    აირჩიეთ ფაილი
                  </a>
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-between py-[24px] ">
            {/* //----------------------------------------------author-input---------------------------------------------------------------------// */}

            <div>
              <label
                htmlFor="author"
                className="text-[14px] text-[#1A1A1F] font-medium flex flex-col gap-[8px] "
              >
                ავტორი *
                <div
                  className={`w-[288px] h-[44px] ${
                    context?.submited
                      ? emptyAut || length || twoWord || !georgian
                        ? "bg-[#ea191933]"
                        : "bg-[#14d81c33]"
                      : "bg-[#FCFCFD]"
                  } border border-solid ${
                    context?.submited
                      ? emptyAut || length || twoWord || !georgian
                        ? "border-[#EA1919]"
                        : "border-[#14D81C]"
                      : " border-[#E4E3EB]"
                  } px-[16px] py-[12px] rounded-[12px] `}
                >
                  <input
                    className="appearance-none bg-transparent outline-none w-[100%] text-[14px] text-[#1A1A1F] font-normal "
                    type="text"
                    id="author"
                    placeholder="შეიყვნეთ ავტორი"
                    ref={author}
                    onChange={(e) => {
                      localStorage.setItem("author", e.target.value);
                      if (e.target.value) {
                        setEmptyAut(false);
                        if (e.target.value.length < 4) {
                          setLength(true);
                        } else {
                          setLength(false);
                        }
                        if (e.target.value.split(" ").length < 2) {
                          setTwoWord(true);
                        } else {
                          setTwoWord(false);
                        }
                        if (georgianOnlyRegex.test(e.target.value)) {
                          setGeorgian(true);
                        } else {
                          setGeorgian(false);
                        }
                      } else {
                        setEmptyAut(true);
                        setGeorgian(true);
                        setTwoWord(true);
                        setLength(true);
                      }
                    }}
                  />
                </div>
                <ul className="list-disc text-[12px] text-[#85858D] pl-[20px] font-normal ">
                  <li
                    className={`${
                      context?.submited
                        ? emptyAut || length
                          ? "text-[#EA1919]"
                          : "text-[#14D81C]"
                        : " text-[#85858D]"
                    }`}
                  >
                    მინიმუმ 4 სიმბოლო
                  </li>
                  <li
                    className={`${
                      context?.submited
                        ? emptyAut || twoWord
                          ? "text-[#EA1919]"
                          : "text-[#14D81C]"
                        : " text-[#85858D]"
                    }`}
                  >
                    მინიმუმ ორი სიტყვა
                  </li>
                  <li
                    className={`${
                      context?.submited
                        ? emptyAut || !georgian
                          ? "text-[#EA1919]"
                          : "text-[#14D81C]"
                        : " text-[#85858D]"
                    }`}
                  >
                    მხოლოდ ქართული სიმბოლოები
                  </li>
                </ul>
              </label>
            </div>

            {/* //----------------------------------------------tittle-input---------------------------------------------------------------------// */}

            <div>
              <label
                htmlFor="title"
                className="text-[14px] text-[#1A1A1F] font-medium  flex flex-col gap-[8px]"
              >
                სათური *
                <div
                  className={` w-[288px] h-[44px] ${
                    context?.submited
                      ? errors.title?.type == "required" ||
                        errors.title?.type == "minLength"
                        ? "bg-[#ea191933]"
                        : "bg-[#14d81c33]"
                      : "bg-[#FCFCFD]"
                  } border border-solid ${
                    context?.submited
                      ? errors.title?.type == "required" ||
                        errors.title?.type == "minLength"
                        ? "border-[#EA1919]"
                        : "border-[#14D81C]"
                      : " border-[#E4E3EB]"
                  } px-[16px] py-[12px] rounded-[12px] `}
                >
                  <input
                    className="appearance-none bg-transparent outline-none w-[100%] text-[14px] text-[#1A1A1F] font-normal "
                    type="text"
                    id="title"
                    placeholder="შეიყვნეთ სათაური"
                    {...register("title", { required: true, minLength: 2 })}
                  />
                </div>
                <p
                  className={`text-[12px] ${
                    context?.submited
                      ? errors.title?.type == "required" ||
                        errors.title?.type == "minLength"
                        ? "text-[#EA1919]"
                        : "text-[#14D81C]"
                      : " text-[#85858D]"
                  } font-normal `}
                >
                  მინიმუმ 2 სიმბოლო
                </p>
              </label>
            </div>
          </div>

          {/* //----------------------------------------------description-input---------------------------------------------------------------------// */}

          <div className="flex flex-col gap-[8px]">
            <label className="text-[14px] text-[#1A1A1F] font-medium  flex flex-col gap-[8px]">
              აღწერა *
            </label>
            <textarea
              style={{ resize: "none" }}
              className={`w-[100%] h-[124px] flex items-start ${
                context?.submited
                  ? errors.paragraph?.type == "required" ||
                    errors.paragraph?.type == "minLength"
                    ? "bg-[#ea191933]"
                    : "bg-[#14d81c33]"
                  : "bg-[#FCFCFD]"
              } border border-solid ${
                context?.submited
                  ? errors.paragraph?.type == "required" ||
                    errors.paragraph?.type == "minLength"
                    ? "border-[#EA1919]"
                    : "border-[#14D81C]"
                  : " border-[#E4E3EB]"
              } px-[16px] py-[12px] text-[14px] text-[#1A1A1F] rounded-[12px] appearance-none outline-none `}
              placeholder="შეიყვნეთ აღწერა"
              {...register("paragraph", { required: true, minLength: 2 })}
            />
            <p
              className={`text-[12px] ${
                context?.submited
                  ? errors.paragraph?.type == "required" ||
                    errors.paragraph?.type == "minLength"
                    ? "text-[#EA1919]"
                    : "text-[#14D81C]"
                  : " text-[#85858D]"
              } `}
            >
              მინიმუმ 2 სიმბოლო
            </p>
          </div>

          {/* //----------------------------------------------data-input---------------------------------------------------------------------// */}

          <div className="flex justify-between py-[24px] ">
            <label
              className="text-[14px] text-[#1A1A1F] font-medium  flex flex-col gap-[8px]"
              htmlFor="data"
            >
              გამოქვეყნების თარიღი *
              <div
                className={`w-[288px] h-[44px] flex gap-[12px] ${
                  context?.submited
                    ? errors.data?.type == "required" ||
                      errors.data?.type == "minLength"
                      ? "bg-[#ea191933]"
                      : "bg-[#14d81c33]"
                    : "bg-[#FCFCFD]"
                } border border-solid ${
                  context?.submited
                    ? errors.data?.type == "required" ||
                      errors.data?.type == "minLength"
                      ? "border-[#EA1919]"
                      : "border-[#14D81C]"
                    : " border-[#E4E3EB]"
                } px-[16px] py-[12px] rounded-[12px] `}
              >
                <img
                  className="w-[20px] h-[20px] "
                  src="/images/calendar.svg"
                  alt="calendar-icon"
                />
                <ReactInputMask
                  mask={"99.99.9999"}
                  maskChar={null}
                  className="text-[14px] text-[#1A1A1F] appearance-none bg-transparent outline-none "
                  {...register("data", { required: true, minLength: 10 })}
                />
              </div>
            </label>

            {/* //----------------------------------------------category-input---------------------------------------------------------------------// */}

            <label
              className="text-[14px] text-[#1A1A1F] font-medium  flex flex-col gap-[8px]"
              htmlFor="categoty"
            >
              კატეგორია *
              <div
                className={` flex items-center w-[288px] h-[44px] ${
                  context?.submited
                    ? categoryErr
                      ? "bg-[#ea191933]"
                      : "bg-[#14d81c33]"
                    : "bg-[#FCFCFD]"
                } border border-solid ${
                  context?.submited
                    ? categoryErr
                      ? "border-[#EA1919]"
                      : "border-[#14D81C]"
                    : " border-[#E4E3EB]"
                } pl-[6px] pr-[14px] py-[6px] rounded-[12px] `}
              >
                <div className=" CategoryBox w-[100%] h-[100%] flex gap-[8px] overflow-x-scroll overflow-y-hidden ">
                  {chosenCategory.map((item: chosencategory) => {
                    return (
                      <>
                        <div
                          className={` ${
                            item.title == "ხელოვნური ინტელექტი"
                              ? "min-w-[210px]"
                              : item.title == "მარკეტი"
                              ? "min-w-[107px]"
                              : item.title == "აპლიკაცია"
                              ? "min-w-[121px]"
                              : item.title == "UI/UX"
                              ? "min-w-[89PX]"
                              : item.title == "კვლევა"
                              ? "min-w-[101px]"
                              : "min-w-[88px]"
                          } flex gap-[8px] items-center px-[12px]  bg-[${
                            item.background_color
                          }] rounded-[30px] `}
                        >
                          <p className=" w-[100%] text-[12px] text-center text-[#FFF] font-medium ">
                            {item.title}
                          </p>
                          <img
                            className="w-[16px] h-[16px] cursor-pointer"
                            src="/images/add.svg"
                            alt="delete-categroy"
                            onClick={() =>
                              setChosenCategory(
                                chosenCategory.filter(
                                  (element) => element.title != item.title
                                )
                              )
                            }
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
                <img
                  className="w-[20px] h-[20px] ml-[5px] cursor-pointer"
                  src="/images/arrow-down.svg"
                  alt="category-open"
                  onClick={() => setCategoryMenu(!categoryMenu)}
                />
              </div>
            </label>
          </div>

          {/* //----------------------------------------------email-input---------------------------------------------------------------------// */}

          <label
            className="text-[14px] text-[#1A1A1F] font-medium  flex flex-col gap-[8px]"
            htmlFor="email"
          >
            ელ-ფოსტა
            <div
              className={`w-[288px] h-[44px] ${
                context?.submited
                  ? errors.email?.type == "pattern"
                    ? "bg-[#ea191933]"
                    : "bg-[#14d81c33]"
                  : "bg-[#FCFCFD]"
              } border border-solid ${
                context?.submited
                  ? errors.email?.type == "pattern"
                    ? "border-[#EA1919]"
                    : "border-[#14D81C]"
                  : " border-[#E4E3EB]"
              } px-[16px] py-[12px] rounded-[12px] `}
            >
              <input
                className="text-[14px] text-[#1A1A1F] appearance-none bg-transparent outline-none "
                type="email"
                id="email"
                placeholder="Example@redberry.ge"
                {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@redberry\.ge$/,
                    message: "მეილი უნდა მთავრდებოდეს @redberry.ge-ით",
                  },
                })}
              />
            </div>
            {errors.email?.type == "pattern" ? (
              <div className="flex gap-[8px] w-[288px]">
                <img
                  className="w-[20px] h-[20px]"
                  src="/images/info-circle.svg"
                  alt="error-img"
                />
                <p className=" text-[1.5ch] text-[#EA1919]">
                  მეილი უნდა მთავრდებოდეს @redberry.ge-ით
                </p>
              </div>
            ) : null}
          </label>

          {/* //----------------------------------------------submit-button---------------------------------------------------------------------// */}

          <button
            type="submit"
            className={` w-[288px] h-[40px] flex items-center justify-center  ${
              errors.email?.type != "pattern" &&
              !categoryErr &&
              errors.data?.type != "required" &&
              errors.data?.type != "minLength" &&
              errors.paragraph?.type != "required" &&
              errors.paragraph?.type != "minLength" &&
              errors.title?.type != "required" &&
              errors.title?.type != "minLength" &&
              !length &&
              !twoWord &&
              georgian &&
              !emptyAut
                ? "bg-[#5D37F3]"
                : "bg-[#E4E3EB]"
            } rounded-[8px] mt-[40px] ml-[312px] `}
            onClick={() => {
              context?.setSubmited(true);
              errors.email?.type != "pattern" &&
              !categoryErr &&
              errors.data?.type != "required" &&
              errors.data?.type != "minLength" &&
              errors.paragraph?.type != "required" &&
              errors.paragraph?.type != "minLength" &&
              errors.title?.type != "required" &&
              errors.title?.type != "minLength" &&
              !length &&
              !twoWord &&
              georgian &&
              !emptyAut
                ? context?.setPost(true)
                : null;
            }}
          >
            <p className="text-[14px] text-[#FFF] font-medium ">გამოქვეყნება</p>
          </button>

          {/* //---------------------------------------------------------------------------------------------------------------------------------// */}

          <div
            className={`${
              categoryMenu ? "" : "hidden"
            } w-[288px] flex flex-col gap-[8px] bg-[#FFF] border border-solid border-[#E4E3EB] shadow-[2px_4px_8px_0px_#00000014] rounded-[12px] p-[16px] absolute right-0 bottom-[18px] `}
          >
            <div className="flex gap-[8px]">
              <div
                className={` px-[16px] py-[8px] cursor-pointer  ${
                  chosenCategory?.find(
                    (element) => element.title == "მარკეტი"
                  )
                    ? "bg-[#FFB82F] text-[#FFF]"
                    : "bg-[#FFB82F14] text-[#D6961C] hover:bg-[#ffb82f7f] hover:text-white"
                } rounded-[30px] `}
                onClick={
                  chosenCategory?.find(
                    (element) => element.title == "მარკეტი"
                  )
                    ? () => {}
                    : () => {
                        setChosenCategory([
                          ...chosenCategory,
                          { title: "მარკეტი", background_color: "#FFB82F", op_background:"#ffb82f14" },
                        ]);
                      }
                }
              >
                <p className="text-[12px]  font-medium ">მარკეტი</p>
              </div>
              <div
                className={`px-[16px] py-[8px] cursor-pointer ${
                  chosenCategory?.find(
                    (element) => element.title == "აპლიკაცია"
                  )
                    ? "bg-[#1AC7A8] text-[#FFF]"
                    : "bg-[#1CD67D14] text-[#15C972] hover:bg-[#1ac7a87f] hover:text-white"
                } rounded-[30px] `}
                onClick={
                  chosenCategory?.find(
                    (element) => element.title == "აპლიკაცია"
                  )
                    ? () => {}
                    : () => {
                        setChosenCategory([
                          ...chosenCategory,
                          { title: "აპლიკაცია", background_color: "#1AC7A8", op_background:"#1cd67d14" },
                        ]);
                      }
                }
              >
                <p className="text-[12px]  font-medium ">აპლიკაცია</p>
              </div>
            </div>
            <div
              className={` w-[190px} px-[16px] py-[8px] cursor-pointer ${
                chosenCategory?.find(
                  (element) => element.title == "ხელოვნური ინტელექტი"
                )
                  ? "bg-[#B71FDD] text-[#FFF]"
                  : "bg-[#B11CD614] text-[#B71FDD] hover:bg-[#b71fdd7f] hover:text-white"
              } rounded-[30px] `}
              onClick={
                chosenCategory?.find(
                  (element) => element.title == "ხელოვნური ინტელექტი"
                )
                  ? () => {}
                  : () => {
                      setChosenCategory([
                        ...chosenCategory,
                        { title: "ხელოვნური ინტელექტი", background_color: "#B71FDD", op_background:"#b11cd614" },
                      ]);
                    }
              }
            >
              <p className=" inline text-[12px]  font-medium ">
                ხელოვნური ინტელექტი
              </p>
            </div>
            <div className="flex gap-[8px] ">
              <div
                className={`px-[16px] py-[8px] cursor-pointer ${
                  chosenCategory?.find((element) => element.title == "UI/UX")
                    ? "bg-[#DC2828] text-[#FFF]"
                    : "bg-[#FA575714] text-[#DC2828] hover:bg-[#dc28287f] hover:text-white"
                } rounded-[30px]`}
                onClick={
                  chosenCategory?.find((element) => element.title == "UI/UX")
                    ? () => {}
                    : () => {
                        setChosenCategory([
                          ...chosenCategory,
                          { title: "UI/UX", background_color: "#DC2828", op_background:"#fa575714" },
                        ]);
                      }
                }
              >
                <p className="text-[12px]  font-medium ">UI/UX</p>
              </div>
              <div
                className={`px-[16px] py-[8px] cursor-pointer ${
                  chosenCategory?.find((element) => element.title == "კვლევა")
                    ? "bg-[#60BE16] text-[#FFF]"
                    : "bg-[#70CF2514] text-[#60BE16] hover:bg-[#60be167f] hover:text-white"
                } rounded-[30px]`}
                onClick={
                  chosenCategory?.find((element) => element.title == "კვლევა")
                    ? () => {}
                    : () => {
                        setChosenCategory([
                          ...chosenCategory,
                          { title: "კვლევა", background_color: "#60BE16", op_background:"#70cf2514" },
                        ]);
                      }
                }
              >
                <p className="text-[12px]  font-medium ">კვლევა</p>
              </div>
              <div
                className={`px-[16px] py-[8px] cursor-pointer ${
                  chosenCategory?.find((element) => element.title == "Figma")
                    ? "bg-[#1AC7A8] text-[#FFF]"
                    : "bg-[#08D2AE14] text-[#1AC7A8] hover:bg-[#1ac7a87f] hover:text-white"
                } rounded-[30px]`}
                onClick={
                  chosenCategory?.find((element) => element.title == "Figma")
                    ? () => {}
                    : () => {
                        setChosenCategory([
                          ...chosenCategory,
                          { title: "Figma", background_color: "#1AC7A8", op_background:"#08d2ae14" },
                        ]);
                      }
                }
              >
                <p className="text-[12px]  font-medium ">Figma</p>
              </div>
            </div>
          </div>
        </form>
        <input
          className="appearance-none hidden "
          ref={imgUpload}
          type="file"
          id="photoInput"
          name="photo"
          accept="image/*"
          value={imgName}
          onChange={(e) => {
            setImgName(e.target.value);
          }}
        />
      </section>
    </>
  );
}

export default Addblog;
