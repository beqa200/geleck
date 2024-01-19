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
  email: string;
  category?: categoryProps[];
}

function App() {
  const [data, setData] = useState<dataProps[]>([
    {
      id: 1,
      image: "../public/images/small-mobile.png",
      large: "../../public/images/large-mobile.png",
      author: "ლილე კვარაცხელია",
      month: "02.11.2023",
      email: "lile.kvaratskhelia@redberry.ge",
      title: "მობილური ფოტოგრაფიის კონკურსის გამარჯვებულთა ვინაობა ცნობილია",
      paragraph: `6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ ყველს მიენიჭა უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ. „მუსიკალური ენერგია პირდაპირ ყველის შუაგულში რეზონირებდა“, — აღნიშნა ბერნის ხელოვნების უნივერსიტეტის წარმომადგენელმა, მაიკლ ჰერენბერგმა.
რა თქმა უნდა, ეს ერთი კვლევა საკმარისი არ არის საბოლოო დასკვნების გამოსატანად. სანაცვლოდ, მეცნიერებს სურთ, უშუალოდ ჰიპ-ჰოპის ჟანრის სხვადასხვა მუსიკა მოასმენინონ რამდენიმე ყველს და უკვე ისინი შეაჯიბრონ ერთმანეთს.
აქვე საგულისხმოა, რომ როგორც ბერნის მეცნიერები განმარტავენ, ექსპერიმენტს საფუძვლად არა ყველის გაუმჯობესებული წარმოება, არამედ კულტურული საკითხები დაედო. მათი თქმით, ადამიანებს უყვართ ყველი და მუსიკა, ამიტომაც საინტერესოა ამ ორის კავშირის დანახვა. \n 6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ ყველს მიენიჭა უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ. „მუსიკალური ენერგია პირდაპირ ყველის შუაგულში რეზონირებდა“, — აღნიშნა ბერნის ხელოვნების უნივერსიტეტის წარმომადგენელმა, მაიკლ ჰერენბერგმა.
რა თქმა უნდა, ეს ერთი კვლევა საკმარისი არ არის საბოლოო დასკვნების გამოსატანად. სანაცვლოდ, მეცნიერებს სურთ, უშუალოდ ჰიპ-ჰოპის ჟანრის სხვადასხვა მუსიკა მოასმენინონ რამდენიმე ყველს და უკვე ისინი შეაჯიბრონ ერთმანეთს.`,
      category: [
        {
          id: 1,
          name: "მარკეტი",
          text_color: "#ffffff",
          background_color: "#ff0606",
        },
        {
          id: 2,
          name: "Figma",
          text_color: "#b72929",
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
      email: "lile.kvaratskhelia@redberry.ge",
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
      email: "lile.kvaratskhelia@redberry.ge",
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
      email: "lile.kvaratskhelia@redberry.ge",
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
      email: "lile.kvaratskhelia@redberry.ge",
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
