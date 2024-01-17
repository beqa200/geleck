import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

interface chosencategory {
  category: string;
  color: string;
}

interface Inputs {
  author: string;
  tittle: string;
  describe: string;
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
  const [categoryMenu, setCategoryMenu] = useState<boolean>(false);
  const [chosenCategory, setChosenCategory] = useState<chosencategory[]>([]);
  const imgUpload = useRef<HTMLInputElement>(null);
  const [imgName, setImgName] = useState<string | undefined>("");
  const [submited, setSubmited] = useState<boolean>(false);
  const [categoryErr, setCategoryErr] = useState<boolean>(false);
  const [emptyAut, setEmptyAut] = useState<boolean>(false);
  const [length, setLength] = useState<boolean>(false);
  const [twoWord, setTwoWord] = useState<boolean>(false);
  const [georgian, setGeorgian] = useState<boolean>(false);
  const author = useRef<any>();

  const [post, setPost] = useState<boolean>(false);

  const navigate = useNavigate();

  const Submit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data);
    localStorage.setItem("author", author.current.value);
    localStorage.setItem("tittle", data.tittle);
    localStorage.setItem("describe", data.describe);
    localStorage.setItem("data", data.data);
    localStorage.setItem("category", chosenCategory.join(","));
    localStorage.setItem("email", data.email);
  };

  const georgianOnlyRegex = /^[ა-ჰ\s]+$/;

  // let emailValue = localStorage.getItem("email");

  //   console.log("emptyAut",emptyAut)
  //   console.log("!georgian",!georgian)
  //   console.log("twoWord",twoWord)
  //   console.log("length",length)
  //   console.log("errors.tittle?.type == required",errors.tittle?.type == "required")
  //   console.log("errors.describe?.type == required",errors.describe?.type == "required")
  //   console.log("errors.data",errors.data)
  //   console.log("categoryErr",categoryErr)
  //   console.log("errors.email?.type == pattern",errors.email?.type == "pattern")

  useEffect(() => {
    let authorValue = localStorage.getItem("author");
    if (authorValue) author.current.value =  authorValue
    let tittleValue = localStorage.getItem("tittle");
    if (tittleValue) setValue("tittle", tittleValue);
    let describeValue = localStorage.getItem("describe");
    if (describeValue) setValue("describe", describeValue);
    let dataValue = localStorage.getItem("data");
    if (dataValue) setValue("data", dataValue);
    // let categoryValue = localStorage.getItem("category");
    // if(categoryValue)setValue("category",categoryValue)
    let emailValue = localStorage.getItem("email");
    if (emailValue) setValue("email", emailValue);
  }, []);

  // console.log(chosenCategory.toString())
  // let srt = chosenCategory.toString
  // console.log(srt.json())

  useEffect(() => {
    localStorage.setItem("tittle", watch("tittle"));
  }, [watch("tittle")]);

  useEffect(() => {
    localStorage.setItem("describe", watch("describe"));
  }, [watch("describe")]);

  useEffect(() => {
    localStorage.setItem("data", watch("data"));
  }, [watch("data")]);

  useEffect(() => {
    localStorage.setItem("email", watch("email"));
  }, [watch("email")]);

  // if (author.current) {
    useEffect(() => {
      localStorage.setItem("author", author.current?.value);
    }, [author.current?.value]);
  // }

  useEffect(() => {
    if (author.current.value) {
      console.log(author.current.value);
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
      console.log("all err");
      setEmptyAut(true);
      setGeorgian(true);
      setTwoWord(true);
      setLength(true);
    }
  }, [submited]);

  // //   function ONSubmit() {
  // if()
  // if(errors.author?.ref?.value.split(" ").length < 2){
  //     setTwoWord(true)
  // }else{
  //     setTwoWord(false)
  // }
  // if(/^[ა-ჰ]+$/.test(errors.author?.ref?.value)){
  //     setGeorgian(true)
  // }else{
  //     setGeorgian(false)
  // }
  // console.log(errors.author)
  //   }
  //   useEffect(() => {
  //     ONSubmit();
  //   }, [errors, handleSubmit]);

  //   console.log(Object.values(errors.author? errors?.author:[]).forEach((Element,index) => console.log(index,Element)));
  //   console.log(Object.values(errors?.author ?errors?.author:[]))

  return (
    <>
      <section className=" w-[100vw] min-h-[100vh] flex flex-col items-center bg-[#FBFAFF]  pt-[40px] relative pb-[100px] ">
        <button className="w-[44px] h-[44px] absolute top-[40px] left-[76px] ">
          <img
            className="w-[100%] h-[100%] "
            src="/assets/Arrow.svg"
            alt="go-back"
            onClick={() => history.back()}
          />
        </button>
        <form className="w-[600px] relative " onSubmit={handleSubmit(Submit)}>
          <h1 className="text-[32px] text-[#1A1A1F] text-left font-bold mb-[24px] ">
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
                  <img src="/assets/gallery.png" alt="img-icon" />
                  <p>{imgName?.split("\\")[imgName?.split("\\").length - 1]}</p>
                </div>
                <img
                  src="/assets/black-cross.svg"
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
                  src="/assets/folder-add.png"
                  alt="add-photo"
                />
                <p className="text-[14px] text-[#1A1A1F] ">
                  ჩააგდეთ ფაილი აქ ან
                  <a
                    className="font-medium underline underline-offset-2 cursor-pointer "
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
                    submited
                      ? emptyAut
                        ? "bg-[#ea191933]"
                        : "bg-[#14d81c33]"
                      : "bg-[#FCFCFD]"
                  } border border-solid ${
                    submited
                      ? emptyAut
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
                    // value={authorValue?authorValue:""}
                    onChange={(e) => {
                      localStorage.setItem("author", e.target.value);
                      if (e.target.value) {
                        console.log(author.current.value);
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
                        console.log("all err");
                        setEmptyAut(true);
                        setGeorgian(true);
                        setTwoWord(true);
                        setLength(true);
                      }
                    }}
                    // {...register("author", {
                    //   required: "empty",
                    //   minLength: {
                    //     value:4,
                    //     message:"short"
                    //   },
                    //   validate:{long: (element) => {
                    //     console.log(element.split(" ").length);
                    //     return element.split(" ").length < 2 || "less";
                    //   },
                    // },
                    //   pattern:{
                    //     value:/^[ა-ჰ\s]+$/,
                    //     message:"pattern"
                    //   }
                    // })}
                  />
                </div>
                <ul className="list-disc text-[12px] text-[#85858D] pl-[20px] font-normal ">
                  <li
                    className={`${
                      submited
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
                      submited
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
                      submited
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
                htmlFor="tittle"
                className="text-[14px] text-[#1A1A1F] font-medium  flex flex-col gap-[8px]"
              >
                სათური *
                <div
                  className={` w-[288px] h-[44px] ${
                    submited
                      ? errors.tittle?.type == "required"
                        ? "bg-[#ea191933]"
                        : "bg-[#14d81c33]"
                      : "bg-[#FCFCFD]"
                  } border border-solid ${
                    submited
                      ? errors.tittle?.type == "required"
                        ? "border-[#EA1919]"
                        : "border-[#14D81C]"
                      : " border-[#E4E3EB]"
                  } px-[16px] py-[12px] rounded-[12px] `}
                >
                  <input
                    className="appearance-none bg-transparent outline-none w-[100%] text-[14px] text-[#1A1A1F] font-normal "
                    type="text"
                    // name="tittle"
                    id="tittle"
                    placeholder="შეიყვნეთ სათაური"
                    // value={tittleValue?tittleValue:""}
                    {...register("tittle", { required: true, minLength: 2 })}
                  />
                </div>
                <p
                  className={`text-[12px] ${
                    submited
                      ? errors.tittle?.type == "required"
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
                submited
                  ? errors.describe?.type == "required"
                    ? "bg-[#ea191933]"
                    : "bg-[#14d81c33]"
                  : "bg-[#FCFCFD]"
              } border border-solid ${
                submited
                  ? errors.describe?.type == "required"
                    ? "border-[#EA1919]"
                    : "border-[#14D81C]"
                  : " border-[#E4E3EB]"
              } px-[16px] py-[12px] text-[14px] text-[#1A1A1F] rounded-[12px] appearance-none outline-none `}
              placeholder="შეიყვნეთ აღწერა"
              // value={describeValue?describeValue:""}
              {...register("describe", { required: true })}
              //   onChange={(e) => console.log(e.target.value)}
            />
            <p
              className={`text-[12px] ${
                submited
                  ? errors.describe?.type == "required"
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
                  submited
                    ? errors.data
                      ? "bg-[#ea191933]"
                      : "bg-[#14d81c33]"
                    : "bg-[#FCFCFD]"
                } border border-solid ${
                  submited
                    ? errors.data
                      ? "border-[#EA1919]"
                      : "border-[#14D81C]"
                    : " border-[#E4E3EB]"
                } px-[16px] py-[12px] rounded-[12px] `}
              >
                <img
                  className="w-[20px] h-[20px] "
                  src="/assets/calendar.svg"
                  alt="calendar-icon"
                />
                <ReactInputMask
                  mask={"99.99.9999"}
                  maskChar={null}
                  className="text-[14px] text-[#1A1A1F] appearance-none bg-transparent outline-none "
                  // value={dataValue?dataValue:""}
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
                  submited
                    ? categoryErr
                      ? "bg-[#ea191933]"
                      : "bg-[#14d81c33]"
                    : "bg-[#FCFCFD]"
                } border border-solid ${
                  submited
                    ? categoryErr
                      ? "border-[#EA1919]"
                      : "border-[#14D81C]"
                    : " border-[#E4E3EB]"
                } pl-[6px] pr-[14px] py-[6px] rounded-[12px] `}
              >
                <div className="w-[100%] h-[100%] flex gap-[8px] overflow-x-scroll  ">
                  {chosenCategory.map((item: chosencategory) => {
                    return (
                      <>
                        <div
                          className={` flex gap-[8px] items-center px-[12px]  bg-[${item.color}] rounded-[30px] `}
                        >
                          <p className="text-[12px] text-[#FFF] font-medium ">
                            {item.category}
                          </p>
                          <img
                            className="w-[16px] h-[16px] "
                            src="/assets/add.svg"
                            alt="delete-categroy"
                            onClick={() =>
                              setChosenCategory(
                                chosenCategory.filter(
                                  (element) => element.category != item.category
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
                  className="w-[20px] h-[20px] ml-[5px] cursor-pointer "
                  src="/assets/arrow-down.svg"
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
                submited
                  ? errors.email?.type == "pattern"
                    ? "bg-[#ea191933]"
                    : "bg-[#14d81c33]"
                  : "bg-[#FCFCFD]"
              } border border-solid ${
                submited
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
              <div className="flex gap-[8px]">
                <img
                  className="w-[20px] h-[20px]"
                  src="/assets/info-circle.svg"
                  alt="error-img"
                />
                <p className=" text-[12px] text-[#EA1919]">
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
              !errors.data &&
              errors.describe?.type != "required" &&
              errors.tittle?.type != "required" &&
              !length &&
              !twoWord &&
              georgian &&
              !emptyAut
                ? "bg-[#5D37F3]"
                : "bg-[#E4E3EB]"
            } rounded-[8px] mt-[40px] ml-[312px] `}
            onClick={() => {
              // console.log(Submit);
              setSubmited(true);
              chosenCategory.length == 0
                ? setCategoryErr(true)
                : setCategoryErr(false);

              errors.email?.type != "pattern" &&
              !categoryErr &&
              !errors.data &&
              errors.describe?.type != "required" &&
              errors.tittle?.type != "required" &&
              !length &&
              !twoWord &&
              georgian &&
              !emptyAut
                ? setPost(true)
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
                className={` px-[16px] py-[8px] ${
                  chosenCategory.find((element) => element.category == "მაკეტი")
                    ? "bg-[#FFB82F] text-[#FFF]"
                    : "bg-[#FFB82F14] text-[#D6961C]"
                } rounded-[30px] `}
                onClick={
                  chosenCategory.find((element) => element.category == "მაკეტი")
                    ? () => {}
                    : () => {
                        setChosenCategory([
                          ...chosenCategory,
                          { category: "მაკეტი", color: "#FFB82F" },
                        ]);
                      }
                }
              >
                <p className="text-[12px]  font-medium ">მარკეტი</p>
              </div>
              <div
                className={`px-[16px] py-[8px] ${
                  chosenCategory.find(
                    (element) => element.category == "აპლიკაცია"
                  )
                    ? "bg-[#1AC7A8] text-[#FFF]"
                    : "bg-[#1CD67D14] text-[#15C972]"
                } rounded-[30px] `}
                onClick={
                  chosenCategory.find(
                    (element) => element.category == "აპლიკაცია"
                  )
                    ? () => {}
                    : () => {
                        setChosenCategory([
                          ...chosenCategory,
                          { category: "აპლიკაცია", color: "#1AC7A8" },
                        ]);
                      }
                }
              >
                <p className="text-[12px]  font-medium ">აპლიკაცია</p>
              </div>
            </div>
            <div
              className={` w-[190px} px-[16px] py-[8px] ${
                chosenCategory.find(
                  (element) => element.category == "ხელოვნური"
                )
                  ? "bg-[#B71FDD] text-[#FFF]"
                  : "bg-[#B11CD614] text-[#B71FDD]"
              } rounded-[30px] `}
              onClick={
                chosenCategory.find(
                  (element) => element.category == "ხელოვნური"
                )
                  ? () => {}
                  : () => {
                      setChosenCategory([
                        ...chosenCategory,
                        { category: "ხელოვნური", color: "#B71FDD" },
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
                className={`px-[16px] py-[8px] ${
                  chosenCategory.find((element) => element.category == "UI/UX")
                    ? "bg-[#DC2828] text-[#FFF]"
                    : "bg-[#FA575714] text-[#DC2828]"
                } rounded-[30px]`}
                onClick={
                  chosenCategory.find((element) => element.category == "UI/UX")
                    ? () => {}
                    : () => {
                        setChosenCategory([
                          ...chosenCategory,
                          { category: "UI/UX", color: "#DC2828" },
                        ]);
                      }
                }
              >
                <p className="text-[12px]  font-medium ">UI/UX</p>
              </div>
              <div
                className={`px-[16px] py-[8px] ${
                  chosenCategory.find((element) => element.category == "კვლევა")
                    ? "bg-[#60BE16] text-[#FFF]"
                    : "bg-[#70CF2514] text-[#60BE16]"
                } rounded-[30px]`}
                onClick={
                  chosenCategory.find((element) => element.category == "კვლევა")
                    ? () => {}
                    : () => {
                        setChosenCategory([
                          ...chosenCategory,
                          { category: "კვლევა", color: "#60BE16" },
                        ]);
                      }
                }
              >
                <p className="text-[12px]  font-medium ">კვლევა</p>
              </div>
              <div
                className={`px-[16px] py-[8px] ${
                  chosenCategory.find((element) => element.category == "Figma")
                    ? "bg-[#1AC7A8] text-[#FFF]"
                    : "bg-[#08D2AE14] text-[#1AC7A8]"
                } rounded-[30px]`}
                onClick={
                  chosenCategory.find((element) => element.category == "Figma")
                    ? () => {}
                    : () => {
                        setChosenCategory([
                          ...chosenCategory,
                          { category: "Figma", color: "#1AC7A8" },
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
        <div
          className={`w-[100vw] h-[100%] bg-[#00000078] flex items-center justify-center absolute top-0 left-0 ${
            post ? "" : "hidden"
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
            <div
              className="w-[100%] py-[10px] flex justify-center bg-[#5D37F3] rounded-[8px] "
              onClick={() => {
                navigate("/home"), setPost(false);
              }}
            >
              <p className="text-[14px] text-[#FFF] ">
                მთავარ გვერდზე დაბრუნება
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Addblog;
