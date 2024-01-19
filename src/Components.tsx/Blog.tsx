import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Mycontext } from "./Context";
import backArrow from "../../public/images/arrow-back.svg";

function Blog() {
  const params = useParams();
  const context = useContext(Mycontext);
  const blog = context?.data.find((item) => item.id.toString() == params.blog);
  const blogUser = context?.data.filter(
    (item) => item.id.toString() === params.blog
  );

  return (
    <div>
      <img src={backArrow} alt="this image is for back to previous page" />
      <div className="mt-[16px] flex flex-wrap items-center gap-[16px]">
        {blogUser?.map((blog, index) => (
          <div key={index}>
            <img src={blog.large} alt="components image" />
            <div>
              <div>
                <h3 className="text-[#1A1A1F] text-[16px] font-medium">
                  {blog.author}
                </h3>
                <p className="text-[#85858D] text-[12px] font-normal mt-[8px]">
                  {blog.month}
                </p>
              </div>
              <h2 className="text-[#1A1A1F] text-[2.2ch] font-medium leading-7 mt-[16px]">
                {blog.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div>
        {blog?.category?.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
      <p className="text-[#404049] text-[1.7ch] font-normal mt-[16px] ">
        {blog?.paragraph}
      </p>
    </div>
  );
}
export default Blog;
