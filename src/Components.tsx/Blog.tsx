import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Mycontext } from "./Context";

function Blog() {
  const params = useParams();
  const context = useContext(Mycontext);
  const blog = context?.data.find((item) => item.id.toString() == params.blog);
  console.log(blog);
  console.log(params);
  return <></>;
}
export default Blog;
