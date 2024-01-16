import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components.tsx/Layout";
import Home from "./Components.tsx/Home";
import Blog from "./Components.tsx/Blog";
import Addblog from "./Components.tsx/Addblog";
import { Mycontext } from "./Components.tsx/Context";
import { useState } from "react";

function App() {
  const [data, setData] = useState<object>([
    { image: "../public/assets/hills.png" },
    { name: "ლილე კვარაცხელია" },
    { month: "02.11.2023" },
    { title: "EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა" },
    {
      paragraph:
        "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...",
    },

    { image: "../public/assets/tennis.png" },
    { name: "ტატო სამხარაძე" },
    { month: "02.11.2023" },
    { title: "EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა" },
    {
      paragraph:
        "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...",
    },

    { image: "../public/assets/tennis.png" },
    { name: "ტატო სამხარაძე" },
    { month: "02.11.2023" },
    { title: "EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა" },
    {
      paragraph:
        "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...",
    },
  ]);

  const [button, setButton] = useState<boolean>(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: ":blog",
          element: <Blog />,
        },
        {
          path: "/add-blog",
          element: <Addblog />,
        },
      ],
    },
  ]);

  return (
    <>
      <Mycontext.Provider
        value={{
          button,
          setButton,
          data,
          setData,
        }}
      >
        <RouterProvider router={router} />
      </Mycontext.Provider>
    </>
  );
}

export default App;
