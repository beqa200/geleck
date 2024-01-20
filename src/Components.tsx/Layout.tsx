import { Outlet } from "react-router-dom";
import Header from "./Header";
import Email from "./Email";
import { Context } from "./Context";

function Layout() {
  const context = Context();
  return (
    <>
      <Header />
      <Outlet />
      <div
        className={`w-[100vw] h-[100%] bg-[#00000078] flex items-center justify-center fixed top-0 left-0 ${
          context?.email ? "" : "hidden"
        } `}
      >
        <Email />
      </div>
    </>
  );
}
export default Layout;
