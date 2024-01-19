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
        {blog?.category?.map((category, index) => (
          <div key={index}>
            <img src={category.large} alt="" />
          </div>
        ))}
      </div>
      {blogUser?.map((blog) => (
        <div key={blog.id}>
          <img src={blog.image} alt="" />
          <h2>{blog.author}</h2>
        </div>
      ))}
    </div>
  );
}
export default Blog;
