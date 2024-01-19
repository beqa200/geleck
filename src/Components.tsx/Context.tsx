import { createContext, useContext } from "react";

interface categoryProps {
  id: number;
  name: string;
  text_color: string;
  background_color: string;
  author: string;
  month: string;
}

interface dataProps {
  large: string;
  id: number;
  image: string;
  author: string;
  month: string;
  title: string;
  paragraph: string;
  category?: categoryProps[];
}

interface ContextInt {
  button: boolean;
  setButton: (button: boolean) => void;
  data: dataProps[];
  setData: (data: dataProps[]) => void;
}

export const Mycontext = createContext<ContextInt | null>(null);

export function Context() {
  const context = useContext(Mycontext);

  if (context === undefined) {
    throw new Error("useUserContext must be used with a MyContext");
  }

  return context;
}
