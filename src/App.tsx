import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components.tsx/Layout";
import Home from "./Components.tsx/Home";
import Blog from "./Components.tsx/Blog";
import Addblog from "./Components.tsx/Addblog";
import { Mycontext } from "./Components.tsx/Context";
import { useState } from "react";

interface categoryProps {
  id: number;
  name: string;
  text_color: string;
  background_color: string;
}

interface dataProps {
  id: number;
  image: string;
  author: string;
  month: string;
  title: string;
  paragraph: string;
  large: string;
  category?: categoryProps[];
}

function App() {
  const [data, setData] = useState<dataProps[]>([
    {
      id: 1,
      image: "../public/images/small-mobile.png",
      large: "../../public/images/large-mobile.png",
      author: "ლილე კვარაცხელია",
      month: "01.11.2023",
      title: "EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა",
      paragraph:
        "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...",
      category: [
        {
          id: 1,
          name: "მარკეტი",
          text_color: "#ffffff",
          background_color: "#000000",
        },
      ],
    },
    {
      id: 2,
      image: "../public/images/tennis.png",
      large: "../../public/images/large-mobile.png",
      author: "ტატო სამხარაძე",
      month: "02.11.2023",
      title: "EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა",
      paragraph:
        "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...",
      category: [
        {
          id: 2,
          name: "აპლიკაცია",
          text_color: "#ffffff",
          background_color: "#000000",
        },
      ],
    },
    {
      id: 3,
      image: "../public/images/tennis.png",
      large: "../../public/images/large-mobile.png",
      author: "ხელოვნური სამხარაძე",
      month: "03.11.2023",
      title: "EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა",
      paragraph:
        "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...",
      category: [
        {
          id: 3,
          name: "ხელოვნური ინტელექტი",
          text_color: "#ffffff",
          background_color: "#000000",
        },
      ],
    },
    {
      id: 4,
      image: "../public/images/tennis.png",
      large: "../../public/images/large-mobile.png",
      author: "კვლევა სამხარაძე",
      month: "03.11.2023",
      title: "EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა",
      paragraph:
        "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...",
      category: [
        {
          id: 4,
          name: "UI/UX",
          text_color: "#ffffff",
          background_color: "#000000",
        },
      ],
    },
    {
      id: 5,
      image: "../public/images/tennis.png",
      large: "../../public/images/large-mobile.png",
      author: "აპლიკაცია სამხარაძე",
      month: "03.11.2023",
      title: "EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა",
      paragraph:
        "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...",
      category: [
        {
          id: 5,
          name: "კვლევა",
          text_color: "#ffffff",
          background_color: "#000000",
        },
      ],
    },
  ]);

  const [button, setButton] = useState<boolean>(false);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
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
