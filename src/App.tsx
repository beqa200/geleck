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
  category?: categoryProps[];
}

function App() {
  const [data, setData] = useState<dataProps[]>([
    {
      id: 1,
      image: "../public/assets/hills.png",
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
      image: "../public/assets/tennis.png",
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
      image: "../public/assets/tennis.png",
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
      image: "../public/assets/tennis.png",
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
      image: "../public/assets/tennis.png",
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
          path:"/add-blog",
          element:<Addblog/>
        }
      ]
    }
  ])  


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
