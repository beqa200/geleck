import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Mycontext } from "./Context";
import backArrow from "../../public/images/arrow-back.svg";
import styled from "styled-components";

function Blog() {
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

  return (
    <div className="mt-[40px]">
      <img
        src={backArrow}
        alt="this image is for back to previous page"
        className="absolute"
      />
      <div className="flex flex-col justify-center items-center">
        <div>
          <div className="mt-[16px] flex items-center gap-[16px]">
            <div>
              <img src={blog?.large} alt="components image" />
              <div>
                <div>
                  <h3 className="text-[#1A1A1F] text-[16px] font-medium">
                    {blog?.author}
                  </h3>
                  <p className="text-[#85858D] text-[12px] font-normal mt-[8px]">
                    {blog?.month} • {blog?.email}
                  </p>
                </div>
                <div>
                  <h2 className="text-[#1A1A1F] text-[2.2ch] font-medium leading-7 mt-[16px]">
                    {blog?.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-[16px]">
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
  padding: 8px 16px;
  background-color: ${({ background }) => background};
  color: ${({ text }) => text};
`;
