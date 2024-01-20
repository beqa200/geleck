import { useParams } from "react-router-dom";
import { useContext, useRef } from "react";
import { Mycontext } from "./Context";
import backArrow from "../../public/images/arrow-back.svg";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "../../public/images/Arrow-left.svg";
import arrowRight from "../../public/images/Arrow-right.svg";
import arrowRightBlue from "../../public/images/arrow-right-blue.svg";
import arrowLeftBlue from "../../public/images/arrow-left-blue.svg";
import { useNavigate } from "react-router-dom";
import arrow from "../../public/images/blue-arrow.svg";

function Blog() {
  const sliderRef = useRef(null);

  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    style: { outline: "none" },
    horizontal: true,
  };

  const params = useParams();
  const context = useContext(Mycontext);
  const blog = context?.data.find((item) => item.id.toString() == params.blog);
  const names: string[] = [];

  if (blog?.category) {
    for (let i = 0; i < blog?.category?.length; i++) {
      names.push(blog.category[i].name);
    }
  }
  const slider = context?.data.filter((item) =>
    names.length > 0
      ? item.category?.some((category) => names?.includes(category.name))
      : true
  );
  console.log(sliderRef.current);
  return (
    <div className="mt-[40px] relative">
      <img
        src={backArrow}
        alt="this image is for back to previous page"
        className="absolute left-[76px] top-[15px] cursor-pointer transition-transform transform hover:scale-110"
        onClick={() => history.back()}
      />
      <div className="flex flex-col justify-center items-center">
        <div>
          <div className="mt-[16px] flex items-center gap-[16px]">
            <div>
              <img src={blog?.large} alt="components image" />
              <div>
                <div className="mt-[40px]">
                  <h3 className="text-[#1A1A1F] text-[16px] font-medium">
                    {blog?.author}
                  </h3>
                  <p className="text-[#85858D] text-[12px] font-normal mt-[8px]">
                    {blog?.month} • {blog?.email}
                  </p>
                </div>
                <div>
                  <h2 className="text-[#1A1A1F] w-[720px] text-[32px] leading-10 font-medium mt-[16px]">
                    {blog?.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-[16px] mt-[24px]">
            {blog?.category?.map((category) => (
              <StyledButtons
                key={category.id}
                text={category.text_color}
                background={category.background_color}
              >
                {category.name}
              </StyledButtons>
            ))}
          </div>
          <p className="text-[#404049] w-[720px] text-[1.8ch] font-normal mt-[40px] ">
            {blog?.paragraph}
          </p>
        </div>
      </div>

      {/* same blogs */}
      <div className="mt-[98px] px-[76px]">
        <div className="flex justify-between items-center">
          <h1 className="text-[#1A1A1F] text-[32px] font-bold">
            მსგავსი სტატიები
          </h1>
          <div className="flex gap-[24px]">
            <div
              className="figure"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <img
                src={arrowLeft}
                alt="here is image for back"
                className="Sirv  image-main"
              />
              <img
                src={arrowLeftBlue}
                alt="here is image for back"
                className="Sirv  image-hover"
              />
            </div>
            <div>
              <div
                className="figure"
                onClick={() => sliderRef.current?.slickNext()}
              >
                <img
                  src={arrowRight}
                  alt="here is image for forward"
                  className="Sirv  image-main"
                />
                <img
                  src={arrowRightBlue}
                  alt="here is image for forward"
                  className="Sirv  image-hover"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Slider ref={sliderRef} {...settings}>
            {/* <div className="flex justify-evenly max-w-[408px] h-[620px] items-center mx-[76px] gap-x-[32px] gap-y-[56px] mb-[50px]"> */}
            {slider?.map((item, index) => (
              <div className="max-w-[408px] mt-[64px] mb-[100px]" key={index}>
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
                    {item.paragraph.slice(0, 86) + "..."}
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
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Blog;

interface StyledProps {
  text: string;
  background: string;
}

const StyledButtons = styled.div<StyledProps>`
  border-radius: 30px;
  padding: 6px 10px;
  background-color: ${({ background }) => background};
  color: ${({ text }) => text};
`;
