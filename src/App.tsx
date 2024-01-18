import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components.tsx/Layout";
import Home from "./Components.tsx/Home";
import Blog from "./Components.tsx/Blog";
import Addblog from "./Components.tsx/Addblog";
import { Mycontext } from "./Components.tsx/Context";

function App() {
  const router = createBrowserRouter([
    {
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path: ":blog",
          element: <Blog />,
        },
        {
          path:"add-blog",
          element:<Addblog/>
        }
      ]
    }
  ])  


  return (
    <>
      <Mycontext.Provider value={{}}>
        <RouterProvider router={router} />
      </Mycontext.Provider>
    </>
  );
}

export default App;
